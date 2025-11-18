const express = require('express');
const scripts_router = express.Router();

scripts_router.get('/scripts', (req, res) => {
    res.sendFile('scripts.js', { root: './public/js' });
});

module.exports = scripts_router;