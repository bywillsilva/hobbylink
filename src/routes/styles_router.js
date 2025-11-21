const express = require('express');
const styles_router = express.Router();

styles_router.get('/global_config', (req, res) => {
    res.sendFile('global_config.css', { root: './public/css' });
});

styles_router.get('/text_config', (req, res) => {
    res.sendFile('text_config.css', { root: './public/css' });
});

styles_router.get('/init_config', (req, res) => {
    res.sendFile('init_config.css', { root: './public/css' });
});

styles_router.get('/components_config', (req, res) => {
    res.sendFile('components.css', { root: './public/css' });
});

styles_router.get('/login_config', (req, res) => {
    res.sendFile('login_config.css', { root: './public/css' });
});

styles_router.get('/login_form_config', (req, res) => {
    res.sendFile('login_form.css', { root: './public/css' });
});

styles_router.get('/register_form_config', (req, res) => {
    res.sendFile('register_form.css', { root: './public/css' });
});

styles_router.get('/hobbies_config', (req, res) => {
    res.sendFile('hobbies_config.css', { root: './public/css' });
});

styles_router.get('/community_config', (req, res) => {
    res.sendFile('community_config.css', { root: './public/css' });
});

module.exports = styles_router;