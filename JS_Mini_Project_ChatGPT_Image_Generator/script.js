const API_ENDPOINT = "https://api.openai.com/v1/images/generations";
const ACCESS_TOKEN = process.env.OPENAI_ACCESS_TOKEN;

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

// Memoize the getImages function
const memoizedGetImages = memoize(getImages);

// Define DOM elements
const topicInput = document.querySelector("#text");
const generateButton = document.querySelector("#generate-button");
const imageContainer = document.querySelector("#image-container");
const loadingSpinner = document.querySelector("#loader");

topicInput.addEventListener("keydown", async (e) => {
  if (e.keyCode === 13) {
    const topic = topicInput.value;
    if (topic === "") {
      alert("Please enter a keyword");
      return;
    }
    loadingSpinner.classList.remove("hidden");
    const images = await memoizedGetImages(topic);
    if (!images) return;
    displayImages(images);
  }
});

// Define event listener for the generate button
generateButton.addEventListener("click", async () => {
  const topic = topicInput.value;
  if (topic === "") {
    alert("Please enter a keyword");
    return;
  }
  loadingSpinner.classList.remove("hidden");
  const images = await memoizedGetImages(topic);
  if (!images) return;
  displayImages(images);
});

async function getImages(topic) {
  // Construct API request body
  const requestBody = {
    prompt: topic,
    n: 4,
    size: "256x256",
  };

  // Construct API request options
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${ACCESS_TOKEN}`,
    },
    body: JSON.stringify(requestBody),
  };

  // Make API call and parse response
  try {
    const response = await fetch(API_ENDPOINT, requestOptions);
    const responseData = await response.json();
    loadingSpinner.classList.add("hidden");
    if (!responseData.data) {
      alert("Some error occurred, please try again later.");
      return;
    }
    return responseData.data;
  } catch (error) {
    alert("Some error occurred, please try again later." + error);
    return;
  }
}

// Define function to display quotes on the page
function displayImages(images) {
  imageContainer.innerHTML = "";
  images.forEach((image) => {
    const innerImageContainer = document.createElement("div");
    const imageElement = document.createElement("img");
    imageElement.classList.add("image");
    imageElement.setAttribute("src", image.url);
    innerImageContainer.appendChild(imageElement);
    imageContainer.appendChild(innerImageContainer);
    imageElement.addEventListener("dblclick", () => {
      downloadImage(image.url);
    });
  });
}

// Download feature
function downloadImage(url) {
  const link = document.createElement("a");
  link.href = url;
  link.download =
    document.getElementById("text").value.split(" ").join("_") + ".png";
  link.target = "_blank";
  link.click();
}
