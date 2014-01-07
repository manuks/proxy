if ("production" === process.env.NODE_ENV) {
    console.log = function() {};
    console.info = function() {};
    console.warn = function() {};
    console.error = function() {};
}

var forky = require('forky');
forky(__dirname + '/app.js');