function abortOperation(url){
    setTimeout(() => {
      controller.abort(); // Aborts the fetch request
      console.log("Fetch request aborted");
    }, 2000);
    const controller = new AbortController();
    // controller.signal return an Abortsignal that will notify 
    //the fetch request if it should be aborted
    const signal = controller.signal;
    fetch(url,{signal})
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
}
abortOperation("https://jsonplaceholder.typicode.com/todos/1");