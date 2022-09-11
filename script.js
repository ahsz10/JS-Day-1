function myFunction() {
    let x = "Your name is: "+ fName+" "+lName+"\nEither confirm or Cancel.";
    
    if (confirm(x) == true) {
      x = true;
    } else {
      x = false;
    }
    return x
  }

function enterName(){
    fName = window.prompt("Enter your first name: ");
    lName = window.prompt("Enter your last name: ");

}

var fName, lName, birthYear, age, confirmation;

enterName();
confirmation = myFunction();

switch (confirmation) {
    case true:
        console.log(fName+" "+ lName);
        break;
    case false:
        console.log("canceled");
        break;
    default:
        console.log("Page will be reloaded");
        location.reload();
        break;
  }

birthYear = window.prompt("Enter your Birth Year: ");
age = 2022 - birthYear;

alert("Welcome "+fName+" "+lName+" you are "+age+" years old");

var num1, num2, result;

alert("This is the first release of the Calculator that only has a summation feature")
num1= parseInt(window.prompt("Enter First Number: "));
num2= parseInt(window.prompt("Enter Second Number: "));
result= num1+num2;
//console.log(result);

alert(num1+ " + "+num2+ " = "+ result);


