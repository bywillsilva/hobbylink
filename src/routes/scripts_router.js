const express = require('express');
const scripts_router = express.Router();

scripts_router.get('/scripts', (req, res) => {
    res.sendFile('scripts.js', { root: './public/js' });
});

scripts_router.get('/login_script', (req, res) => {
    res.sendFile('login.js', { root: './public/js' });
});

scripts_router.get('/register_script', (req, res) => {
    res.sendFile('register.js', { root: './public/js' });
});

scripts_router.get('/hobby_community_script', (req, res) => {
    res.sendFile('hobby_community.js', { root: './public/js' });
});

scripts_router.get('/community_script', (req, res) => {
    res.sendFile('community.js', { root: './public/js' });
});


module.exports = scripts_router;