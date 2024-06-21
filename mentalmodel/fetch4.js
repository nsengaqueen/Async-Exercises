function myFetch(url) {
  return new Promise((resolve, reject) => {
    let xhr = XMLHttpRequest();
    xhr.open("GET", url, true);

    xhr.onload = function () {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve("Response:", xhr.responseText);
      } else {
        reject(new Error("Request failed with status:", xhr.status));
      }
    };

    xhr.onerror = function () {
      reject(new Error("Request failed"));
    };

    xhr.send();
  });
}

myFetch("https://my-random-api.com/data")
  .then((data) => console.log(data))
  .catch((error) => console.log("Error:", error));
