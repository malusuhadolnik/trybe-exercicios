function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function calendarioDinamico(){
  let diasDaSemana = document.querySelector("#days"); //Aqui estabeleço onde vou colocar meu novo elemento

  for (let index in decemberDaysList) {
    let diaDeDezembro = decemberDaysList[index]; //armazendo cada lista da array em uma nova variável;

    let dia = document.createElement("li"); //aqui eu crio um novo elemento tipo lista;
    dia.innerHTML = diaDeDezembro; //no qual cada item será a variável criada na etapa anterior (um dos indexes de decemberDaysList)
        
    if (diaDeDezembro === 25) { //neste loop add mais classes à dias específicos;
      dia.className = "day holliday friday"; 
    } else if (diaDeDezembro === 24 || diaDeDezembro === 31) {
      dia.className = "holliday";
    } else if (diaDeDezembro === 4 || diaDeDezembro === 11 || diaDeDezembro === 18) {
      dia.className = "friday";
    } else {
      dia.className = "day"; 
    }

    diasDaSemana.appendChild(dia);
  }
};

calendarioDinamico(); 


