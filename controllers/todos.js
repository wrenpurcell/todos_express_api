//set up express and router
const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.send('index');
});

module.exports = router;