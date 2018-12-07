const { readFile } = require("fs");
const path = require("path");
const qs = require("qs");

const getData = require("./queries/getdata.js");
const postData = require("./queries/postdata.js");

const serverError = (err, response) => {
  response.writeHead(500, "Content-Types: text/html");
  response.end("<h1>Sorry, there was a problem loading.</h1>");
  console.log(err);
};

const homeHandler = response => {
  const filepath = path.join(__dirname, "..", "public", "index.html");
  readFile(filepath, (err, file) => {
    if (err) return serverError(err, response);
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(file);
  });
};

const publicHandler = (url, response) => {
  const filepath = path.join(__dirname, "..", url);
  readFile(filepath, (err, file) => {
    if (err) return serverError(err, response);
    const [, extension] = url.split(".");
    const extensionType = {
      html: "text/html",
      css: "text/css",
      js: "application/javascript",
      ico: "image/x-icon"
    };
    response.writeHead(200, { "content-type": extensionType[extension] });
    response.end(file);
  });
};

const getUsersHandler = response => {
  console.log("IM WORKING getUsersHandler");
  getData((err, res) => {
    if (err) return serverError(err, response);
    let data = JSON.stringify(res);
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(data);
  });
};

const postUserHandler = (request, response) => {
  console.log("IM WORKING postUserHandler");
  let data = "";
  request.on("data", chunk => {
    data += chunk;
  });
  request.on("end", () => {
    const { fname, lname, org, pay } = qs.parse(data);

    postData(fname, lname, org, pay, err => {
      if (err) return serverError(err, response);
      response.writeHead(302, { Location: "/" });
      response.end();
    });
  });
};

const errorHandler = response => {
  response.writeHead(404, { "content-type": "text/html" });
  response.end("<h1>404 Page Requested Cannot be Found</h1>");
};

module.exports = {
  homeHandler,
  getUsersHandler,
  publicHandler,
  errorHandler,
  postUserHandler
};
