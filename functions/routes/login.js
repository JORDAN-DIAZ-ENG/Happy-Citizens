const express = require('express');
const router = express.Router();

router.get('/',(req, res, next) =>
{
    res.render('login', {title: 'Hey', message: 'Hello There!'});
});

module.exports = router;