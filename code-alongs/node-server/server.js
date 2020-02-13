const http = require('http');

const randomFacts = [
    'My name stands for Bradley James',
    'I love pizza',
    'I played trumpet in marching band in high school and college',
    'I started an underground fight club at Our Daily Bread Ministries',
    "I'm a Teapot"
];

http.createServer((req,res) =>{
     
    const fact = randomFacts[Math.floor(Math.random() * Math.floor(randomFacts.length))];

    if ( fact === "I'm a Teapot" ) {
        res.writeHead(418, {"Content-type": "text/html"});
    } else {
        res.writeHead(200, {"Content-type": "text/html", 'X-Hello': 'World'});
    }

    res.write(`
        <html>
        <style>
            * {
                color: #f3f3f3;
                background: #333;
                font-family: 'PT Sans', sans-serif;
                text-align: center;
            }
        </style>
        <h1> Random Facts </h1>
        <h2> My Random Fact:  </h2>
        <p><em>${fact}</em></p>
    `);
    res.end();
}).listen(8888);