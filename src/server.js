const { createServer } = require('http');
const router = require ('./router.js');

const server = createServer(router);
const port = process.ENV.PORT || 5000;

server.listen(port, () => {
  console.log(`We're breaking bread on http:localhost:${port}`)
});
