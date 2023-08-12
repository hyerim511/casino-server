// Import
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

// Instance
const app = express();
const port = 8080;
const textBodyParser = bodyParser.text({
    limit: '20mb', 
    defaultCharset: 'utf-8'
});

// Modules

// CORS
app.use(cors({
    origin: 'http://localhost:8081'
}));

// Body Parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Custom Header
app.options('/login', (req,res) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8081');
    res.header('Access-Control-Allow-Headers', 'casino');
    res.header('Access-Control-Allow-Methods', 'GET, POST');
    res.sendStatus(200);
});


// GET
// app.get('/', textBodyParser, async function(req, res){});

// POST
// app.post('/', textBodyParser, async function(req, res){});


// Listen
app.listen(port, (err)=>{
    if(err) {
        console.log('There was a problem: ', err);
        return;
    }
    console.log(`Server listening on http://localhost:${port}`);
});