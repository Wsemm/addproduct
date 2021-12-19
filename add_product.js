var nameProduct = document.querySelector("#nameProduct"),
  numberProduct = document.querySelector("#number"),
  type = document.querySelector("#type"),
  country = document.querySelector("#country"),
  manufacture = document.querySelector("#manufacture"),
  price = document.querySelector("#price"),
  submitBtn = document.querySelector("#submitBtn");
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let numberProductval = numberProduct.value;
  // valid input product name
  if (nameProduct.value !== "" && numberProduct.value !== "") {
    if (numberProductval.length != 10) {
      alert("please product numer must be 10 digit number ");
    } else {
      let firstFourChar = numberProductval.substring(0, 3);
      let lastSixNumber = numberProductval.substring(3, 10);
      let firstCondition = /[^a-z]/i;
      let secondCondition = /[^0-9]/;
      if (firstFourChar.match(firstCondition)) {
        alert("please enter first three char as string ");
      } else if (lastSixNumber.match(secondCondition)) {
        alert("please enter last seven char as number ");
      } else {
        window.location = "result.html";
      }
    }
    // valid input manufacture of year
    let ConditionInManufacture = /^([0-9]{4})$/;
    if (manufacture.value !== "") {
      if (manufacture.value < 0) {
        alert("Please, you must enter a positive number manufacture of year ");
      } else if (manufacture.value.search(ConditionInManufacture)) {
        alert("Please, you must enter a four number in manufacture of year");
      }
    }
    // valid input price
        if (price.value !== "") {
            if (price.value > 10000) {
                alert("Please, you must enter a number between 0 & 1000");

            }

        }
  } else {
    alert("please fill Product name and Product number");
  }
});

console.log(country.value);
console.log(manufacture.value);
console.log(type.value);
console.log(price.value);
