//Write a JavaScript function that fetches data from an API and retries
// the request a specified number of times if it fails.

function retry(api, times) {
  fetch(api)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      } else {
        return response.json();
      }
    })
    .then((data) => console.log(data))
    .catch((error) => {
      for (let i = 0; i < times; i++) {
        console.log(`There was an error ${error.message}`);
        retry(api);
      }
    });
}

retry("https://swapi.dev/api/peoples/1", 3);
