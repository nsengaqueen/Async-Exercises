function abort(url) {
  const controller = new AbortController();
  const signal = controller.signal;
  setTimeout(() => {
    controller.abort();
  }, 100);
  fetch(url, { signal })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      } 
        return response.json();
      
    })
    .then((data) => console.log(data))
    .catch((error) => {
      console.log(`There was an error ${error.message}`);
    });
}

abort("https://jsonplaceholder.typicode.com/todos/1");
