/**
 * Created by alexander on 14.10.16.
 */

const web = require('webbox');
// var wb = new webbox.Builder.Box();
var platform = new web.Server.ServerBox();


platform.createServer(1337);
platform.newStaticPage('/test','/html/SendBox.html');

/*platform.newRequestListener('/test', "post", function (req,res) {
    res.send(req.body.str);
});*/

platform.newRequestListener('/test', "post", function (req,res) {
    var json_obj = {name: "alex", lastname: "belov"};
    platform.sendJSON(res, json_obj);
});