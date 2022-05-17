const express = require('express')
const router = express.Router()

router.post('/store/setting',async (req,res)=>{
    const store = async (req, res) => {
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
    
})

module.exports = router