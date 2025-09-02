//Opgave 1 kode
function saveNameByMariePierreLessard() {
    const name = document.getElementById("nameInput").value;
    // din localStorage code her: gem navnet i localStorage
    /* The setItem() method requires two arguments (a key name and a value), and localStorage only accepts strings. 
    Sources: teacher and https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem */
    localStorage.setItem("userByMariePierreLessard", name);
    /* Checked in console */
    console.log(name);

    /* This is a callback (even though the function is defined below). The function is used as an argument inside of another function. */
    showGreetingByMariePierreLessard();
};

function showGreetingByMariePierreLessard() {
    // din localStorage code her: opret en const med navn savedName som indeholder navnet fra localStorage
    const savedNameByMariePierreLessard = localStorage.getItem("userByMariePierreLessard");
    console.log(savedNameByMariePierreLessard);

    if (savedNameByMariePierreLessard) {
        document.getElementById("greeting").textContent = `Hej, ${savedNameByMariePierreLessard}!`;
    };
    /* Checked (it is displayed) */
};

  
// Opgave 2 kode
function saveColorByMariePierreLessard() {
    const color = document.getElementById("colorPicker").value;
    // din localStorage code her: gem farven i localStorage
    localStorage.setItem("bcByMariePierreLessard", color);

    document.body.style.backgroundColor = color;
};

function loadColorByMariePierreLessard() {
    // din localStorage kode her: opret en const med navn savedColor som indeholder farven fra localStorage
    const savedColorByMariePierreLessard = localStorage.getItem("bcByMariePierreLessard");  

    if (savedColorByMariePierreLessard) {
        document.body.style.backgroundColor = savedColorByMariePierreLessard;
    };
    /* Checked: the background colour does change. */
};


//--- service functions nix pille! -------------------------------------------------------------------------------------

window.onload = loadApp;

function loadApp() {
    showGreetingByMariePierreLessard();
    loadColorByMariePierreLessard();
};
