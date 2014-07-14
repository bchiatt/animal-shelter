//Creating objects from user input and placing them into various array then adding them to other arrays based on user input
/* global prompt:true */

var prompt = require('sync-prompt').prompt;

var people = [], pigs = [], hawks = [], fishes = [];

var person1 = {name:'bob', age:10, pets:[]};
var person2 = {name:'sam', age:5, pets:[]};
var person3 = {name:'jill', age:7, pets:[]};

people.push(person1, person2, person3);

var option = prompt('Add (p)ig, (h)awk, (f)ish or (q)uit: ');

while (option !== 'q') {
  switch (option) {
    case 'p':
      var name = prompt('Name: ');
      var color = prompt('Color: ');
      var gender = prompt('Gender: ');
      var pig = {name:name, color:color, gender:gender};
      pigs.push(pig);
      break;
    case 'h':
      var name = prompt('Name: ');
      var age = prompt('Age: ');
      var gender = prompt('Gender: ');
      var hawk = {name:name, age:age, gender:gender};
      hawks.push(hawk);
      break;
    case 'f':
      var name = prompt('Name: ');
      var age = prompt('Age: ');
      var gender = prompt('Gender: ');
      var fish = {name:name, age:age, gender:gender};
      fishes.push(fish);
      break;
    default:
      console.log('Please only press the first letter.');
  }
  option = prompt('Add (p)ig, (h)awk, (f)ish or (q)uit: ');
}

option = prompt('(b)ob, (s)am, (j)ill or (q)uit: ');
while (option !== 'q'){
  for (var i = 0; i < people.length; i++){
    if (option === people[i].name[0]){
      var client = people [i];
      break;
    }
  }
  console.log('Client:', client);
  var animals;
  var choice = prompt('What type of Pet? (p)ig, (h)awk, or (f)ish: ');
  switch(choice){
    case 'p':
      console.log('Pigs: ', pigs);
      animals = pigs;
      break;
    case 'h':
      console.log('Hawks: ', hawks);
      animals = hawks;
      break;
    case 'f':
      console.log('Fishes: ', fishes);
      animals = fishes;
  }

  name = prompt('What is the name of the animal you want to adopt? ');

  for (var i = 0; i < animals.length; i++){
    if (name === animals[i].name){
      var animal = animals[i];
      var index = i;
      break;
    }
  }
  
  console.log(animal);

  animals.splice(index,1);
  client.pets.push(animal);
  console.log('After adoption: ', client);
  console.log('Animals array: ', animals);
  console.log(client.name, 'now has', client.pets.length, 'pets.');

  option = prompt('(b)ob, (s)am, (j)ill or (q)uit: ');
}

console.log('Pigs: ', pigs);
console.log('Hawks: ', hawks);
console.log('Fishes: ', fishes);
