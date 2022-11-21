function changeCountry(event) {
  let parisDate = moment()
    .tz("Europe/Paris")
    .format("[It is] dddd, MMMM D, YYYY hh:mm A [in Europe/Paris]");
  let sydneyDate = moment()
    .tz("Australia/Sydney")
    .format("[It is] dddd, MMMM D, YYYY hh:mm A [in Australia/Sydney]");
  let newYorkDate = moment()
    .tz("America/New_York")
    .format("[It is] dddd, MMMM D, YYYY hh:mm A [in America/New York]");

  if (event.target.value === "paris") {
    alert(parisDate);
  }
  if (event.target.value === "sydney") {
    alert(sydneyDate);
  }
  if (event.target.value === "new-york") {
    alert(newYorkDate);
  }
}

let countries = document.querySelector("#countries");
countries.addEventListener("change", changeCountry);
