window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
  // TODO: Complete the function
  // capture the degree celsius input
  let degreesCelsius = document.getElementById("cInput");
  // caputure the degree fahrenheit input
  let degreesFahrenheit = document.getElementById("fInput");

  // capture the errorMessage paragraph
  let errorMessage = document.getElementById("errorMessage");

  // capture the weather image
  let weatherImage = document.getElementById("weatherImage");

  // clear the degree fahrenheit input as soon as user input the degree celcius input
  degreesCelsius.addEventListener("input", () => {
    degreesFahrenheit.value = "";
  });

  // clear the degree celsius input as soon as user input the degree fahrenheit input
  degreesFahrenheit.addEventListener("input", () => {
    degreesCelsius.value = "";
  });

  // capture the convert button
  const convertButton = document.getElementById("convertButton");

  // add click envent listener to convert button
  convertButton.addEventListener("click", () => {
    // check if user input wrong degree
    if (
      (degreesCelsius.value &&
        isNaN(parseFloat(degreesCelsius.value)) === isNaN(NaN)) ||
      (degreesFahrenheit.value &&
        isNaN(parseFloat(degreesFahrenheit.value)) === isNaN(NaN))
    ) {
      errorMessage.innerHTML = `${
        degreesFahrenheit.value || degreesCelsius.value
      } is not a number.`;
      return;
    } else {
      errorMessage.innerHTML = "";
    }

    // get the degrees
    if (degreesCelsius.value) {
      const convertedFahrenheit = convertCtoF(degreesCelsius.value);
      degreesFahrenheit.value = convertedFahrenheit;
    } else if (degreesFahrenheit.value) {
      const convertedCelsius = convertFtoC(degreesFahrenheit.value);
      degreesCelsius.value = convertedCelsius;
    }

    // set the image
    if (degreesFahrenheit.value < 32) {
      weatherImage.setAttribute("src", "cold.png");
    } else if (degreesFahrenheit.value >= 32 && degreesFahrenheit.value <= 50) {
      weatherImage.setAttribute("src", "cool.png");
    } else if (degreesFahrenheit.value > 50) {
      weatherImage.setAttribute("src", "warm.png");
    }
  });
}

function convertCtoF(degreesCelsius) {
  // TODO: Complete the function
  // convert degreesCelsius to degressFahrenheit
  const degreesFahrenheit = degreesCelsius * (9 / 5) + 32;
  return degreesFahrenheit.toFixed(2);
}

function convertFtoC(degreesFahrenheit) {
  // TODO: Complete the function
  // convert degreesFahrenheit to degreesCelsius
  const degreesCelsius = (degreesFahrenheit - 32) * (5 / 9);
  return degreesCelsius.toFixed(2);
}
