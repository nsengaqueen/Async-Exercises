
function HTTPrequest (url){
    return new Promise((resolve,reject)=>{
   fetch(url)
     .then((response) => {
       if (!response.ok) {
         throw new Error("failed to fetch data");
       } else {
         return response.json();
       }
     })
     .then((data) => {
       resolve(data);
     })
     .catch((error) => {
       reject(error);
     });
    })
 
}
HTTPrequest("https://swapi.dev/api/peoples/1");