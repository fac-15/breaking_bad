function requestData(inputVal, cb) {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
      cb(response);
      console.log("xml", response);
    } else {
      cb("error");
    }
  };
  xhr.open("GET", `/search=${inputVal}`, true);
  xhr.send();
}
