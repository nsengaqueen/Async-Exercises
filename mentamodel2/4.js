// function fetchToDo (url){
//   let xhr = new XMLHttpRequest();
//   xhr.open('GET',url,true)
//   xhr.onload = function (){
//     if(xhr.status !=200){
//       console.log(`error ${xhr.statusText}`)
//     }else{
//       resolve(`done,${xhr.response}`)
//     }
//   }
//   xhr.onerror = function(){
//     reject('request failed')
//   }
//   xhr.send()
// }
// fetchToDo("https://jsonplaceholder.typicode.com/todos/1")
//   .then((data) => console.log(data))
//   .catch((error) => console.log("Error:", error));


  // to perform other methods like post 
  function fetchToDo (url ,options = {method: 'GET'}){
    return new Promise((resolve,reject)=>{
 let xhr = new XMLHttpRequest();
 xhr.open(options.method, url, true);

 xhr.onload = function () {
   if (xhr.status !== 200) {
     reject(xhr.status)
     console.log(`Error ${xhr.status} : ${error.statusText}`);
   } else {
    resolve(xhr.response);
     console.log(`Done,${xhr.response}`);
   }
 };



 xhr.onerror = function () {
   console.log("request failed ");
 };
 if(options.method === 'POST'){
  xhr.send(JSON.stringify(options.body));
 }
  xhr.send();
    })
 
  }
  
  fetchToDo("https://jsonplaceholder.typicode.com/todos/1",{
    method: 'POST',
    body: {
      title: 'richkid',
      body: 'gang',
      userId: 1
    }
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("Error:", error));