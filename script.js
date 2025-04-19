let stagiaires = JSON.parse(localStorage.getItem("stagiaires")) || [];
let editIndex = -1;

function toggleForm(forceShow = false) {
  const form = document.getElementById("formulaire");
  if (forceShow || form.style.display === "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}

function ajouterStagiaire() {
  let nom = document.getElementById("nom").value;
  let cc1 = parseFloat(document.getElementById("cc1").value);
  let cc2 = parseFloat(document.getElementById("cc2").value);
  let cc3 = parseFloat(document.getElementById("cc3").value);
  let efm = parseFloat(document.getElementById("efm").value);

  if (!nom || isNaN(cc1) || isNaN(cc2) || isNaN(cc3) || isNaN(efm)) {
    alert("Veuillez remplir tous les champs correctement.");
    return;
  }

  if (editIndex >= 0) {
    stagiaires[editIndex] = { nom, cc: [cc1, cc2, cc3], efm };
    editIndex = -1;
  } else {
    stagiaires.push({ nom, cc: [cc1, cc2, cc3], efm });
  }

  localStorage.setItem("stagiaires", JSON.stringify(stagiaires));

  document.getElementById("nom").value = "";
  document.getElementById("cc1").value = "";
  document.getElementById("cc2").value = "";
  document.getElementById("cc3").value = "";
  document.getElementById("efm").value = "";
  document.getElementById("formulaire").style.display = "none";

  afficherTable();
  calculerStats();
  afficherJS();
}

function afficherTable() {
  let body = "";
  stagiaires.forEach((s, index) => {
    let moyenneCC = (s.cc[0] + s.cc[1] + s.cc[2]) / 3;
    let moyenne = (moyenneCC * 0.33 + s.efm * 0.67).toFixed(2);
    let validation = moyenne >= 10 ? "V" : "NV";

    body += `<tr>
          <td>${s.nom}</td>
          <td>${s.cc[0]}</td>
          <td>${s.cc[1]}</td>
          <td>${s.cc[2]}</td>
          <td>${s.efm}</td>
          <td>${moyenne}</td>
          <td>${validation}</td>
          <td>
            <button class='btn btn-supprimer btn-danger col-5 btn-sm me-1' onclick='supprimer(${index})'>Delete</button>
            <button class='btn btn-modifier btn-warning col-5 btn-sm' onclick='modifier(${index})'>Edit</button>
          </td>
        </tr>`;
  });
  document.getElementById("tableBody").innerHTML = body;
}

function supprimer(index) {
  if (confirm("Êtes-vous sûr de vouloir supprimer ce stagiaire ?")) {
    stagiaires.splice(index, 1);
    localStorage.setItem("stagiaires", JSON.stringify(stagiaires));
    afficherTable();
    calculerStats();
    afficherJS();
  }
}

function modifier(index) {
  let s = stagiaires[index];
  document.getElementById("nom").value = s.nom;
  document.getElementById("cc1").value = s.cc[0];
  document.getElementById("cc2").value = s.cc[1];
  document.getElementById("cc3").value = s.cc[2];
  document.getElementById("efm").value = s.efm;
  editIndex = index;
  toggleForm(true);
}

function calculerStats() {
  let total = stagiaires.length;
  let valides = 0;
  let totalMoyenne = 0;

  stagiaires.forEach((s) => {
    let moyenneCC = (s.cc[0] + s.cc[1] + s.cc[2]) / 3;
    let moyenne = moyenneCC * 0.33 + s.efm * 0.67;
    totalMoyenne += moyenne;
    if (moyenne >= 10) valides++;
  });

  let nonValides = total - valides;
  let moyenneClasse = total > 0 ? (totalMoyenne / total).toFixed(2) : 0;
  let taux = total > 0 ? Math.round((valides / total) * 100) : 0;

  document.getElementById(
    "stats"
  ).innerHTML = `Nbr de stagiaires : ${total} &nbsp;&nbsp; Moyenne de la classe : ${moyenneClasse}
         &nbsp;&nbsp; Nbr Stagiaire Validé : ${valides} &nbsp;&nbsp; Nbr Stagiaire Non Validé : ${nonValides} &nbsp;&nbsp;
         <span>pourcentage de réussite : ${taux}%</span>`;
}

function afficherJS() {
  document.getElementById("jsData").textContent =
    "let stagiaires = " + JSON.stringify(stagiaires, null, 2);
}

window.onload = () => {
  afficherTable();
  calculerStats();
  afficherJS();
};
