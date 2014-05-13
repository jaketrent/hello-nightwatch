var cp = require('child_process')

var ps = cp.spawn('./node_modules/.bin/start-selenium')

ps.stdout.setEncoding('utf8')
ps.stdout.on('data', console.log)
ps.stderr.setEncoding('utf8')
ps.stderr.on('data', console.log)

