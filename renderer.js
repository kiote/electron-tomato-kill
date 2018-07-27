// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var ps = require('ps-node');

// A simple pid lookup
const kill = function(name) {
  ps.lookup({
      command: name,
      }, function(err, resultList ) {
      if (err) {
        console.log("error while doing ps", err);
      }

      resultList.forEach(function( process ){
          if( process ){
            ps.kill(process.pid, (err) => {
              if (err) {
                console.log("error while doing kill", err);
              }
              console.log("killed");
            })
          }
      });
  });
};

kill('Slack');
kill('Skype');
kill('Telegram');
