// Code your solutions in this file
/*for (let age =30; < 40; age++) {
console.log(`I'm ${age} years old. Happy birthday to me!`);
debugger;
}
*/

function writeCards(namesArray, eventName) {
  let thankYouMessages = [];
  for (let i = 0; i < namesArray.length; i++) {
    let message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
    thankYouMessages.push(message);
  }
  return thankYouMessages;
}

function countDown(num) {
  while (num >= 0) {
    console.log(num);
    num--;
  }
}
countDown(10);
10
9
8
7
6
5
4
3
2
1
0

