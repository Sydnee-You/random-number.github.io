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

//put all the above variables into an array of objects.
//default display is for setting the display back to default when the user deletes or inputs another value
const elements = [
    { button: minButton, input: minRange, display: minCheck, defaultDisplay: "Min Number: &nbsp;" },
    { button: maxButton, input: maxRange, display: maxCheck, defaultDisplay: "Max Number: &nbsp;" },
    { button: howManyButton, input: howMany, display: howManyCheck, defaultDisplay: "How Many Numbers: &nbsp;" }
];

/*loop through each object in elements array to make it such that when you add an input and click on their
respective button, the paragraph below clarifies what you inputted.
*/
elements.forEach(function (element) {
    element.button.addEventListener("click", function () {
        /*reset the display of what the user inputted back to default every time the user changes the value
          otherwise, every user input in the input (minRange,maxRange, howMany) would add onto each previous user
          input, which we don't want.
        */
        element.display.innerHTML = element.defaultDisplay;
        element.display.innerHTML += element.input.value;
    });

});
