const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    obj = {
        a: 'this',
        number: 7
    }
    res.json(obj)
})

module.exports = router;