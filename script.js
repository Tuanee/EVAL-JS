

const cookieBox = document.querySelector(".contentCookie");
const buttons = document.querySelectorAll(".button");
console.log(cookieBox, buttons);
//fonction pour mes cookies et affficher ma page de cookie, la cacher si on a accepté et save pendant 1 mois avec max-age (j'ai appris le forEach au passage...)
function executesCodes() {
    if (document.cookie.includes("true")) return;
    cookieBox.classList.add("show");


    buttons.forEach(button => {
        button.addEventListener("click", () => {

            cookieBox.classList.remove("show");
            if (button.id == "accept") {
                document.cookie = "rgpd_consent=true; max-age=" + 60 * 60 * 24 * 30;
            }
        })
    })
};
//j'execute quand la page a load
window.addEventListener("load", executesCodes)


const inputText = document.querySelector("#inputText")
const add = document.querySelector("#add");
const ul = document.querySelector("#ul");

function ajouterUnElement() {
if (inputText.value == "") {
        return
    }
    //puis là j'ai crée mes element des div dans des div... c'était le plus facile a force d'en faire
    let createLi = document.createElement("li");
    let createInput = document.createElement("input");
    createInput.type = "checkbox";
    createInput.classList.add("checkbox");
    let createP = document.createElement("p");
    let createButton = document.createElement("button");
    createButton.innerText = "X";
    createButton.classList.add("button");
    ul.appendChild(createLi);
    createLi.appendChild(createInput);
    createLi.appendChild(createP);
    createLi.appendChild(createButton);
    createP.innerText = inputText.value;
    createP.classList.add("listtext");

    //la je fais en sorte que le bouton X supprime l'element qu'il a ajouté
    function supprimerUnElement() {
        createLi.remove()
    }
    createButton.addEventListener("click", supprimerUnElement);



}
//appel de ma fonction pour qu'elle fonctionne 
add.addEventListener("click", ajouterUnElement);

//là je vais essayer de faire un filtre qui se déplie + qui fonctionne
const filtre = document.querySelector("#filtre");


// PARTIE LOCAL STORAGE ????? (j'ai lu trop de doc et regardé trop de vidéo..)
//mon tableau vide qui va contenir les task que l'utilisateur va crée
let tasks = []
function save() {
    //je converti mes elements dans mon tableau en string pck mon localstorage peut SEULEMENT stocker des strings
    localStorage.setItem("tasks", JSON.stringify(tasks))
}
// j'insère le nom dans mon tableau
function createTask(taskName) {
    tasks.push(taskName)
}

//quand l'utilisateur va ecrire qqchd ans l'input et cliquer sur le bouton add, ça va crée une const avec comme valeur une string + ca va l'enregistrer dans mon tableau sous ce nom

add.addEventListener("click", () => {
    const nom = inputText.value
    createTask(nom)
    save()
})

