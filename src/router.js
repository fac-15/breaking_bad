const {
  homeHandler,
  getUserHandler,
  publicHander,
  postUserHandler,
  errorHandler
} = require("./handlers");

const router = (request, response) => {
  const { url } = request;

  if (url === "/") {
    homeHandler(response);
  } else if (url === "users") {
    getUsersHandler(response);
  } else if (url === "/create-user") {
    postUserHandler(request, response);
  } else if (url.includes("public")) {
    publicHander(url, response);
  } else {
    errorHandler(response);
  }
};

module.exports = router;
