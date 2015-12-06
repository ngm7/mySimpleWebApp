var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {};
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;
handle["/main.css"] = requestHandlers.maincss;
handle["/swades-box.jpg"] = requestHandlers.swadesbox;

server.start(router.route, handle);
