const allaBocker = [
  { titel: "Harry Potter", 
    genre: "Fantasi", 
    ar: 1997, 
    likes: 0 },

  { titel: "Pip Långstrump",
     genre: "Barndom", 
     ar: 1945, 
     likes: 0 },

  { titel: "Sagan om ringen",
     genre: "Fantasi",
      ar: 1949, 
      likes: 0 },

  { titel: "Hunger games", 
    genre: "Sci-fi", 
    ar: 2008, 
    likes: 0 },
  
  { titel: "Bibeln",
     genre: "Biografi",
      ar: 1500, 
      likes: 0 }
];


const boklistaDiv = document.getElementById("Boklista");
const genreFilter = document.querySelector("#Genrefilter");


function visaBocker(bockerAttVisa) {
  let htmlKod = "";

  for (let i = 0; i < bockerAttVisa.length; i++) {
    const bok = bockerAttVisa[i];
    

    htmlKod += `
      <div class="bok-card">
        <h3>${bok.titel}</h3>
        <p><strong>Genre:</strong> ${bok.genre}</p>
        <p><strong>År:</strong> ${bok.ar}</p>
        <button onclick="gillaBok(${i})">👍 Gilla (${bok.likes})</button>
      </div>
    `;
  }

  boklistaDiv.innerHTML = htmlKod;
}


function gillaBok(index) {
  allaBocker[index].likes++;
  
  
  Filtrering();
}


function Filtrering() {
  const valtGenre = genreFilter.value;

  if (valtGenre === "Alla" || valtGenre === "") {
    visaBocker(allaBocker);
  } else {
    
    let filtreradeBocker = [];
    for (let i = 0; i < allaBocker.length; i++) {
      if (allaBocker[i].genre === valtGenre) {
        filtreradeBocker.push(allaBocker[i]);
      }
    }
    visaBocker(filtreradeBocker);
  }
}


genreFilter.addEventListener("change", Filtrering);


window.onload = function() {visaBocker(allaBocker);
};
