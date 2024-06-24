

function handleErrors(url){
  if(!response.ok){
    throw new Error(error.status)
  }
  return response.json()
}

fetch(url)
.then(handleErrors)
.then(data =>{
  console.log(data)
})
.catch(error=>{
  error.message
})