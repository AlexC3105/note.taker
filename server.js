const express = require('express');
const app = express();
const path = require('path');
const api = require('./Dev/routes/index.js');
const {clog} = require('./Dev/middleware/clog.js');

const PORT = process.env.PORT || 3001;

app.use(clog);

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/api', api);
app.use(express.static('public'));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'Dev/public/index.html'))
});

app.listen(PORT, () => {
    console.log('Listening at ${PORT}')
});