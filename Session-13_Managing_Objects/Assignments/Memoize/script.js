// Define a momoize function
function memoize(fn) {
  let cache = {};
  return function (...args) {
    const key = JSON.stringify(args);

    if (cache[key]) {
      return cache[key];
    } else {
      const result = fn.apply(this, args);
      cache[key] = result;
      return result;
    }
  };
}

// Use hard coded data
const temperatureData = {
  "New York": 20,
  London: 18,
  Paris: 22,
  Tokyo: 25,
  Sydney: 28,
};

/*

function getTemperatureForCity(city) {
  return temperatureData[city];
}

// Memoize the getTemperatureForCity function
const getWeatherForCity = memoize(getTemperatureForCity);

*/

// create a function that will return the temperature of the given city
function getTemperatureForCity() {
  const cache = {};

  return (city) => {
    if (cache[city]) {
      return cache[city];
    } else {
      const result = temperatureData[city];
      cache[city] = result;
      return result;
    }
  };
}

// Memoize the getTemperatureForCity function
const getWeatherForCity = getTemperatureForCity();

console.log(getWeatherForCity("New York")); // 20
console.log(getWeatherForCity("London")); // 18
console.log(getWeatherForCity("Paris")); // 22
console.log(getWeatherForCity("New York")); // 20
