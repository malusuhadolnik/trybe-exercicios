function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  }
createDaysOfTheWeek();

let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function calendarioDinamico(){
  let diasDaSemana = document.querySelector("#days"); //Aqui estabeleço onde vou colocar meu novo elemento

  for (let index in decemberDaysList) {
    let diaDeDezembro = decemberDaysList[index]; //armazendo cada lista da array em uma nova variável;

    let dia = document.createElement("li"); //aqui eu crio um novo elemento tipo lista;
    dia.innerHTML = diaDeDezembro; //no qual cada item será a variável criada na etapa anterior (um dos indexes de decemberDaysList)
        
    if (diaDeDezembro === 25) { //neste loop add mais classes à dias específicos;
      dia.className = "day holiday friday"; 
    } else if (diaDeDezembro === 24 || diaDeDezembro === 31) {
      dia.className = "holiday";
    } else if (diaDeDezembro === 4 || diaDeDezembro === 11 || diaDeDezembro === 18) {
      dia.className = "friday";
    } else {
      dia.className = "day"; 
    }

    diasDaSemana.appendChild(dia);
  }
};

calendarioDinamico(); 

  
function botaoFeriados(Feriados) {
  let placeButton = document.querySelector(".buttons-container"); //define onde o novo elemento vai entrar
  
  let botao = document.createElement("button"); //cria o novo elemento
  botao.innerHTML = "Feriados";
  botao.setAttribute("id", "btn-holiday"); //adiciona nova ID

  placeButton.appendChild(botao); //anexa o novo elemento ao local escolhido
}
botaoFeriados();

 // Adicione ao botão "Feriados" um evento de "click" que altere a cor de fundo dos dias que possuem a classe "holiday"
function clickHoliday() {
  let pegaHolidays = document.querySelectorAll(".holiday"); //seleciona todos os elementos com a classe holiday
  let pegaBotao = document.querySelector("#btn-holiday"); //seleciona o botao Feriados pela ID
  let corDefaultParaBackground = 'rgb(238,238,238)'; 
  let corFeriados = "lightblue";

  pegaBotao.addEventListener("click", function(){ //adiciona ao botão um evento de clique: quando clicar, a seguinte função será executada:
    for (let index in pegaHolidays) {  
      if (pegaHolidays[index].style.backgroundColor === corFeriados){ //se a cor do fundo estiver azul, o clique vai deixar branco;
       pegaHolidays[index].style.backgroundColor = corDefaultParaBackground;
     } else {
       pegaHolidays[index].style.backgroundColor = corFeriados; // e se estiver branco, o clique deixa azul! é tipo um interruptor.
     }
    }
   });
  }
  clickHoliday();

  function botaoSexta(Sexta) {
    let colocaBotaoSexta = document.querySelector(".buttons-container"); //define onde o novo elemento vai entrar
    
    let botaoSextaFeira = document.createElement("button"); //cria o novo elemento
    botaoSextaFeira.innerHTML = "Sexta-Feira";
    botaoSextaFeira.setAttribute("id", "btn-friday"); //adiciona nova ID
  
    colocaBotaoSexta.appendChild(botaoSextaFeira); //anexa o novo elemento ao local escolhido
  }
botaoSexta();

//Implemente uma função que modifica o texto exibido nos dias que são Sexta-feira. Adicione ao botão "Sexta-feira" um evento de "click" e modifique o texto a ser exibido nos dias que são sextas-feiras.É interessante que esse botão possua também a lógica inversa. Ao ser clicado novamente, ele retorna à configuração inicial exibindo os dias.
// function clickFriday() {
//   let pegaHolidays = document.querySelectorAll(".friday"); //seleciona todos os elementos com a classe friday
//   let pegaBotao = document.querySelector("#btn-friday"); //seleciona o botao Sexta-Feira pela ID
//   let corDefaultParaBackground = 'rgb(238,238,238)'; 
//   let corFeriados = "lightblue";

//   pegaBotao.addEventListener("click", function(){ //adiciona ao botão um evento de clique: quando clicar, a seguinte função será executada:
//     for (let index in pegaHolidays) {  
//       if (pegaHolidays[index].style.backgroundColor === corFeriados){ //se a cor do fundo estiver azul, o clique vai deixar branco;
//        pegaHolidays[index].style.backgroundColor = corDefaultParaBackground;
//      } else {
//        pegaHolidays[index].style.backgroundColor = corFeriados; // e se estiver branco, o clique deixa azul! é tipo um interruptor.
//      }
//     }
//    });
//   }

//Implemente uma função que adicione uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
function tarefaPersonalizada(tarefa) {
  let colocaTarefas = document.querySelector(".my-tasks"); //define onde o novo elemento vai entrar

  let taskName = document.createElement('span'); //cria o elemento com a tag span
  taskName.innerHTML = tarefa; //este elemento vai conter um texto dizendo qual é a tarefa
  
  colocaTarefas.appendChild(taskName);  
}

tarefaPersonalizada("cozinhar");

//Implemente uma função que adicione uma legenda com cor para a tarefa. Essa função deverá receber como parâmetro uma string ('cor') e criar dinamicamente um elemento de tag `<div>` com a classe `task`. 
//O parâmetro cor deverá ser utilizado como cor de fundo da <div> criada.
//O elemento criado deverá ser adicionado como filho/filha da tag <div> que possui a classe "my-tasks".
function legendaColorida(cor) {
  let colocaLegendaColorida = document.querySelector(".my-tasks");

  let legendaComCor = document.createElement("div");
  legendaComCor.className = 'task';
  legendaComCor.style.backgroundColor = cor;

  colocaLegendaColorida.appendChild(legendaComCor);
}
legendaColorida("purple");


