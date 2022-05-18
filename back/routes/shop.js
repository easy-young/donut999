const express = require('express')
const router = express.Router()
const app = express()

const pool = require('../db.js').pool
const { default: axios } = require('axios')

const shop = async (req, res) => {
    const sql = `select name from shop`

    try {
        const [result] = await pool.execute(sql)

        const response = {
            result
        }
        res.json(response)
    }

    catch (e) {
        console.log(e.message)
        const response = {
            errormsg: e.message,
            errno: 1
        }
        
        res.json(response)  
    }
} 

router.use('/shop', shop)

module.exports = router