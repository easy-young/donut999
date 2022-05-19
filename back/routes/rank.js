const express = require('express');
const router = express.Router();
const { pool } = require('../db.js');

router.post('/flavor', async (req, res) => {
    const sql = `SELECT * FROM review ORDER BY flavor DESC`;
    try {
        const result = await pool.execute(sql);
        res.json({result});
    } catch (e) {
        console.log(e.message);
        res.json({});
    }
});

router.post('/atmosphere', async (req, res) => {
    const sql = `SELECT * FROM review ORDER BY DESC`;
    try {
        const result = await pool.execute(sql);
        res.json({result});
    } catch (e) {
        console.log(e.message);
        res.json({});
    }
});

router.post('/unique', async (req, res) => {
    const sql = `SELECT * FROM review ORDER BY DESC`;
    try {
        const result = await pool.execute(sql);
        res.json({result});
    } catch (e) {
        console.log(e.message);
        res.json({});
    }
});

router.post('/parking', async (req, res) => {
    const sql = `SELECT * FROM review ORDER BY DESC`;
    try {
        const result = await pool.execute(sql);
        res.json({result});
    } catch (e) {
        console.log(e.message);
        res.json({});
    }
});

module.exports = router;