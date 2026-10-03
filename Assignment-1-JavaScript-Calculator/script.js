function calculate() {
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var operator = document.getElementById("operator").value;
    var result;

    if (num1 === "" || num2 === "") {
        document.getElementById("result").innerHTML = "Please enter both numbers";
        return;
    }

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operator) {
        case "+":
            result = num1 + num2;
            break;

        case "-":
            result = num1 - num2;
            break;

        case "*":
            result = num1 * num2;
            break;

        case "/":
            if (num2 === 0) {
                result = "Cannot divide by zero";
            } else {
                result = num1 / num2;
            }
            break;

        default:
            result = "Invalid operation";
    }

    document.getElementById("result").innerHTML = result;
}
