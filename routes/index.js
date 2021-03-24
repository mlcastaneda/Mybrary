const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');  //se va a index.ejs
})

module.exports = router;