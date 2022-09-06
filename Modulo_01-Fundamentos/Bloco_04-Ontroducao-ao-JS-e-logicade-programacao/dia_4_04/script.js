let player = {
    name:"Marta",
    lastName: "Silva",
    age: 34,
    medals: {
        golden: 2,
        silver: 3,
    }
};

player["bestInTheWorld"] = [2006, 2007, 2008, 2009, 2010, 2018];

//console.log("A jogadora " + player.name + " " + player.lastName + " tem " + player.age  + " anos de idade.");
//console.table(player);

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };
  for (let key in names){
    console.log("olá " + names[key]);
  }

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };
  for(let key in car) {
    console.log(key, car[key]);
  }