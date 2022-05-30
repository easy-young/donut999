const express = require('express')
const router = express.Router()
const {pool} = require('../db.js')
const upload = require('../utils/upload.js')

router.post('/search/black', async (req,res)=>{
    const prepare = [req.body.payload]
    const sql = `select email,DATE_FORMAT(date,'%Y-%m-%d %h:%i:%s') AS stamp from black where email like '%${prepare}%'`

    try{
        const [result] = await pool.query(sql)
        const response = {
            result
        }
        res.json(response)
    }catch (e) {
        console.log(e.message)
        const response = {
            errormsg: e.message,
            errno: 1
        }
        
        res.json(response)  
    }
})

router.post('/search/review', async (req,res)=>{
    const prepare = [req.body.payload]
    const sql = `select *,DATE_FORMAT(date,'%Y-%m-%d %h:%i:%s') AS stamp from review where text like '%${prepare}%'`
    try{
        const [result] = await pool.query(sql)
        const response = {
            result
        }
        res.json(response)
    }catch (e) {
        console.log(e.message)
        const response = {
            errormsg: e.message,
            errno: 1
        }
        
        res.json(response)  
    }
})

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



router.post(`/store/confirm/delregi/:regi_id`,async (req,res)=>{
    
    const prepare = [[req.body]]
    const sql = `DELETE FROM register where idx in (${prepare})`
    const sql2 = `select *,DATE_FORMAT(time,'%Y-%m-%d') AS stamp from register`
        
        try {
            const [result] = await pool.query(sql)
            const [result2] = await pool.query(sql2)
     
            const response = {
                result2
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

router.post('/store/confirm/sort',async (req,res)=>{
    
    const prepare =[req.body.payload]
    if(prepare == '전체'){
        const sql1 = `select *,DATE_FORMAT(time,'%Y-%m-%d') AS stamp from register`
        try {
            const [result] = await pool.query(sql1)
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
    } else{
        const sql = `select *,DATE_FORMAT(time,'%Y-%m-%d') AS stamp from register where state='${prepare}'`
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
    


    
} 

)


router.post('/store/confirm/:register_id',async (req,res)=>{

    const sql = `select * from register where idx = ? `
    const prepare = [req.params.register_id]

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



const addstore = async (req, res, next ) => {
    let { name, station, stationEng, line, address, parking , protein, photo, special,operhour , website , menu , beverage , tel , intro  } = req.body
    if ( name == undefined )  return
    const sql = `INSERT INTO shop 
    (name, stationKor, station, line, address, parking, operhour, website, menu, beverage, tel, protein, photo, special, intro, more) 
    VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,'hi')`
    let prepare = [ name, station, stationEng, line, address, parking , operhour , website , menu , beverage , tel ,  protein, photo, special,intro]
    let prepare2 = [req.body.regi_id]
    const sql2 = `UPDATE register SET state = '승인' WHERE idx = ${prepare2}`

    try {
        const [result2] = await pool.execute(sql2)
        if(prepare == [undefined, undefined, undefined, undefined, undefined,undefined, undefined, undefined
        , undefined, undefined, undefined, undefined, undefined, undefined, undefined]) {
            return
        }
        const [result] = await pool.execute(sql,prepare)
        const response = {
            result
        }
        res.json(response)
    }

    catch (e) {
        console.log(e.message + '<< this')
        const response = {
            errormsg: e.message,
            errno: 1
        }
        res.json(response)  
    }
    next()
}

const addImg =  async (req, res) => {
    const { name, station } = req.body
    console.log(name, station)
    let image = []
    for ( let i = 1; i < 4; i++) {
        try {
            const [img] = req.files[`img`+i]
            image.push(img.filename)
        }
        catch (e) {
            image.push('N/A')
        }
    }
    console.log(image)

    const sql = `update shop set img1=?, img2=?, img3=? where name=? and station=?`
    const param = [image[0], image[1], image[2], req.body.name, req.body.station]
    console.log(param)
    try {
        const result = await pool.execute(sql, param)
    }
    catch(e) {
        console.log(e)
    }
}

router.use('/store/confirm/addstore/:register_id', addstore)
    
router.use('/store/confirm/addImg',upload.fields([{name:'img1'},{name:'img2'},
{name:'img3'}]), addImg )


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
    const prepare = [req.body.user]
    const sql2 = `SELECT email, DATE_FORMAT(date,'%Y-%m-%d %h:%i:%s') AS stamp FROM black ORDER BY date DESC`

    try {
        const [result1] = await pool.execute(sql,prepare)
        const [result] = await pool.execute(sql2)
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
    const sql2 = `SELECT email, DATE_FORMAT(date,'%Y-%m-%d %h:%i:%s') AS stamp FROM black ORDER BY date DESC`

    try {
        const [result1] = await pool.execute(sql,prepare)
        const [result] = await pool.execute(sql2)
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
        console.log(result)
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
    const sql2 = `SELECT *, DATE_FORMAT(date,'%Y-%m-%d %h:%i:%s') AS stamp FROM review ORDER BY idx ASC`

    try {
        const [result1] = await pool.execute(sql,prepare)
        const [result] = await pool.execute(sql2)
        console.log(result)
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