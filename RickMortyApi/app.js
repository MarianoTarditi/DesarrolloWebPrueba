const charactersEl = document.getElementById("characters");
const nameFilterEl = document.getElementById("name-filter");
const statusFilterEl = document.getElementById("status-filter");
const genderFilterEl = document.getElementById("gender-filter");
const specieFilterEl = document.getElementById("specie-filter");

const allCharactersBtn = document.getElementById("allCharactersBtn");
const filterBtn = document.getElementById("filterBtn");

var charactersVisible = false;
var charactersLoaded = false;  

async function getCharacters(name, status, gender, specie) {
    let url = 'https://rickandmortyapi.com/api/character/';
    const params = new URLSearchParams();

    if (name) params.append('name', name);
    if (status) params.append('status', status);
    if (gender) params.append('gender', gender);
    if (specie) params.append('species', specie);

    if ([...params].length > 0) {
        url += `?${params.toString()}`;
    }

    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Personajes no encontrados");
        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error("Error al obtener personajes:", error.message);
        return [];
    }
}


async function displayCharacters(name, status, gender, specie) {
  const characters = await getCharacters(name, status, gender, specie);

  charactersEl.innerHTML = "";

  if(characters && characters.length > 0) {
    charactersLoaded = true;
  } else {
    charactersLoaded = false;
  }

  for (var character of characters) {
    const card = document.createElement("div");
    card.classList.add("character-card");

    card.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <h2>${character.name}</h2>
            <p>Status: ${character.status}</p>
            <p>Especie: ${character.species}</p>    
            <p>Género: ${character.gender}</p>    
        `;
    charactersEl.appendChild(card);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  charactersEl.innerHTML = '';
  document.getElementById("filters").style.display = "none"; // ocultar filtros al inicio
});

allCharactersBtn.addEventListener("click", () => {
  if (charactersVisible) {
    charactersEl.innerHTML = "";
    document.getElementById("filters").style.display = "none";
    charactersVisible = false;
    charactersLoaded = false;
  } else {
    displayCharacters("", "", "", "");
    document.getElementById("filters").style.display = "block";
    charactersVisible = true;
  }
});


filterBtn.addEventListener("click", function () {
  if (charactersLoaded) {
    document.getElementById("filters").style.display = "block";
    displayCharacters(
        nameFilterEl.value,
        statusFilterEl.value,
        genderFilterEl.value,
        specieFilterEl.value
    );
  } else {
    alert("Primero debe listar personajes haciendo clic en 'Personajes'.");
  }
});

nameFilterEl.addEventListener("input", function () {
  if(charactersLoaded) {
    displayCharacters(
      nameFilterEl.value,
      statusFilterEl.value,
      genderFilterEl.value,
      specieFilterEl.value
    );
  }
});

statusFilterEl.addEventListener("change", function () {
  if(charactersLoaded) {
    displayCharacters(
      nameFilterEl.value,
      statusFilterEl.value,
      genderFilterEl.value,
      specieFilterEl.value
    );
  }
});

genderFilterEl.addEventListener("change", function () {
  if(charactersLoaded) {
    displayCharacters(
      nameFilterEl.value,
      statusFilterEl.value,
      genderFilterEl.value,
      specieFilterEl.value
    );
  }
});

specieFilterEl.addEventListener("change", function () {
  if(charactersLoaded) {
    displayCharacters(
      nameFilterEl.value,
      statusFilterEl.value,
      genderFilterEl.value,
      specieFilterEl.value
    );
  }
});
