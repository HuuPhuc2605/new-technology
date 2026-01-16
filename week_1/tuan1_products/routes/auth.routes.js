const express = require('express');
const router = express.Router();

// Show login
router.get('/login', (req, res) => {
    res.render('login');
});

// Handle login
router.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === 'admin' && password === '123') {
        req.session.user = username;   // lưu session
        res.redirect('/');             // 👉 VÀO TRANG PRODUCTS
    } else {
        res.redirect('/login');        // sai → quay lại login
    }
});


// Logout
router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login');
});

module.exports = router;
