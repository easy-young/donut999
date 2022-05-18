const express = require('express');
const router = express.Router();
const { pool } = require('../db.js');

router.post('/join', async (req, res) =>{
    const { name, address, sns } = req.body.payload;
    let { menu, call } = req.body.payload;
    if (menu[1] === '' && menu[2] === '') menu = menu[0];
    else if (menu[2] === '') menu = menu[0] + ',' + menu[1];
    else menu = menu[0] + ',' + menu[1] + ',' + menu[2];
    call = '02' + call[0] + call[1];

    const sql = `INSERT INTO register(store, menu, address, contact, sns) values('${name}', '${menu}', '${address}', '${call}', '${sns}')`;
    try {
        const [result] = await pool.execute(sql);
        res.json({result});
    } catch (e) {
        console.log(e.message);
        const response = {
            error: e.message
        };
        res.json({response});
    }
});

module.exports = router;