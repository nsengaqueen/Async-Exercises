function performFastAsync(url,delay){
   const controller = new AbortController();
   const signal = controller.signal;

   const timerPromise = new Promise(resolve =>{
    setTimeout(()=>{
        resolve('timeout')
    },delay)
   });

   const requestPromise = fetch(url, { signal }).then((response) => {
     if (!response.ok) {
       throw new Error(`HTTP error! status: ${response.status}`);
     }
     return response.json();
   });

   return Promise.race([timerPromise, requestPromise])
   .then(result =>{
    if(result === 'timeout'){
        controller.abort();
        return []
    }else{
        return result;
    }
   })
   .catch(error =>{
    if(error.name === 'abortError'){
     return []
    }
   })
}

performFastAsync("https://api.example.com/data", 5000)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));






