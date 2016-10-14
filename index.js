/**
 * Created by alexander on 14.10.16.
 */

const web = require('webbox');
// var wb = new webbox.Builder.Box();
var platform = new web.Server.Box();

platform.createServer(1337);