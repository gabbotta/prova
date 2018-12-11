const express = require('express');
const app = express();
const quadrato = require('./quadrato');


app.get('/:input', (req, res) => { 
    const x = req.params.input
    res.status(200).json({
    message: 'il quadrato della lunghezza è:'+
    quadrato.q(x)
        })  
});

module.exports = app;