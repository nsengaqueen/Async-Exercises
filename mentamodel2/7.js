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
        return data;
    })

    let todosPromise = fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        return data;
      });

      return Promise.all([usersPromise,todosPromise])
      .then((user,todo) =>{
        if(user.id === todo.userId){
         console.log("Combined data:", data);
        }
       
      })
      .catch(error =>{
        console.log(error)
      })
}
fetchUserTodos()