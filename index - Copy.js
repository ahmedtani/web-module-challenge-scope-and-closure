// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function callback(x){
  return x+x;
}
function processFirstItem(stringList, callback) {
  
    return callback(stringList[1]);

}console.log(processFirstItem(['foo','bar'] , callback));

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 In terms of values returned nothing. However in terms of type one contains a callback and higher order function
 
 * 2. Which of the two uses a closure? First one How can you tell? Function within a function
 * 
 * 3. In what scenario would the counter1 code be preferable? if were want a function that returns a vlaue dynamically 
 * In what scenario would counter2 be better? when we need global non dynamic values and simple calc 
 *
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}console.log(counter2());


/* Task 2: inning() 

Write a function called `inning` that generates a random number of points that a team scored in an 
inning. This should be a whole number between 0 and 2. */

function inning(val){

  var res = Math.floor(Math.random() * val);
  return res;
}
console.log(inning(3));

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function 
`inning` (from above) and a number of innings and and returns the final score of the 
game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(func, value){

  const teamname =['Home','Away'];
  for( i = 0; i<teamname.length; i++){
  return `"${teamname[i]}": ${inning(value)}`;
  }

} console.log(finalScore(inning(),9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `inning` that you wrote above
(2) A number of innings

and returns the score at each pont in the game, like so:



Final Score: 6 - 10 */

// Instead of this question I have completed the 3 streches

function scoreboard(fun,val2) {
const scorepoint = [];
scorepoint.push(fun(val2));
console.log(scorepoint[0]);
for( i = 1; i<10; i++ ){
  let vals = ['','st', 'nd','rd','th','th','th','th','th','th'];
  

  console.log(`${i}${vals[i]} inning: ${Math.min(val2)} - ${Math.max(val2+2)}`);


}


}
console.log(scoreboard(inning,inning(8)));



function createBase(x){
  return x+6;
}
function addSix(val) {
  
    return createBase(val);

}console.log(addSix(20));
