function fetchData(url) {
  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json(); 
    })
    .then((data) => {
      console.log(data)
    })
    .catch((error) => {
      console.log(error)
    });
}


const urls = [
  "https://crocoder.dev/data1",
  "https://crocoder.dev/data2",
  "https://crocoder.dev/data3",
];


const fetchPromises = urls.map((url) => fetchData(url));



// Using Promise.all to wait for all fetch operations to complete
Promise.all(fetchPromises)
  .then((responses) => {
    console.log("All data fetched:", responses);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
