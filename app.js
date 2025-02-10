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
var minButton = document.getElementById("minButton");
var minRange = document.getElementById("minRange");
//holds user input
var minHold = 0;
var minCheck = document.getElementById("minCheck");
var minHasInput = false;

/*get the maximum value from the user (maxRange), submit button for max value input (maxButton),
and paragraph that reminds user of their input and store them into variables (maxCheck).
*/
var maxButton = document.getElementById("maxButton");
var maxRange = document.getElementById("maxRange");
//holds user input
var maxHold = 0;
var maxCheck = document.getElementById("maxCheck");
var maxHasInput = false;


/*get the amount of numbers to randomly choose from the user (howMany), 
submit button for amount of numbers input (howManyButton),
and paragraph that reminds user of their input and store them into variables (howManyCheck).
*/
var howManyButton = document.getElementById("howManyButton");
var howMany = document.getElementById("howMany");
//holds user input
var howManyHold = 0;
var howManyCheck = document.getElementById("howManyCheck");
var howManyHasInput = false;

//numbers randomly generated based on user input range.
const chosenNumbers = document.getElementById("chosenNumbers");

//put all the above variables into an array of objects.
//default display is for setting the display back to default when the user deletes or inputs another value
const elements = [
    { button: minButton, input: minRange, hold: minHold, display: minCheck, defaultDisplay: "Min Number: &nbsp;", hasInput: minHasInput },
    { button: maxButton, input: maxRange, hold: maxHold, display: maxCheck, defaultDisplay: "Max Number: &nbsp;", hasInput: maxHasInput },
    { button: howManyButton, input: howMany, hold: howManyHold, display: howManyCheck, defaultDisplay: "How Many Numbers: &nbsp;", hasInput: howManyHasInput }
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
        chosenNumbers.innerHTML = '';

        console.log(element);

        // Convert the input value to a number
        element.hold = Number(element.input.value);
        console.log(element.hold);

        //make sure user only inputs integers
        if (Number.isInteger(element.hold)) {
            console.log("it is int");

            //if user enters the min number
            if (element.button == minButton) {
                console.log("hi");
                //if user has already entered the max number, check to make sure min number is not bigger than max number
                if (elements[1].hasInput == true) {
                    
                    if(element.hold > elements[1].hold) {
                        element.hold = 0;
                        element.hasInput = false;
                        element.display.innerHTML += " min number needs to be smaller than max number";
                        
                    } else {
                        element.hasInput = true;
                        element.display.innerHTML += element.input.value;
                    }
                } else {
                    element.hasInput = true;
                    element.display.innerHTML += element.input.value;

                }

                
            }

            //if user enters max number
            else if(element.button == maxButton) {
                //if user has already entered the min number, check to make sure it is not bigger than max number
                if(elements[0].hasInput == true) {

                    if(elements[0].hold > element.hold) {
                        element.hold = 0;
                        element.hasInput = false;
                        element.display.innerHTML += " max number needs to be bigger than min number";
                    } else {
                        element.hasInput = true;
                        element.display.innerHTML += element.input.value;
                    }
                } else {
                    element.hasInput = true;
                    element.display.innerHTML += element.input.value;
                }

            } 
            else if(element.button == howManyButton) {
                console.log("how many button");
                //this is if user inputs for the how many option
                if((elements[0].hasInput == true) && (elements[1].hasInput == true)) {
                    var range = (elements[1].hold - elements[0].hold) + 1;
                    console.log("range is " + range);

                    if(element.hold > range) {
                        element.hold = 0;
                        element.hasInput = false;
                        element.display.innerHTML += " How many numbers should be smaller than the range";
                    } else {
                        element.hasInput = true;
                        element.display.innerHTML += element.input.value;
                    }
                } else {
                    element.hasInput = true;
                    element.display.innerHTML += element.input.value;
                }
            }
            //if all values are successfully inputted, get random values of the given range of numbers
            if(elements[0].hasInput && elements[1].hasInput && elements[2].hasInput) {
                console.log("they are all here");
                //the full range of numbers from the min number to max number, regardless of what the user put
                //for the "how many" value
                const theFullRange = [];

                for(let i = elements[0].hold; i <= elements[1].hold; i++) {
                    theFullRange.push(i);
                    console.log("added " + i + " to the array list");
                }

                for(let i = 1; i <= elements[2].hold; i++) {
                    const randomIndex = Math.floor(Math.random() * theFullRange.length);
                    const randomNumber = theFullRange.splice(randomIndex, 1)[0];
                    console.log(`Random number #${i} is: ${randomNumber}`);
                    chosenNumbers.innerHTML += randomNumber + "<br>";
                }

            } else {
                console.log("they are not all here");
            }

        } else {
            element.hold = 0;
            element.hasInput = false;
            element.display.innerHTML += " Integers only please";
        }
    });

});


