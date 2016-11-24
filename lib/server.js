// Generated by CoffeeScript 1.11.1
(function() {
  var PUBLIC_ASSETS_DIR, app, authorization, bodyParser, cookieParser, debug, errorHandler, express, server, session, url;

  express = require('express');

  cookieParser = require('cookie-parser');

  bodyParser = require('body-parser');

  session = require('express-session');

  errorHandler = require('errorhandler');

  authorization = require('express-authorization');

  url = require('url');

  debug = require('debug')('me.frhd.server');

  PUBLIC_ASSETS_DIR = 'public';

  app = express();

  app.disable('x-powered-by');

  app.set('port', 4040);

  app.set('hostname', 'localhost');

  app.use(express["static"](PUBLIC_ASSETS_DIR));

  app.use(bodyParser.urlencoded());

  app.use(cookieParser());

  app.use(errorHandler());

  app.get('/', function(req, res) {
    debug(req.query);
    res.sendFile('index.html', {
      root: PUBLIC_ASSETS_DIR
    });
  });

  app.get('/api/ping', function(req, res) {
    debug('pong');
    res.send('pong');
  });

  server = app.listen(app.get('port'), app.get('hostname'), function() {
    var host, port;
    host = server.address().address;
    port = server.address().port;
    return debug('Listening at http://%s:%s', host, port);
  });

}).call(this);