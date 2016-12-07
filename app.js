var port = process.env.PORT || 3000,
    http = require('http'),
    fs = require('fs'),
    html = fs.readFileSync('index.html');
    var express = require('express');
    var HTMLing = require('htmling');
    var nunjucks = require('nunjucks');

var cfenv = require('cfenv');

var log = function(entry) {
    fs.appendFileSync('/tmp/sample-app.log', new Date().toISOString() + ' - ' + entry + '\n');
};

var app = express();
nunjucks.configure('views', {
    autoescape: true,
    express: app
});


// serve the files out of ./public as our main files
app.use(express.static(__dirname + '/views'));
app.engine('html', HTMLing.express(__dirname + '/views/', {watch: true}));
app.set('view engine', 'html');

app.get('/bar', function(req, res, next){
  res.render('bar.html', {title:'JeffSan', message:'Cognitive Health Application Management System'});
});


app.get('/results', function(req, res, next){
  res.render('results.html', {title:'JeffSan', message:'Cognitive Health Application Management System'});
});

app.get('/bubble', function(req, res, next){
  res.render('bubble.html', {title:'JeffSan', message:'Cognitive Health Application Management System'});
});

var server = http.createServer(function (req, res) {
    if (req.method === 'POST') {
        var body = '';

        req.on('data', function(chunk) {
            body += chunk;
        });

        req.on('end', function() {
            if (req.url === '/') {
                log('Received message: ' + body);
            } else if (req.url = '/scheduled') {
                log('Received task ' + req.headers['x-aws-sqsd-taskname'] + ' scheduled at ' + req.headers['x-aws-sqsd-scheduled-at']);
            }

            res.writeHead(200, 'OK', {'Content-Type': 'text/plain'});
            res.end();
        });
    } else {
        res.writeHead(200);
        res.write(html);
        res.end();
    }
});


// Listen on port 3000, IP defaults to 127.0.0.1
app.listen(port);

// Put a friendly message on the terminal
console.log('Server running at http://127.0.0.1:' + port + '/');
