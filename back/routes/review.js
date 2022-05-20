const express = require('express')
const router = express.Router()
const app = express()

const pool = require('../db.js').pool
const { default: axios } = require('axios')

const createReview = async (req, res) => {
    const { email, text, number } = req.body
    const { flavor, atmosphere, cheap, service } = number
    const sql = `insert into review(sidx, email, flavor, atmosphere, cheap, service, text) 
        values(3, ?, ?,?,?,?,?)`
    const param = [email, flavor, atmosphere, cheap, service, text]

    try {
        const result = await pool.execute(sql, param)
        const response = {
            errno : 0,
            result
        }
        res.json(response)
    }
    catch (e) {
        console.log(e)
        const response = {
            errno : 1
        }
        res.json(response)
    }

}

router.use('/createReview', createReview)

module.exports = router