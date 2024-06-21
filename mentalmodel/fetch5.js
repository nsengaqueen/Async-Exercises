function MultipleApis() {
  let promise1 = fetch("https://jsonplaceholder.typicode.com/posts/4");
  let promise2 = fetch("https://jsonplaceholder.typicode.com/posts/5");
  let promise3 = fetch("https://jsonplaceholder.typicode.com/posts/6");

  Promise.all([promise1, promise2, promise3])
    .then(responses => {
      return Promise.all(
        responses.map(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          return response.json();
        })
      );
    })
    .then(result => {
      console.log("all have been resolved ", result);
    })
    .catch(error => {
      console.log("the error is ", error);
    });
}

MultipleApis();