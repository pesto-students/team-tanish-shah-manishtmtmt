// call the displayWindowProperties on page loads
document.addEventListener("DOMContentLoaded", function () {
  displayWindowProperties();
});

function displayWindowProperties() {
  // get the userAgent property from the window properties
  const userAgent = window.navigator.userAgent;
  console.log("displayWindowProperties ~ userAgent:", userAgent);

  // get the screenWidthAndHeight from the window properties
  const screenWidthAndHeight = `${window.screen.width} x ${window.screen.height}`;
  console.log(
    "displayWindowProperties ~ screenWidthAndHeight:",
    screenWidthAndHeight
  );

  // get the currentUrl and pathname from the window properties
  const currentUrlAndPath = `${window.location.href} - ${window.location.pathname}`;
  console.log(
    "displayWindowProperties ~ currentUrlAndPath:",
    currentUrlAndPath
  );

  // create user data object
  const userData = {
    userAgent,
    screenWidthAndHeight,
    currentUrlAndPath,
  };

  // set the window properties to session storage
  window.sessionStorage.setItem("userData", JSON.stringify(userData));

  // set the window properties to local storage
  window.localStorage.setItem("userData", JSON.stringify(userData));

  // get the window properties from session storage
  const storedUserDataToSessionStorage = JSON.parse(
    window.sessionStorage.getItem("userData")
  );
  console.log(
    "displayWindowProperties ~ storedUserDataToSessionStorage:",
    storedUserDataToSessionStorage
  );

  // get the window properties from local storage
  const storedUserDataToLocalStorage = JSON.parse(
    window.localStorage.getItem("userData")
  );
  console.log(
    "displayWindowProperties ~ storedUserDataToLocalStorage:",
    storedUserDataToLocalStorage
  );
}
