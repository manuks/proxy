var express = require("express"),
    request = require("request");
    app = express();
    
app.use(function (req, res, next) {
    getfrom = 'http://' + process.env.REDIRECTHOST + req.originalUrl;
    req.pipe(request(getfrom)).pipe(res);
});
    
    
if (!module.parent) {
    console.info('Listening ',process.env.PORT || 5000);
    app.listen(process.env.PORT || 5000);
}
