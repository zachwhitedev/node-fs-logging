const express = require('express')
const fs = require('fs');

const log = function(entry) {
fs.appendFileSync('mylog.log', new Date().toISOString() + ' - ' + entry + '\n');
};

const app = express();

app.get('/', (req, res) => {
    log('Homepage visited.')
    res.sendFile(__dirname + '/index.html');
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log('app listening on port ' + port)
})