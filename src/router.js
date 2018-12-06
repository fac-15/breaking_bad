const {
  homeHandler,
  getUsersHandler,
  publicHandler,
  postUserHandler,
  errorHandler
} = require("./handlers");

const router = (request, response) => {
  const { url } = request;

  if (url === "/") {
    homeHandler(response);
  } else if (url === "/people") {
    getUsersHandler(response);
  } else if (url === "/create-user") {
    postUserHandler(request, response);
  } else if (url.includes("public")) {
    publicHandler(url, response);
  } else {
    errorHandler(response);
  }
};

module.exports = router;
