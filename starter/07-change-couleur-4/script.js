/*
EXERCICE 6 : Change couleur (4) - v1
Quand on clique sur un des boutons radio, la couleur de fond de la page change dans la couleur choisie
Version 1  : une fonction par bouton radio
	À faire après pour préparer la version 2 : 
		(1) un alert dans une fonction pour voir à quoi correspond e.target
		(2) un alert dans chaque fonction pour voir à quoi correspond e.target.value
*/


const color = {
    inputButtons: document.querySelectorAll('input[name="couleur"]'),
    surpriseButton: document.getElementById('boutonCouleur'),

    init() {
        this.inputButtons.forEach((button) => {
            button.addEventListener('click', (event) => {
                document.body.style.background = event.currentTarget.value;
            });
        });

        this.surpriseButton.addEventListener('click', () => {
            document.body.style.background = `rgb(${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)},${Math.floor(Math.random()*255)})`
        });
    }
};


color.init();







