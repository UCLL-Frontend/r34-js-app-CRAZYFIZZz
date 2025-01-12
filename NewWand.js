document.addEventListener("DOMContentLoaded", () => {
    /* de DOMContentLoaded wordt gebruikt om ervoor te zorgen dat mijn JavaScript pas wordt uitgevoerd nadat de volledige HTML-pagina is geladen en volledig beschikbaar is om mee te werken. */
    /* Bron van reddit: "https://www.reddit.com/r/learnjavascript/comments/15ookb0/does_anyone_use_domcontentloaded/"  de bron hoe ik er achter kwam hoe ik de "DOMContentLoaded" moest gebruiken: "https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event" */
    /* Selecteerd de elementen */
    const newWandBtn = document.getElementById("new-wand-btn");
    const stickForm = document.getElementById("stick-form");
    const wandItems = document.getElementById("wand-items");
    const cancelBtn = document.getElementById("cancel-btn");

    /* Functie om de opgeslagen toverstokken uit localStorage te laden */
    /* Bron van "localStorage" bron: "https://meetanshi.com/blog/reload-current-page-without-losing-any-form-data-in-javascript/#:~:text=How%20to%20Reload%20Current%20Page%20Without%20Losing%20Any%20Form%20Data%20in%20JavaScript%3F,-By%20Sanjay%20Jethva&text=The%20easiest%20way%20to%20reload,used%20programming%20languages%20by%20developers." */
    const loadWandsFromStorage = () => {
        const wands = JSON.parse(localStorage.getItem('wands')) || [];
        wandItems.innerHTML = ''; /* Maak de lijst leeg voordat we nieuwe items toevoegen */

        /* Loopt door de opgeslagen toverstokken en voeg ze toe aan de lijst */
        wands.forEach(wand => {
            const newWandItem = document.createElement("li");
            newWandItem.textContent = `Naam: ${wand.name}, Kern: ${wand.core}, Lengte: ${wand.length} cm, Eigenaar: ${wand.owner}`;
            wandItems.appendChild(newWandItem);
        });
    };

    loadWandsFromStorage();

    newWandBtn.addEventListener("click", () => {
        stickForm.style.display = "block";
        newWandBtn.style.display = "none";
    });

    /* Formulierverwerking */
    stickForm.addEventListener("submit", (event) => {
        event.preventDefault(); /* Voorkomt standaardverzending */

        /* Haal de waarden op uit het formulier */
        const name = document.getElementById("name").value;
        const core = document.getElementById("core").value;
        const length = document.getElementById("length").value;
        const owner = document.getElementById("owner").value;

        const newWand = { name, core, length, owner };

        /* Dit haalt de bestaande toverstokken op uit localStorage en voeg de nieuwe toe
        */
        const wands = JSON.parse(localStorage.getItem('wands')) || [];
        wands.push(newWand);

        /* Dit de bijgewerkte lijst van toverstokken op in localStorage bron: "https://www.w3schools.com/jsref/prop_win_localstorage.asp"*/
        localStorage.setItem('wands', JSON.stringify(wands));

        const newWandItem = document.createElement("li");
        newWandItem.textContent = `Naam: ${name}, Kern: ${core}, Lengte: ${length} cm, Eigenaar: ${owner}`;
        wandItems.appendChild(newWandItem);

        stickForm.reset();
        stickForm.style.display = "none";
        newWandBtn.style.display = "block";
    });

    /* De code voor de "Terug"-knop */
    cancelBtn.addEventListener("click", () => {
        stickForm.reset(); /* Dit Reset het formulier */
        stickForm.style.display = "none";
        newWandBtn.style.display = "block";
    });
});