const { createServer } = require("http");
const router = require("./router.js");

const server = createServer(router);
const port = process.env.PORT || 5001;

server.listen(port, () => {
  console.log(`We're breaking bread on http:localhost:${port}`);
});
