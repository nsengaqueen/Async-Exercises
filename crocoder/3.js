
function  fetchSimulator (){
  const delays = [800, 1200, 1000];
  let promise1 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
     fetch("https://jsonplaceholder.typicode.com/todos/1")
       .then((response) => {
         if (!response.ok) {
           throw new Error(`HTTP error! Status: ${response.status}`);
         }
         return response.json();
       })
       .then((data) => {
         console.log(data);
         resolve(data);
       })
       .catch((error) => {
         console.error(error);
         reject(error);
       });
    },delays[0])
   
  }) 
  

 let promise2 = new Promise((resolve, reject) => {
  setTimeout(()=>{
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      resolve(data);
    })
    .catch((error) => {
      console.error(error);
      reject(error);
    });
  },delays[1])
   
 });
    
    
     let promise3 = new Promise((resolve, reject) => {
      setTimeout(()=>{
     fetch("https://jsonplaceholder.typicode.com/todos/1")
       .then((response) => {
         if (!response.ok) {
           throw new Error(`HTTP error! Status: ${response.status}`);
         }
         return response.json();
       })
       .then((data) => {
         console.log(data);
         resolve(data);
       })
       .catch((error) => {
         console.error(error);
         reject(error);
       });
      },delays[2])
     
     })
     

    Promise.all([promise1, promise2, promise3])
    .then(data=>{
      console.log(data)
    })
    .catch(error =>{
      console.log(error)
    })
}
fetchSimulator();





