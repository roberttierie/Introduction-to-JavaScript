/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 0;
if(votingAge < "18"){
  console.log("This is true!");
} 


//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let votingAge = 0;
if(votingAge = "18"){
  console.log("This is true!");
} 



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

Number('1999');


//Task d: Write a function to multiply a*b 
function multi(a, b) {
    return a * b;
}




/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function dogYears(a) {
    return a * 7;
    console.log(dogYears)
}



/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  

function dogFeeder(a,b) {
    if (a <= 5 && b >= 1) {
      return  a * 0.05;
      console.log(dogFeeder(a, b))
    } else if (a <= 10 && b >= 1) {
      return  a * 0.04;
      console.log(dogFeeder(a, b))
    } else if (a <= 15 && b >= 1) {
      return  a * 0.03;
      console.log(dogFeeder(a, b))
    } else if (a > 15 && b >= 1) {
      return  a * 0.02;
      console.log(dogFeeder(a, b))
    } else if (a <= 5 && b <= 0.33) {
      return  a * 0.1;
      console.log(string.dogFeeder(a, b))
    } else if (a <= 10 && b <= 0.583) {
      return  a * 0.05;
      console.log(string.dogFeeder(a, b))
    } else if (a <= 15 && b <= 0.99) {
      return  a * 0.04;
      console.log(string.dogFeeder(a, b))
    } 
  }

  dogFeeder(15,1)

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

var rockpaperscissors = ["rock", "paper", "scissors"];

function game(turna,turnb) {
    turna =     rockpaperscissors.indexOf(turna);
    turnb = rockpaperscissors.indexOf(turnb);
    if (turna == turnb) {
        return "Both is the winner";
    }
    if (turna == rockpaperscissors.length - 1 && turnb == 0) {
        return "B is the winner";
    }
    if (turnb == rockpaperscissors.length - 1 && turna == 0) {
        return "A is the winner";
    }
    if (turna > turnb) {
        return "A is the winner";
    } else {
        return "B is the winner";
    }
}
  

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kmtoMiles(a) {
    return a / 1.609
    console.log(kmtoMiles(a))
}
)


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
function fttoCM(a) {
    return a * 30.48
    console.log(fttoCM(a))
}
)


function lessthanorequaltoZero(a) {
    if a <= 0  {
    return "True";
} else {
    return false;
}
}

/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
function annoyingSong(a) {
    for(let i = a; i > 0; i--) {
        console.log(i + " bottles of    soda on the wall, take one down pass it around " + (i - 1) + ' bottles of soda on the wall');
    }
    
}

/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F


function grade(a) {
    if (a >= 90)  {
      console.log("You got an A");
    return a
  } else if ( a >= 80) {
        console.log("You got a B");
    return a
  } else if ( a >= 70) {
        console.log("You got a C");
    return a 
  } else if ( a >= 60) {
        console.log("You got a D");
    return a
  } else {
      console.log("You failed");
    return a
  }
    
  }

  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





