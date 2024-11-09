function add(a, b)
{
    if (isNaN(a) || isNaN(b))
        return "ERROR NaN";

    return a + b;
}

function subtract(a, b)
{
    if (isNaN(a) || isNaN(b))
        return "ERROR NaN";

    return a - b;
}

function multiply(a, b)
{
    if (isNaN(a) || isNaN(b))
        return "ERROR NaN";

    return a * b;
}

function divide(a, b)
{
    if (isNaN(a) || isNaN(b))
        return "ERROR NaN";
    if (b === 0)
        return "ERROR divide-by-zero";

    return a / b;
}

let operand1 = 0;
let operand2 = 0;
let solution = 0;
let operator = "";

function operate(operand1, operand2, operator)
{
    switch (operator)
    {
        case "+":
            return add(operand1, operand2);

        case "-":
            return subtract(operand1, operand2);

        case "*":
            return multiply(operand1, operand2);

        case "/":
            return divide(operand1, operand2);
    }

}

const operand1Display = document.querySelector(".operand1-display");
const operand2Display = document.querySelector(".operand2-display");
const operatorDisplay = document.querySelector(".operator-display");
const solutionDisplay = document.querySelector(".solution");

operand1Display.textContent = "";
operand2Display.textContent = "";
operatorDisplay.textContent = "";

const operand1ButtonContainer = document.querySelector(".operand1-input");
const operand1Buttons = operand1ButtonContainer.querySelectorAll("button");
const operand2ButtonContainer = document.querySelector(".operand2-input");
const operand2Buttons = operand2ButtonContainer.querySelectorAll("button");
const operatorButtonContainer = document.querySelector(".operator-input");
const operatorButtons = operatorButtonContainer.querySelectorAll("button");

operand1Buttons.forEach((button) =>
{
    button.addEventListener("click", () =>
    {
        operand1Display.textContent = button.textContent;
    })
});
operand2Buttons.forEach((button) =>
{
    button.addEventListener("click", () =>
    {
        operand2Display.textContent = button.textContent;
    })
});
operatorButtons.forEach((button) =>
{
    button.addEventListener("click", () =>
    {
        operatorDisplay.textContent = button.textContent;
    })
});

const operateButton = document.querySelector(".enter-button");

operateButton.addEventListener("click", () =>
{
    if (Number.isNaN(operand1Display.textContent) || Number.isNaN(operand2Display.textContent)
        || operand1Display.textContent === "" || operand2Display.textContent === "" || operatorDisplay.textContent === "")
    {
        alert("Fill all fields!")
        return;
    }

    const operand1 = Number(operand1Display.textContent);
    const operand2 = Number(operand2Display.textContent);

    let solution = operate(operand1, operand2, operatorDisplay.textContent);
    solutionDisplay.textContent = solution;


});