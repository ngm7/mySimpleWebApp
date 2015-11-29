var exec = require("child_process").exec;

function start(response){
  console.log("The Start request handler was called. ");
   var body = '<html>'+
              '<head>'+ 
              '<meta http-equiv="Content-Type" content="text/html; '+ 
              'charset=UTF-8" />'+ 
              '</head>'+ 
              '<body>'+ 
              '<form action="/upload" method="post">'+ 
              '<textarea name="text" rows="20" cols="60"></textarea>'+ 
              '<input type="submit" value="Submit text" />'+ 
              '</form>'+ 
              '</body>'+ 
              '</html>'; 
    response.writeHead(200, {"Content-type" : "plain/text"});
    response.write(body);
    response.end();
  
}

function upload(response, postData){
  console.log("The Upload request handler was called. ");
  response.writeHead(200, {"Content-type" : "plain/text"});
  response.write("You entered : " + postData);
  response.end();
}

exports.start = start;
exports.upload = upload;
