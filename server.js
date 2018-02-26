const jsonServer = require('json-server');
const jserver = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const jport =  3000;

jserver.use(middlewares);
jserver.use(router);

jserver.listen(jport);