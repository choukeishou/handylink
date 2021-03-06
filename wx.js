const express = require('express');
const app = express();

// 绑定session中间件
const unisession = require('./server/handylink/session');
app.use(unisession.session);

// 注册参数request解析器中间件，参考
// var multer = require('multer'); // v1.0.5
// var upload = multer(); // for parsing multipart/form-data
const bodyParser = require('body-parser');
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// 注册api
const router = require('./server/wxApp/router');
app.use(router);

// 监听443端口
app.listen(443) ;