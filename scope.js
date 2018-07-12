//C is for Cookie

const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"];

for (let i = 0; i < cookies.length; i++) {
    const currentCookie = cookies[i];
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`);
};


//Conjunction Function

let conjoinedWord = "";
const conjunction = function (firstWord, secondWord) {
    conjoinedWord = `${firstWord} ${secondWord}`
    return conjoinedWord;
}

conjunction("Master", "Card");
console.log(conjoinedWord);


//Mod Squad

const ModSquad = {
    "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
    "series": {
        "start": "1968",
        "end": "1973"
    }
}

let HTMLRepresentation = "<h1>The Mod Squad</h1>";

ModSquad.members.forEach(function (member) {
    HTMLRepresentation += `<div>${member}</div>`;
})
document.querySelector(".show-info").innerHTML = HTMLRepresentation;



//Simon Says
const locations = [[1, 1], [1, 2], [1, 3], [2, 1], [2, 2], [2, 3]];


for (let i = 0; i < locations.length; i++) {
    let currentLocation = locations[i];

    if (currentLocation[0] > 2) {
        console.log("This location is invalid");
    }

    console.log(`There were ${i} locations displayed`);
}


//Lambda Llama
const llamaNamer = function () {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"];
    const randomizer = Math.floor(Math.random() * 7);

    const suffix = " the Llama";
    const name = possibleNames[randomizer];
    return name + suffix;

};

console.log(llamaNamer());