-/*
You were put in charge of ordering for tonight's company get-together, 
and you were given a data set with people's meal preferences and dietary restrictions. 
Write a function called orderAVegetarianDish that takes  an array of empoloyee objects, 
and returns true if at least 1 person is listed "vegetarian" on their "mealPreferences". 
Otherwise, your function should return false.
*/

var staffA = [
  {
    name: "Lia",
    department: "Human Resources",
    dietaryRestrictions: [],
    mealPreferences: "no preferences"
  },
  {
    name: "Sebastian",
    department: "Engineering",
    dietaryRestrictions: ["dairy free", "gluten free"],
    mealPreferences: "non-vegetarian"
  },
  {
    name: "Ari",
    department: "Executive",
    dietaryRestrictions: ["dairy free"],
    mealPreferences: "non vegetarian"
  },
  {
    name: "Martha",
    department: "Legal",
    dietaryRestrictions: ["nut allergies"],
    mealPreferences: "vegetarian"
  }
];

/*
orderAVegetarianDish(staffA); //true
*/

function orderAVegetarianDish(array){
  for(var i=0;i<=array.length;i++){
    if(array[i]['mealPreferences'] == "vegetarian"){
     return true;
    }
 
  
  } 
  return false;
}
