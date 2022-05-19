import React,{ useEffect } from 'react'
import axios from 'axios'
import qs from 'qs'
import { useNavigate } from 'react-router-dom'

const Test = () => {

    const REST_API_KEY = "bcc6575307f03520e0cd6a242a769d2f";
    const REDIRECT_URI = "http://localhost:3000/oauth/kakao/callback";
    const CLIENT_SECRET = "hzcDi1kFEYYxRpfvJY6bPS9HTGIGkBnA";

    const code = new URL(window.location.href).searchParams.get("code");
    const navigate = useNavigate();

    const getToken = async () => {
        const payload = qs.stringify({
            grant_type: "authorization_code",
            client_id: REST_API_KEY,
            redirect_uri: REDIRECT_URI,
            code,
            client_secret: CLIENT_SECRET,
        })

        try {
            const res = await axios.post(
                "https://kauth.kakao.com/oauth/token",
                payload
            );

            window.Kakao.init(REST_API_KEY);
            window.Kakao.Auth.setAccessToken(res.data.access_token);
            const ACCESS_TOKEN = res.data.access_token

            const option = {
                'Content-type' : 'application/x-www-form-urlencoded',
                'Authorization':`Bearer ${ACCESS_TOKEN}`
            }
            const url = 'https://kapi.kakao.com/v2/user/me'
            const userinfo = await axios.post(url, null, {
                headers:{
                    ...option
                }
            })

            const nickname = userinfo.data.kakao_account.profile.nickname
            const email = userinfo.data.kakao_account.email
            const tempInfo = {nickname, email}

            console.log(tempInfo) 
            navigate("/profile");
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(()=>{
        getToken()
    },[])

    return null
}

export default Test