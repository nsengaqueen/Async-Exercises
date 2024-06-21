function fetching() {
  let promise1 = fetch("https://jsonplaceholder.typicode.com/posts/4");
  let promise2 = fetch("https://jsonplaceholder.typicode.com/posts/5");
  let promise3 = fetch("https://jsonplaceholder.typicode.com/posts/6");

  return Promise.all([promise1, promise2, promise3]).then((response) => {
    response.map((url) => {
      return url
        .json()

        .then((data) => {
          console.log('these are the results',data);
        })
        .catch((error) => {
          console.log("error", error);
        });
    });
  });
}
fetching();
