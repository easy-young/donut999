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
    console.log('params',req.params)
    console.log(req.body)
    const { station, line, address, parking , protein, photo, special,operhour , website , menu , beverage , tel , intro  } = req.body
    const params = [req.params.store_id]
    const sql = `UPDATE shop SET  station = ?, line = ?, address = ?, parking = ? , protein = ?, photo = ?, special = ?, operhour = ?, website = ?, menu = ?, beverage = ?, tel = ?, intro = ? where idx = ? `
    const prepare = [ station, line, address, parking , protein, photo, special, operhour , website , menu , beverage , tel , intro,params]

        try {
            const [result] = await pool.query(sql,prepare)
            
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

router.post(`/store/setting/delete/:store_id`,async (req,res)=>{
    const sql = `DELETE FROM shop where idx = ? `
    const prepare = [req.params.store_id]
    console.log(prepare)

        try {
            const [result] = await pool.query(sql,prepare)
            
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

router.post(`/store/confirm`,async (req,res)=>{
    const sql = `select *,DATE_FORMAT(time,'%Y-%m-%d %h:%i:%s') AS stamp from register`

        try {
            const [result] = await pool.query(sql)
            
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

router.post('/user/setting',async (req,res)=>{
    const sql = `SELECT email, DATE_FORMAT(date,'%Y-%m-%d %h:%i:%s') AS stamp FROM black ORDER BY date DESC`

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


router.post('/user/setting/addblack',async (req,res)=>{
    const sql = `insert into black (email) values (?)`
    const prepare = [req.body.email]
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

router.post('/user/setting/deleteblack/:kemail',async (req,res)=>{
    const sql = `DELETE FROM black where email = ? `
    const prepare = [req.params.kemail]
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

router.post('/user/setting/checkblack/:email',async (req,res)=>{
    const sql = `SELECT * FROM review where email = ? `
    const prepare = [req.params.email]
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



router.post('/review/setting',async (req,res)=>{
    const sql = `SELECT *, DATE_FORMAT(date,'%Y-%m-%d %h:%i:%s') AS stamp FROM review ORDER BY idx ASC`

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

router.post('/review/setting/deletereview/:reviewidx',async (req,res)=>{
    const sql = `DELETE FROM review where idx = ? `
    const prepare = [req.params.reviewidx]
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