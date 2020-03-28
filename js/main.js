//1
let numAround10 = +prompt("Введите число", "10")
alert (10 === numAround10  ? "Равно" : (numAround10 > 10 ? "Больше": "Меньше"))

//2
let a, b, c
a = +prompt("First number", "1")
b = +prompt("Second number", "2")
c = +prompt("Third number", "3")
alert (a > b  ? (a > c ? "First number is the biggest" : "Third number is the biggest") :
    (b > c ? "Second number is the biggest": "Third number is the biggest"))

//***1
let firstNumber, secondNumber, multiplyResult
if (isNaN(firstNumber = +prompt("First number", "1"))) {
    alert("This is not a number")
}
else if (firstNumber < 1 || firstNumber > 10) {
    alert("This number is not in the range of multiplication table")
}
else if (isNaN(secondNumber = +prompt("Second number", "2"))) {
    alert("This is not a number")
}
else if (secondNumber < 1 || secondNumber > 10) {
    alert("This number is not in the range of multiplication table")
}
else if (isNaN(multiplyUserResult = +prompt(`How much is ${firstNumber} by ${secondNumber}?`, ""))) {
    alert("This is not a number")
}
else if (multiplyUserResult === firstNumber * secondNumber){
    alert("Correct answer")
}
else {
    alert(`${multiplyUserResult} is an incorrect answer, the correct one is ${firstNumber * secondNumber}`)
}
