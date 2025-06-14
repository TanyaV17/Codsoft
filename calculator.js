function appendValue(value) {
    document.getElementById("input").value += value;

}

function clearDisplay() {
    document.getElementById("input").value = "";

}

function deleteLast() {
    let inputField = document.getElementById("input");
    inputField.value = inputField.value.slice(0, -1);

}

function calculate() {
    try {
        let expression = document.getElementById("input").value;
        let result = math.evaluate(expression);
        document.getElementById("input").value = result;
    }
    catch {
        document.getElementById("input").value = "Error";

    }
}