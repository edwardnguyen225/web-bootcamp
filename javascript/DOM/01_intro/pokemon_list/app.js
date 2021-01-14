function deletePokemonImg() {
  const container = document.getElementById("container");
  container.innerHTML = "";
}

function insertPokemonImg(num) {
  const container = document.getElementById("container");
  const baseURL =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

  for (let i = 0; i < num; i++) {
    const newImg = document.createElement("img");
    newImg.src = `${baseURL}${i+1}.png`;
    container.appendChild(newImg);
  }
}

function updatePokemonImg() {
  const num = document.getElementById("numOfPokemon").value;
  const result = document.getElementById("result");
  if (num <= 0) {
    const msg = "Invalid number!";
    result.innerText = msg;
  } else {
    const msg = `Here are ${num} Pokemon you required...`;
    result.innerText = msg;
    deletePokemonImg();
    insertPokemonImg(num);
  }
}
