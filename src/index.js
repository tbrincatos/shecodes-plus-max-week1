function changeCountry(event) {
  let parisDate = moment()
    .tz("Europe/Paris")
    .format("[It is] dddd, MMMM D, YYYY hh:mm A [in Europe/Paris]");
  let sydneyDate = moment()
    .tz("Australia/Sydney")
    .format("[It is] dddd, MMMM D, YYYY hh:mm A [in Australia/Sydney]");
  let newYorkDate = moment()
    .tz("America/New_York")
    .format("[It is] dddd, MMMM D, YYYY hh:mm A [in America/New_York]");

  if (event.target.value === "paris") {
    alert(parisDate);
  } else if (event.target.value === "sydney") {
    alert(sydneyDate);
  } else if (event.target.value === "new-york") {
    alert(newYorkDate);
  }
}

let countryElement = document.querySelector("#countries");

countryElement.addEventListener("change", changeCountry);
