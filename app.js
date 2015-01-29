var express = require("express"),
    request = require("request");
    app = express();
    
app.use(function (req, res, next) {
    var getfrom = 'http://' + process.env.REDIRECTHOST + req.originalUrl;
    var followRedirectOption = !process.env.DO_NOT_REDIRECT_INTERNALLY;
    req.pipe(request({uri:getfrom,followRedirect:followRedirectOption})).pipe(res);
});
    
    
if (!module.parent) {
    console.info('Listening ',process.env.PORT || 5000);
    app.listen(process.env.PORT || 5000);
}
