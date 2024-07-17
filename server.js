const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');

const port = process.env.PORT || 3000;
app.set('port', port);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended : true
}));
app.use(cors());
app.disable('x-powered-by');

server.listen(3000, '192.168.48.122', function(){
    console.log('Node app' + process.pid + ' iniciada...')
});

app.get('/', (req, res)=>{
    res.send('Ruta raiz');
});

app.use((err, req, res, next)=>{
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});