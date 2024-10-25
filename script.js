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