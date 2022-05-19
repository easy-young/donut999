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

router.post(`/store/setting/:store_id`,async (req,res)=>{
    
    const sql = `select * from shop where idx = ? `
    const prepare = [req.params.store_id]

        try {
            const [result] = await pool.execute(sql,prepare)
            
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

router.post(`/store/setting/update/:store_id`,async (req,res)=>{
    
    const sql = `select * from shop where idx = ? `
    const prepare = [req.params.store_id]

        try {
            const [result] = await pool.execute(sql,prepare)
            
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