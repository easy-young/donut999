const express = require('express');
const router = express.Router();
const { pool } = require('../db.js');

router.post('/:idx', async (req, res) => {
    const idx = req.body.payload;
    const sql = `SELECT * FROM shop WHERE idx=${idx}`;
    try {
        const [[result]] = await pool.execute(sql);
        res.json(result);
    } catch (e) {
        console.log(e.message);
        res.json({});
    }
});

module.exports = router;