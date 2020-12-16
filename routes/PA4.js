const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const fetch_Con = require('../config/config');

const red = require('redis');
const client = red.createClient();
const {promisify} = require('util');

const a_set = promisify(client.set).bind(client);
const a_get = promisify(client.get).bind(client);
const a_exists = promisify(client.exists).bind(client);
const a_expire = promisify(client.expire).bind(client);

client.flushdb((error, response) => {
    if (error) {
        throw new Error('Oops! Flush error!')
    }
});

router.get('/',(req, res) => {
    res.render('PA4',{title: 'Current Weather'});
});

router.post('/', async (req, res, next) => {
    const city = req.body.cityname;
    let match = await a_exists(city);
    if (match) {
        let cached_data = await a_get(city);
        let cached_obejct = JSON.parse(cached_data);
        let response = {
            data: cached_obejct,
            cached: true
        }
        res.send(response);
    }
    else {
        let raw = await fetch(fetch_Con.fetchOptions.url+city.toString());
        let clean = await raw.json();
        await a_set(city, JSON.stringify(clean));
        await a_expire(city, 15);
        let response = {
            data: clean,
            cached: false
        }
        res.send(response);
    }
})

const response = async city => {
    let raw = await fetch(fetch_Con.fetchOptions.url+city.toString());
    let clean = await raw.json();
    return clean;
}

module.exports = router;