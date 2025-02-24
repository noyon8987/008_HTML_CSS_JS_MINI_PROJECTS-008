function rollDise() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    let imageSorces = "img/" + randomNumber + ".png";
    document.getElementById("ludo").src = imageSorces;
  }