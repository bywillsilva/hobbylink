const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile('index.html', { root: './public' });
}); 

router.get('/login', (req, res) => {
  res.sendFile('login.html', { root: './public/view' });
}); 

router.get('/home', (req, res) => {
  res.sendFile('home.html', { root: './public/view' });
}); 

module.exports = router;