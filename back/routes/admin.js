const express = require('express')
const router = express.Router()
const {pool} = require('../db.js')

router.post('/store/setting',async (req,res)=>{
        const sql = `select * from shop`
    
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
    
)

module.exports = router