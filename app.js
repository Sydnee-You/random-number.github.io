var buttontest = document.getElementById('test');
var buttoning = document.getElementById('btest');

buttoning.addEventListener("click", buttontesting);

function buttontesting() {
    buttontest.innerHTML = "don't touch that!";
    console.log('hhhhh');
}

document.getElementById('displayButton').addEventListener('click', function () {
    var userInput = document.getElementById('userInput').value;
    var displayText = document.getElementById('displayText');
    displayText.innerHTML = 'You inputted ' + userInput;
});

/*get the minimum value from the user (minRange), submit button for min value input (minButton),
and paragraph that reminds user of their input and store them into variables (minCheck).
*/
var minRange = document.getElementById("minRange");
var minButton = document.getElementById("minButton");
var minCheck = document.getElementById("minCheck");


/*get the maximum value from the user (maxRange), submit button for max value input (maxButton),
and paragraph that reminds user of their input and store them into variables (maxCheck).
*/
var maxRange = document.getElementById("maxRange");
var maxButton = document.getElementById("maxButton");
var maxCheck = document.getElementById("maxCheck");


/*get the amount of numbers to randomly choose from the user (howMany), 
submit button for amount of numbers input (howManyButton),
and paragraph that reminds user of their input and store them into variables (howManyCheck).
*/
var howMany = document.getElementById("howMany");
var howManyButton = document.getElementById("howManyButton");
var howManyCheck = document.getElementById("howManyCheck");

minButton.addEventListener('click', function () {
    var userInput = minRange.value;
    var displayText = minCheck;
    displayText.innerHTML += userInput;
});

maxButton.addEventListener('click', function () {
    var userInput = maxRange.value;
    var displayText = maxCheck;
    displayText.innerHTML += userInput;
});

howManyButton.addEventListener('click', function () {
    var userInput = howMany.value;
    var displayText = howManyCheck;
    displayText.innerHTML += userInput;
});