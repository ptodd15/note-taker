const path = require('path');
const router = require('express').Router();

// GET 
app.get('notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// CSS 
app.get('styles', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/css/stiles.css'));
});

// Return home
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
