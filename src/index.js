function changeCountry(event) {
  let franceDate = moment().tz("Europe/Paris").format("");
  if (event.target.value === "france") {
    alert;
  }
}

let countryElement = document.querySelector("#countries");
countryElement.addEventListener("change", changeCountry);
