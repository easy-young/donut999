const express = require('express');
const router = express.Router();
const { pool } = require('../db.js');

router.post('/flavor', async (req, res) => {
    const sql = `SELECT idx, avg(flavor) AS flavor FROM review GROUP BY idx ORDER BY flavor DESC LIMIT 5`;
    try {
        const [result] = await pool.execute(sql);
        res.json({result});
    } catch (e) {
        console.log(e.message);
        res.json({});
    }
});

router.post('/atmosphere', async (req, res) => {
    const sql = `SELECT idx, avg(atmosphere) AS atmosphere FROM review GROUP BY idx ORDER BY atmosphere DESC LIMIT 5`;
    try {
        const [result] = await pool.execute(sql);
        res.json({result});
    } catch (e) {
        console.log(e.message);
        res.json({});
    }
});

router.post('/cheap', async (req, res) => {
    const sql = `SELECT idx, avg(cheap) AS cheap FROM review GROUP BY idx ORDER BY cheap DESC LIMIT 5`;
    try {
        const [result] = await pool.execute(sql);
        res.json({result});
    } catch (e) {
        console.log(e.message);
        res.json({});
    }
});

router.post('/service', async (req, res) => {
    const sql = `SELECT idx, avg(service) AS service FROM review GROUP BY idx ORDER BY service DESC LIMIT 5`;
    try {
        const [result] = await pool.execute(sql);
        res.json({result});
    } catch (e) {
        console.log(e.message);
        res.json({});
    }
});

module.exports = router;