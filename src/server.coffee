express = require 'express'
cookieParser = require 'cookie-parser'
bodyParser = require 'body-parser'
session = require 'express-session'
errorHandler = require 'errorhandler'
authorization = require 'express-authorization'
url = require 'url'
debug = require('debug')('me.frhd.server')

PUBLIC_ASSETS_DIR = 'public'

app = express()
app.disable 'x-powered-by'
app.set 'port', 4040
app.set 'hostname', 'localhost'

app.use express.static( PUBLIC_ASSETS_DIR ) # extensions: ['html', 'htm']
app.use bodyParser.urlencoded()
app.use cookieParser()
app.use errorHandler()

app.get '/', (req, res) ->
  debug req.query
  res.sendFile( 'index.html', { root: PUBLIC_ASSETS_DIR })
  return

app.get '/api/ping', (req, res) ->
  debug 'pong'
  res.send('pong')
  return

server = app.listen(app.get('port'), app.get('hostname'),->
  host = server.address().address
  port = server.address().port
  debug 'Listening at http://%s:%s', host, port)
