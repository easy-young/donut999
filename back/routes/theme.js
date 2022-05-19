const express = require('express');
const router = express.Router();
const { pool } = require('../db.js');

router.post('/protein', async (req, res) => {
    const sql = `SELECT * FROM shop WHERE protein='Y'`;
    try {
        const result = await pool.execute(sql);
        res.json({result});
    } catch (e) {
        console.log(e.message);
        res.json({});
    }
});

router.post('/photo', async (req, res) => {
    const sql = `SELECT * FROM shop WHERE photo='Y'`;
    try {
        const result = await pool.execute(sql);
        res.json({result});
    } catch (e) {
        console.log(e.message);
        res.json({});
    }
});

router.post('/unique', async (req, res) => {
    const sql = `SELECT * FROM shop WHERE unique='Y'`;
    try {
        const result = await pool.execute(sql);
        res.json({result});
    } catch (e) {
        console.log(e.message);
        res.json({});
    }
});

router.post('/parking', async (req, res) => {
    const sql = `SELECT * FROM shop WHERE parking='Y'`;
    try {
        const result = await pool.execute(sql);
        res.json({result});
    } catch (e) {
        console.log(e.message);
        res.json({});
    }
});

module.exports = router;