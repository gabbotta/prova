const express = require('express');
const router = express.Router();

router.post('/:input', (req, res) => { 
    const x = req.params.input
    if (x = String) {
        k = x.lenght;
        out= k*k;
        res.status(200).json({
            message: 'il quadrato della lunghezza è:' (out),
        });
    } 
    else {
        res.status(500).json({
            message: '-1'
        });
    };
});

