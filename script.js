document.addEventListener("DOMContentLoaded", function() {
    let display = document.getElementById("display");

    function addToDisplay(value) {
        if (display !== null) {
            display.value += value;
        }
    }

    function clearLastCharacter() {
        if (display !== null) {
            display.value = display.value.slice(0, -1); // Elimina el último carácter
        }
    }

    function calculate() {
        if (display !== null) {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = "Error";
            }
        }
    }

    const buttons = document.querySelectorAll("button");
    const equalsButton = document.getElementById("equals");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const value = button.getAttribute("data-value");
            if (value) {
                addToDisplay(value);
            } else if (button.classList.contains("operator")) {
                addToDisplay(button.textContent);
            } else if (button.classList.contains("clear")) {
                clearLastCharacter(); 
            }
        });
    });

    equalsButton.addEventListener("click", calculate);

    // Agrega el evento para detectar la tecla "Enter" (código 13)
    document.addEventListener("keydown", function(event) {
        if (event.keyCode === 13) {
            calculate();
        }
    });
});
