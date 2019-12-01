var shell = require('shelljs');
var osc = require('node-osc');
var io = require('socket.io')(80);

settings.runtime = {
    device: 'Muse',
    ip: 'localhost',
    port: 5000,
    socketUpdateFrequency: 100 
   }

   var response = {};
function reset() {
    response = {
        alpha: 0,
        battery: 1,
        custom: 0
    };
}
reset();

//shelljs command
var shellCommand = [
    'muse-io --device ', 
    settings.runtime.device, 
    ' --osc osc.udp://', 
    settings.runtime.ip, 
    ':', 
    settings.runtime.port
].join('');

shell.exec(shellCommand, {
    async:true, 
    silent:true
});

oscServer = new osc.Server(settings.runtime.port, settings.runtime.ip);
oscServer.on('message', function (msg, rinfo) {
        if (msg[0].indexOf('/muse/batt') > -1) {
            response.battery = parseInt(parseFloat(msg[1]) / 100);
        }        
       if (msg[0].indexOf('/muse/elements/alpha_relative') > -1) {                
            var msgAvg = averageArray(msg, 1);
            response.alpha = msgAvg;
       }
       //... additional OSC messages
});

var tick = setInterval(function () {
    io.emit('data', response);
}, settings.runtime.socketUpdateFrequency);

function averageArray (ary, start) {
    var val = 0,
        start = start || 0;
    for (var i = start; i < ary.length; i++) {
        var toAdd = parseFloat(ary[i]);
        val += isNaN(toAdd) ? 0 : toAdd;
    };
    return val / ary.length;
}