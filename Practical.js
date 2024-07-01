// const { error } = require("console");

// function performFastAsync(url,delay){
//     const controller = new AbortController();
//     const signal = controller.signal ;
// const requestPromise = fetch(url,{signal})
// .then(response =>{
//     if(!response.ok){
//         throw new Error('failed to fetch:')
//     }
//     return response.json()
// })


// const timerPromise = setTimeout(()=>{
//     return 'timeout'
// },delay)

// Promise.race([requestPromise, timerPromise])
// .then(result =>{
//     if(result === 'timeout'){
//         controller.abort()
//          return [];
//     }else {
//         return result
//     }
   
// })
// }

// // performFastAsync code here ...

// performFastAsync('https://jsonplaceholder.typicode.com/todos/1', 9000)
// .then((data) => {
// 	console.log(data)
// })  

// performFastAsync('https://jsonplaceholder.typicode.com/todos/1', 10)
// .then((data) => {
// 	console.log(data)
// })







/// 2nd question

async function fetchCountry (){
    try{
const response = await fetch('https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json&page=2')

  if(!response.ok){
    throw new Error ('Http error: ', response.status)
  }
  const data = await response.json()
  let UsManfuctures =
  data.Results.filter(info =>{
    return info.Country === "UNITED STATES (USA)";
  })
   console.log(UsManfuctures);
    return  UsManfuctures

    }

    catch(error){
        console.log('error fetching')
    }

}

fetchCountry().then((data) => {
 console.log(data)
}).catch((error) => {

  console.error('FetchCountry error:', error);
});



// 1st question

