document.addEventListener("DOMContentLoaded", () => {
    /* de DOMContentLoaded wordt gebruikt om ervoor te zorgen dat mijn JavaScript pas wordt uitgevoerd nadat de volledige HTML-pagina is geladen en volledig beschikbaar is om mee te werken. */
    /* Bron van reddit: "https://www.reddit.com/r/learnjavascript/comments/15ookb0/does_anyone_use_domcontentloaded/"  de bron hoe ik er achter kwam hoe ik de "DOMContentLoaded" moest gebruiken: "https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event" */
    /* Selecteerd de elementen */
    const newWandBtn = document.getElementById("new-wand-btn");
    const stickForm = document.getElementById("stick-form");
    const wandItems = document.getElementById("wand-items");
    const cancelBtn = document.getElementById("cancel-btn");


    const slytherinWands = [
        { name: "Salazar Slytherin's Wand", core: "Basilisk-horn", length: 33.02, owner: "Salazar Slytherin" },
        { name: "Tom Riddle's Wand", core: "dragon heartstring", length: 34.29, owner: "Tom Riddle / Lord Voldemort" },
        { name: "Draco Malfoy's Wand", core: "Unicorn hair", length: 25.4, owner: "Draco Malfoy" },
        { name: "Regulus Black's Wand", core: "Unicorn hair", length: 31.75, owner: "Regulus Black" },
        { name: "Lucius Malfoy's Wand", core: "dragon heartstring", length: 45.72, owner: "Lucius Malfoy" },
        { name: "Severus Snape's Wand", core: "phoenix-feather", length: 33.02, owner: "Severus Snape" },

    ];

    const gryffindorWands = [
        { name: "The Sword of Gryffindor", core: "griffin feather", length: 45.72, owner: "Godric Gryffindor" },
        { name: "Harry Potter's Wand", core: "phoenix feather", length: 27.94, owner: "Harry Potter" },
        { name: "Hermione Granger's Wand", core: "dragon heartstring", length: 27.31, owner: "Hermione Granger" },
        { name: "Ron Weasley's Wand", core: "unicorn hair", length: 35.56, owner: "Ron Weasley" },
        { name: "Albus Dumbledore's Wand", core: "thestral-tail-hair", length: 38.1, owner: "Albus Perkamentus" },
        { name: "Minerva McGonagall's Wand", core: "dragon heartstring", length: 24.13, owner: "Minerva McGonagall" },
    ];

    const ravenclawWands = [
        { name: "Rowena Ravenclaw's Wand", core: "thunderbird-feather", length: 33.02, owner: "Rowena Ravenclaw" },
        { name: "Luna Lovegood's Wand", core: "unicorn hair", length: 34.29, owner: "Luna Lovegood" },
        { name: "Cho Chang's Wand", core: "phoenix feather", length: 39, owner: "Cho Chang" },
        { name: "Evan Rosier's Wand", core: "unicorn hair", length: 36.83, owner: "Evan Rosier" },
        { name: "Gilderoy Lockhart's Wand", core: "dragon heartstring", length: 44.45, owner: "Gilderoy Lockhart" },

    ];

    const hufflepuffWands = [
        { name: "Helga Hufflepuff's Wand", core: "unknown", length: 24.765, owner: "Helga Hufflepuff" },
        { name: "Cedric Diggory's Wand", core: "unicorn hair", length: 31.12, owner: "Cedric Diggory" },
    ];

    /* Functie om de opgeslagen toverstokken uit localStorage te laden */
    /* Bron van "localStorage" bron: "https://meetanshi.com/blog/reload-current-page-without-losing-any-form-data-in-javascript/#:~:text=How%20to%20Reload%20Current%20Page%20Without%20Losing%20Any%20Form%20Data%20in%20JavaScript%3F,-By%20Sanjay%20Jethva&text=The%20easiest%20way%20to%20reload,used%20programming%20languages%20by%20developers." */
    const loadWandsFromStorage = () => {
        const wands = JSON.parse(localStorage.getItem('wands')) || [];
        wandItems.innerHTML = ''; /* Maak de lijst leeg voordat we nieuwe items toevoegen */

        gryffindorWands.forEach(wand => {
            const newWandItem = document.createElement("li");
            newWandItem.textContent = `Naam: ${wand.name}, Kern: ${wand.core}, Lengte: ${wand.length} cm, Eigenaar: ${wand.owner}`;
            wandItems.appendChild(newWandItem);

        });
        slytherinWands.forEach(wand => {
            const newWandItem = document.createElement("li");
            newWandItem.textContent = `Naam: ${wand.name}, Kern: ${wand.core}, Lengte: ${wand.length} cm, Eigenaar: ${wand.owner}`;
            wandItems.appendChild(newWandItem);

        });
        hufflepuffWands.forEach(wand => {
            const newWandItem = document.createElement("li");
            newWandItem.textContent = `Naam: ${wand.name}, Kern: ${wand.core}, Lengte: ${wand.length} cm, Eigenaar: ${wand.owner}`;
            wandItems.appendChild(newWandItem);

        });
        ravenclawWands.forEach(wand => {
            const newWandItem = document.createElement("li");
            newWandItem.textContent = `Naam: ${wand.name}, Kern: ${wand.core}, Lengte: ${wand.length} cm, Eigenaar: ${wand.owner}`;
            wandItems.appendChild(newWandItem);

        });

        /* Loopt door de opgeslagen toverstokken en voeg ze toe aan de lijst */
        wands.forEach(wand => {
            const newWandItem = document.createElement("li");
            newWandItem.textContent = `Naam: ${wand.name}, Kern: ${wand.core}, Lengte: ${wand.length} cm, Eigenaar: ${wand.owner}`;

            // Voeg een verwijderknop toe
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Verwijderen";
            deleteBtn.addEventListener("click", () => {
                removeWand(wand.name);
            });

            newWandItem.appendChild(deleteBtn);
            wandItems.appendChild(newWandItem);
        });

    };

    // Verwijder een toverstok uit localStorage
    const removeWand = (wandName) => {
        let wands = JSON.parse(localStorage.getItem('wands')) || [];
        wands = wands.filter(wand => wand.name !== wandName); // Verwijder de toverstok op basis van naam
        localStorage.setItem('wands', JSON.stringify(wands)); // Sla de bijgewerkte lijst op
        loadWandsFromStorage(); // Herlaad de lijst om de wijzigingen te tonen
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