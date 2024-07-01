async function Vehicle() {
  try {
    const response = await fetch(
      "https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json&page=2"
    );
    if (!response.ok) {
      throw new Error("error found");
    }
    const data = await response.json();
    let Usmanufactures = data.Results.filter(
      info => info.Country === "UNITED STATES (USA)"
    );
    console.log(Usmanufactures);
  } catch (error) {
    console.log(error.message);
  }
}
Vehicle();