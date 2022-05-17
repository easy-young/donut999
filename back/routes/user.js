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
    }
    catch (e) {
        console.log(e)
    }
    res.redirect('http://localhost:3000')
}

router.use('/klogin', klogin)
router.use('/oauth/kakao', kauth)

module.exports = router