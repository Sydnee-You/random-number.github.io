    var buttontest = document.getElementById('test');
    var buttoning = document.getElementById('btest');

    buttoning.addEventListener("click", buttontesting);

    function buttontesting() {
        buttontest.innerHTML = "don't touch that!";
        console.log('hhhhh');
    }

    document.getElementById('displayButton').addEventListener('click', function() {
        var userInput = document.getElementById('userInput').value;
        var displayText = document.getElementById('displayText');
        displayText.innerHTML = 'You inputted ' + userInput;
    });

    