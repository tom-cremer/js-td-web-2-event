window.alert("bonjour");
//------------------------------------------------------------------------------
// on peut omettre l'objet window
alert("bonjour");
//------------------------------------------------------------------------------
// On ne peut pas écrire fonction=
window.alert = ("bonjour");
window.alert = "bonjour";
//------------------------------------------------------------------------------
// title est une propriété de l'objet document, on ne peut pas écrire propriété()
document.title();
//------------------------------------------------------------------------------
// une propriété est une variable, on peut soit y stocker une valeur (faire une affectation)
document.title = "J'ai changé le titre de ma page !";
// soit afficher sa valeur
alert(document.title);
//-------------------------------------------------------------------------------
// title est une propriété de l'objet document, pas de l'objet window => on ne peut pas écrire window.title
alert(window.title);
//-------------------------------------------------------------------------------
// value est une propriété de l'objet Input, pas de l'objet document => on ne peut pas écrire document.value
alert(document.value);
//-------------------------------------------------------------------------------
// sqrt est une propriété de l'objet Math, pas de l'objet window => on ne peut pas écrire window.sqrt()
window.sqrt(4);
//------------------------------------------------------------------------------
// on  ne peut pas non plus écrire sqrt() tout seul, il faut l'objet devant
sqrt(4);
//------------------------------------------------------------------------------
// ça, c'est bon, mais ça n'affiche rien. Pq ?
Math.sqrt(4);
// OK : calcule la racine de 4  et l'affiche
alert(Math.sqrt(4));
//------------------------------------------------------------------------------
// Chaînage : monBouton est un objet de type Element => je peux écrire après lui . une propriété de Element
var monBouton = document.getElementById("boutonBonjour");
alert(monBouton.id);
monBouton.className = "boutonJS";
//------------------------------------------------------------------------------
// Chaînage plus long (on peut rendre le code plus concis)
document.getElementById("boutonBonjour").className = "boutonJS";
//------------------------------------------------------------------------------
// comment faire si on veut changer le style d'un élément ?
// on ne peut pas écrire Elt.backgroundColor parce que backgroundColor n'est pas un attribut de Elt
// => backgroundColor n'est pas une propriété de Element
document.getElementById("boutonBonjour").backgroundColor = "red";
// style est une propriété de Element => on pourrait s'attendre à pouvoir lui donner une valeur, mais on ne peut pas
document.getElementById("boutonBonjour").style = "red";
// c'est parce que style est en même temps un objet, qui a lui-même des propriétés
alert(document.getElementById("boutonBonjour").style);
// => on écrit OBJET.propriété.propriété :c'est comme des poupées russes qui s'emboîtent
document.getElementById("boutonBonjour").style.backgroundColor = "red";
//------------------------------------------------------------------------------
// Un premier petit exercice qui applique tout ça : quand on clique sur le bouton, on affiche bonjour
var monBouton = document.getElementById("boutonBonjour");
monBouton.addEventListener("click", direBonjour, false);

function direBonjour() {
    alert("Bonjour !");
}

//------------------------------------------------------------------------------
// changer la value du bouton dans le HTML
// Exercice 2 : quand on clique sur le bouton, il change de nom
var monBouton = document.getElementById("boutonBonjour");
monBouton.addEventListener("click", changeNom, false);

function changeNom() {
    monBouton.value = "Je te l'avais dit !";
}

//------------------------------------------------------------------------------
// changer la couleur du bouton dans le HTML
// Exercice 3 : quand on clique sur le bouton, il change de couleur
var monBouton;
window.addEventListener("load", initialise, false);

function initialise() {
    monBouton = document.getElementById("boutonBonjour");
    monBouton.addEventListener("click", changeCouleur, false);
}

function changeCouleur() {
    monBouton.style.backgroundColor = "red";
}

//------------------------------------------------------------------------------
// changer la couleur du fond de la page
// Exercice 4 : quand on clique sur le bouton, la couleur de fond de la page change
var monBouton;
window.addEventListener("load", initialise, false);

function initialise() {
    monBouton = document.getElementById("boutonBonjour");
    monBouton.addEventListener("click", changeCouleur, false);
}

function changeCouleur() {
    document.body.style.backgroundColor = "red";
}
