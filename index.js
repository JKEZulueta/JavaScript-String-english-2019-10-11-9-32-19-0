// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
console.log('\'' +name.toUpperCase(0) + '\'');



// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
var whole = "";
var myWord = sentence.split(" ");
for(let i = 0; i < myWord.length; i++){
myWord[i] = myWord[i][0].toUpperCase() + myWord[i].substr(1);
whole += myWord[i]+= ' ';
}
console.log(myWord);


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
console.log(money.substr(1));
