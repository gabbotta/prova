const app = require('./app');
const http = require('http');
const express = require('express');
const app = express();
const quadrato = require('./quadrato');


app.get('/:input', (req, res) => { 
    const x = req.params.input
    res.status(200).json({
    message: 'il quadrato della lunghezza è:'+
    static q(x){
        if ((typeof x) === "string"){
            return Math.pow(x.length,2)
        }
        else {
            return -1
        }
        })  
});


const port = process.env.PORT || 3000

const server = http.createServer(app);

server.listen(port);
module.exports = app;