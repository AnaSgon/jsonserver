const js = require('json-server');
const server = js.create();
const router = js.router("db.json");
const middlewares = js.defaults();

server.use(middlewares);
server.use(js.bodyParser);
server.use(router);

server.listen(3000, () => {console.log('abriu')});
