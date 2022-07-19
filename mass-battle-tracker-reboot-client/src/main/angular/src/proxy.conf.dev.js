const PROXY_CONFIG = [{
    context : [
      "/mass-battle-tracker-reboot/api/battle"
    ],
    target : "http://localhost:8080",
    secure : false,
    logLevel : "debug"/*,
    pathRewrite : {
      "^/(.*)": "/mass-battle-tracker-reboot/$1"
    }*/
  }];
  
  module.exports = PROXY_CONFIG;