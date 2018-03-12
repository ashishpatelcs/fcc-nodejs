const net = require('net');

var server = net.createServer(function(socket) { 
  var date = new Date();
  var data = date.getFullYear()+"-";
  if (date.getMonth() < 10) data += "0"+(date.getMonth()+1)+"-";
  else data += (date.getMonth()+1)+"-";
  if (date.getDate() < 10) data += "0"+date.getDate()+" ";
  else data += date.getDate()+" ";
  if (date.getHours() < 10) data += "0"+date.getHours()+":";
  else data+=date.getHours()+":";
  if(date.getMinutes() < 10) data += "0"+date.getMinutes();
  else data += date.getMinutes();
  data+="\n";
  socket.end(data);
});

server.listen(Number(process.argv[2]));
