

function CountryInfo(countryName){
fetch(`https://restcountries.com/v3.1/name/${countryName}`)
.then(response =>{
    if(!response.ok){
        throw new Error('Error')
    }
     return  response.json()
  
})
.then(data =>{
    let countryData = data[0]
    let countryN = countryData.name.common
    let capital = countryData.capital[0]
    let 

})
.catch(error =>{
    console.log(error)
})

fetch(
  `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true](https://api.open-meteo.com/v1/forecast?latitude=%7Blat%7D&longitude=%7Blon%7D&current_weather=true`
)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Error");
    }
    return response.json();
  })
  .then((data) => {
    //  console.log(`${countryN}`);
    //  console.log(`${capital}`);
    
  })
  .catch((error) => {
    console.log(error);
  });

  

}
CountryInfo('France')
