var querystring = require("querystring"),
    fs = require("fs");

function start(response){
  console.log("The Start request handler was called. ");
  
  function serveIndex(response){  
    fs.readFile('index.html',function(err,data){
      if (err) throw err;
      console.log("serving index.html using fs.readFile async call");
      response.writeHead(200, {"Content-Type" : "text/html"});
      response.write(data);
      response.end();
    });
  };

  serveIndex(response);
  
}

function maincss(response){
  console.log("The main.css handler was called. ");
  
  function serveMainCss(response){  
    fs.readFile('main.css', function(err,data){
      if (err) throw err;
      console.log("serving css file using fs.readFile async call");
      response.writeHead(200, {"Content-Type" : "text/css"});
      response.write(data);
      response.end();
    });
  };
  serveMainCss(response);

}

function swadesbox(response){
  console.log("Request Handler 'show' was called")
  response.writeHead(200, {"Content-Type" : "image/jpg"});
  fs.createReadStream("swades-box.jpg").pipe(response);
}


function upload(response, postData){
  console.log("The Upload request handler was called. ");
  response.writeHead(200, {"Content-Type" : "text/plain"});
  response.write("You entered : " + querystring.parse(postData).text);
  response.end();
}

function show(response){
  console.log("Request Handler 'show' was called")
  response.writeHead(200, {"Content-Type" : "image/jpg"});
  fs.createReadStream("/home/ngm/nodejs/mySimpleWebApp/housewives.jpg").pipe(response);
}


exports.start = start;
exports.upload = upload;
exports.show = show;
exports.maincss = maincss;
exports.swadesbox = swadesbox;
