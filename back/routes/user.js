const express = require('express')
const router = express.Router()
const app = express()
const qs = require('qs')

const pool = require('../db.js').pool
const { default: axios } = require('axios')

const client_id = 'bcc6575307f03520e0cd6a242a769d2f'
const host = 'https://kauth.kakao.com'
const redirect_uri = 'http://localhost:4000/user/oauth/kakao'
const client_secret = 'hzcDi1kFEYYxRpfvJY6bPS9HTGIGkBnA'
const redirect_URI = host + `/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`
const { createToken } = require('../utils/jwt.js')

const userCookie = ''

const klogin = (req, res) => {
    const kakaoAuth = `https://kauth.kakao.com/oauth/authorize?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=code`
    res.redirect(kakaoAuth)
}

const kauth = async(req, res) => {
    const {query:{code}} = req
    const token_url = host + '/oauth/token'
    const headers = {
        'Content-type': 'application/x-www-form-urlencoded'
    }
    const body = qs.stringify({
        grant_type:'authorization_code',
        client_id,
        redirect_uri,
        code,
        client_secret
    })
    const response = await axios.post(token_url, body, headers)
    

    try {
        const { access_token:ACCESS_TOKEN} = response.data
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
        console.log(userinfo.data)
        const nickname = userinfo.data.kakao_account.profile.nickname
        const email = userinfo.data.kakao_account.profile.email
        const tempInfo = {nickname, email}
        const jwt_token = createToken({...tempInfo})
        res.cookie('token', jwt_token, {
            path:'/',
            httpOnly:true
        })
    }
    catch (e) {
        console.log(e)
    }
    res.redirect('http://localhost:3000')
}

const klogout = (req, res) => {
    res.clearCookie('token', {path : '/'})
    res.send(`<script>alert('로그아웃 되었습니다.'); location.href='http://localhost:3000';</script>`)
}

router.use('/klogin', klogin)
router.use('/oauth/kakao', kauth)
router.use('/klogout', klogout)

module.exports = router