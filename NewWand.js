/* Selecteerd de elementen */
const newWandBtn = document.getElementById("new-wand-btn");
const stickForm = document.getElementById("stick-form");
const wandItems = document.getElementById("wand-items");
const cancelBtn = document.getElementById("cancel-btn");

/* // Knop om het formulier te tonen */
newWandBtn.addEventListener("click", () => { /* "https://www.w3schools.com/jsref/met_element_addeventlistener.asp" Heeft me geholpen voor de functie en voor de "addEventListener"  */
    stickForm.style.display = "block"; /*  Formulier zichtbaar maken */
    newWandBtn.style.display = "none"; /*  Knop verbergen */
});

/* // Formulierverwerking */
stickForm.addEventListener("submit", (event) => {
    event.preventDefault(); /* Voorkomt standaardverzending */


    const name = document.getElementById("name").value;
    const core = document.getElementById("core").value;
    const length = document.getElementById("length").value;
    const owner = document.getElementById("owner").value;
    /*Ik wou ervoor zorgen dat ik de elementen uit het formulier kon halen waardoor ik "document.getElementById" heb gebruikt. Bron: --> "https://www.w3schools.com/jsref/met_document_getelementbyid.asp" */


    /* Hier maak ik een nieuwe lijst aan voor de toverstokken die al gemaakt zijn. */
    const newWandItem = document.createElement("li");
    newWandItem.textContent = `Naam: ${name}, Kern: ${core}, Lengte: ${length} cm, Eigenaar: ${owner}`;

    /* Hier voeg ik de nieuwe toverstok toe aan de lijst bron voor "appendchild" "https://stackoverflow.com/questions/18980457/appending-an-element-inside-the-child-of-another-element"*/
    wandItems.appendChild(newWandItem);

    /* Hier heb ik ervoor gezorgd dat het formulier zichzelf reset en cleard zodat het niet meer in de weg staat op het scherm. Bron: "https://stackoverflow.com/questions/3786694/how-to-reset-clear-form-through-javascript" */
    stickForm.reset();
    stickForm.style.display = "none"; // Formulier verbergen
    newWandBtn.style.display = "block"; // Knop weer tonen
});

/* // De code voor de "Terug"-knop */
cancelBtn.addEventListener("click", () => {
    stickForm.reset(); /* // Dit reset het formulier */
    stickForm.style.display = "none";
    newWandBtn.style.display = "block";
});
