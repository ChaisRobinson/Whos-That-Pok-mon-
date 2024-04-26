let randomNum = Math.floor(Math.random() * 6) + 1;

const pokeContainer1 = document.getElementById("pokemon1");
const pokeContainer2 = document.getElementById("pokemon2");
const pokeContainer3 = document.getElementById("pokemon3");
const pokeContainer4 = document.getElementById("pokemon4");
const pokeContainer5 = document.getElementById("pokemon5");

if (randomNum === 1) {
  pokeContainer1.style.display = "block";
} else if (randomNum === 2) {
  pokeContainer2.style.display = "block";
} else if (randomNum === 3) {
  pokeContainer3.style.display = "block";
} else if (randomNum === 4) {
  pokeContainer4.style.display = "block";
} else {
  pokeContainer5.style.display = "block";
}

const userPrompt = () => {
  let userInput = prompt("Who is that Pokemon?");
  console.log(userInput);
  if (pokemon1.style.display !== "none") {
    if (userInput === "Gengar" || userInput === "gengar") {
      let myImage = document.querySelector("#gengar"); // Selecting the image element
      let pokeName = document.querySelector("#gen");
      toggleFilter(myImage, pokeName);
    } else {
      alert("Guess Again");
    }
  } else if (pokemon2.style.display != "none") {
    if (userInput === "Charizard" || userInput === "charizard") {
      let myImage = document.querySelector("#charizard"); // Selecting the image element
      let pokeName = document.querySelector("#char");
      toggleFilter(myImage, pokeName);
    } else {
      alert("Guess Again");
    }
  } else if (pokemon3.style.display != "none") {
    if (userInput === "Mew" || userInput === "mew") {
      let myImage = document.querySelector("#mew"); // Selecting the image element
      let pokeName = document.querySelector("#m");
      toggleFilter(myImage, pokeName);
    } else {
      alert("Guess Again");
    }
  } else if (pokemon4.style.display != "none") {
    if (userInput === "Alakazam" || userInput === "alakazam") {
      let myImage = document.querySelector("#alakazam"); // Selecting the image element
      let pokeName = document.querySelector("#ala");
      toggleFilter(myImage, pokeName);
    } else {
      alert("Guess Again");
    }
  } else if (pokemon5.style.display != "none") {
    if (userInput === "Woobat" || userInput === "woobat") {
      let myImage = document.querySelector("#woobat"); // Selecting the image element
      let pokeName = document.querySelector("#woo");
      toggleFilter(myImage, pokeName);
    } else {
      alert("Guess Again");
    }
  }
};

// // Function to toggle the black filter & Spin Animation
function toggleFilter(myImage, pokeName) {
  myImage.classList.add("filtered");
  pokeName.classList.add("opacity");
  myImage.classList.add("spin-animation");

  myImage.addEventListener("animationend", function() {
    myImage.classList.remove("spin-animation");
  }, { once: true });
}

const alertMessage = () => {
  alert("Yay");
};

const refreshPage = () => location.reload();
