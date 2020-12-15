// PA3
// Mia Szela
// U12890497

const express = require('express');
const router = express.Router();



router.get('/',(req, res, next) => {
    console.log(`Got ${req.query.name} and ${req.query.age} on ${req.url} with (${req.method})`)
    res.render('ps3', {'name': req.query.name, 'age': req.query.age})
});

router.post('/',(req, res, next) => {
    console.log(`Got ${req.body.name} and ${req.body.age} on ${req.url} with (${req.method})`)
    res.render('ps3', {'name': req.body.name, 'age': req.body.age,
        'length':req.body.name.length, 'isPost': true})
});

module.exports = router;