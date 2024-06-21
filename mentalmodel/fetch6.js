function fetch(url,time){
    fetch(url)
    .then(response =>{
        if(!response.ok){
            throw new Error('network error')
        }
     else{
        return response.json()
     }   
    })
    .then(data => {
        console.log(data)
    })
    .catch(error =>{
        console.log(error)
    })
}