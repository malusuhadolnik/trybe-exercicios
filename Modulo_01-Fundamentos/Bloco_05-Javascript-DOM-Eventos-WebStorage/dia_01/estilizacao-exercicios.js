function mudarOTexto (){
    let segundoP = document.getElementsByTagName("p")[1];
    segundoP.innerHTML = "Daqui a dois anos estarei trabalhando em uma empresa cujos valores compartilho, ganhando cerca de 4k.";
}

mudarOTexto();

function verdeTrybe () {
    let primeiroMainContent = document.getElementsByClassName("main-content")[0];
    primeiroMainContent.style.backgroundColor = "rgb(76,164,109)";
}
verdeTrybe();

function caixaDoMeio () {
    let primeiroMainContent = document.getElementsByClassName("center-content")[0];
    primeiroMainContent.style.backgroundColor = "white";
}

caixaDoMeio()

function correcaoDoTexto (){
    let primeiroHeader = document.getElementsByTagName("h1")[0];
    primeiroHeader.innerHTML = "Exercício 5.1 - JavaScript";
}

correcaoDoTexto();

function paragraphUpperCase() {
    let paragraph = document.getElementsByTagName('p');
    for (let index in paragraph){ 
        paragraph[index].innerHTML = paragraph[index].innerHTML.toUpperCase();
    }
  }
  paragraphUpperCase();

function printParagrafos () {
    let paragraph = document.getElementsByTagName('p');
    for (let index in paragraph){ 
        console.log(paragraph[index].innerHTML);
    }
}
printParagrafos();

