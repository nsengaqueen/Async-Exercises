function fetchUserTodos() {
    let usersPromise = fetch("https://jsonplaceholder.typicode.com/users")
    .then(response =>{
        if(!response.ok){
            throw new Error(response.status)
        }
        return response.json()
    })
    .then(data =>{
        console.log(data)
    })

  }
fetchUserTodos();   