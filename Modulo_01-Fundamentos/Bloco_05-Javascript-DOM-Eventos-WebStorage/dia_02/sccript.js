//para ver as mudanças efetuadas pelos comandos, rodá-los no console (abrir a página html no GoLive e inspecionar)
// 1. Acesse o elemento elementoOndeVoceEsta.
document.querySelector("#elementoOndeVoceEsta")
// 2. Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
document.querySelector("#elementoOndeVoceEsta").parentNode.style.backgroundColor = "red";
// 3. Acesse o primeiroFilhoDoFilho e adicione um texto a ele.
document.querySelector("#primeiroFilhoDoFilho").innerHTML = "meu texto aqui";
// 4. Acesse o primeiroFilho a partir de pai.
document.querySelector("#pai").firstElementChild
// 5. Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
document.querySelector("#elementoOndeVoceEsta").parentElement.firstElementChild
// 6. Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
document.querySelector("#elementoOndeVoceEsta").parentNode.parentNode.lastElementChild //não consegui, checar gabarito
//gabarito: elementoOndeVoceEsta.nextSibling;
// 7. Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
document.querySelector("#elementoOndeVoceEsta").nextSibling.nextSibling
// 8. Agora acesse o terceiroFilho a partir de pai.
document.querySelector("#pai").lastChild.previousSibling //nao consegui, checar gabarito
//gabarito:pai.lastElementChild.previousElementSibling;
