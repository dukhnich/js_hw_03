//1
let numAround10 = prompt("Введите число", "10")
if (numAround10 === null) {
}
else if (isNaN(numAround10)) {
    alert("This is not a number")
}
else {
    numAround10 = Number(numAround10)
    alert (10 === numAround10  ? "Равно" : (numAround10 > 10 ? "Больше": "Меньше"))
}

//2: ?
let age = prompt("How old are you?","17");
let msg = age === null ? 0 : isNaN(age) ? alert("This is not a number") :
    age < 18 ? alert("You are not of legal age") : alert("You are of legal age");

//2: if
let age = prompt("How old are you?","17");
if (age === null) {
}
else if (isNaN(age)) {
    alert("This is not a number")
}
else if (age < 18) {
    alert("You are not of legal age")
}
else {
    alert("You are of legal age")
};

//3
let a, b, c, max, msg;
if (isNaN(a = +prompt("First number", "1"))) {
    alert("This is not a number")
}
else if (isNaN(b = +prompt("Second number", "2"))) {
    alert("This is not a number")
}

else if (isNaN(c = +prompt("Third number", "3"))) {
    alert("This is not a number")
}
else {
    max = a > b ? ((msg = "The first number "), a) :
        a === b ? ((msg = "The first number and the second number "), a) : ((msg = "The second number "), b);
    max = max > c ? ((msg += "is/are the biggest"), max):
    max === c ? ((msg += "and the third number are the biggest"), max) : ((msg = "The third number is the biggest"), c);
    alert (msg)
}

//4
const credentials = { //верные логин и пароль
    login: 'test',
    password: 'password',
};
let user = {}; //объект для конкретного юзера
if ((user.login = prompt('Введите имя пользователя:', '')) !== credentials.login) {
    alert("Логин неверен");
}
else if ((user.password = prompt('Введите пароль:', '')) !== credentials.password){
    alert("Пароль неверен");
}
else {
    alert("Вы успешно вошли в систему");
}

//5
let user = {login: 'test',
    password: 'password',}; //объект для конкретного юзера
let newPassword;
if (prompt('Введите старый пароль:', '') !== user.password) {
    alert("Пароль неверен");
}
else if (newPassword === null || newPassword === ''){
    alert("Пароль пустой");
}
else if ((newPassword = prompt('Введите новый пароль:', '')) === user.password){
    alert("Пароли совпадают");
}
else {
    user.password = newPassword;
    alert("Вы успешно сменили пароль");
}

//6
let rateEur;
let rateUsd;
let rateUser;
let moneyUser;
let saleCurrency = confirm("Вы будете продавать валюту?") ?
    1 && (rateEur = 29.61) && (rateUsd = 27.68) : 0 && (rateEur = 30.52) && (rateUsd = 28.33)
let userCurrency = prompt("Выберите валюту: usd или eur", "").toLowerCase()
switch (userCurrency)
{
    case "usd": rateUser = rateUsd;
        break;
    case "eur": rateUser = rateEur;
        break;
    default: alert("Некорректная валюта");
}
if (rateUser) {
    if (saleCurrency) {
        moneyUser = +prompt(`Сколько ${userCurrency} будете менять?`);
        if (moneyUser > -1) {
            alert(`За ${moneyUser} ${userCurrency} вы получите ${Math.floor((moneyUser * rateUser) * 100) / 100} грн`);
        } else {
            alert("Некорректная сумма")
        }
    } else {
        moneyUser = +prompt("Сколько гривен будете менять?");
        if (moneyUser > -1) {
            alert(`За ${moneyUser} грн вы получите ${Math.floor(moneyUser / rateUser * 100) / 100} ${userCurrency}`);
        } else {
            alert("Некорректная сумма")
        }
    }
    rateUser = 0;
}

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

//***2
const turnsVariant = ["камень", "ножницы", "бумага"]
let userTurn = prompt ("Камень, ножницы, бумага?","").toLowerCase()
let botTurn = Math.floor(Math.random()*3)
if (turnsVariant.indexOf(userTurn)>-1){
    if (turnsVariant.indexOf(userTurn) === botTurn){
        alert("Ничья.")
    }
    else {
        if ((turnsVariant.indexOf(userTurn) === 0 && botTurn === 1) ||
            (turnsVariant.indexOf(userTurn) === 1 && botTurn === 2) ||
            (turnsVariant.indexOf(userTurn) === 2 && botTurn === 0)){
            alert("Вы победили!")
        }
        else {
            alert("Вы проиграли...")
        }
    }
}
else {
    alert("Не знаю такого жеста...")
}

//***3
const turnsVariant = ["камень", "ножницы", "бумага"];
let userTurn;
let botTurn;
((turnsVariant).indexOf(userTurn = prompt ("Камень, ножницы, бумага?","").toLowerCase())>-1) &&
( //if correct user variant
    ( //if user and bot choose the same
        turnsVariant.indexOf(userTurn) === (botTurn = Math.floor(Math.random()*3))
        &&
        !alert("Ничья.")
    )
    || ( //else
        ( //if user win
            (
                ((turnsVariant.indexOf(userTurn) === 0 && botTurn === 1) ||
                    (turnsVariant.indexOf(userTurn) === 1 && botTurn === 2) ||
                    (turnsVariant.indexOf(userTurn) === 2 && botTurn === 0))
            ) &&
            !alert("Вы победили!")
        )
        || //else
        !alert("Вы проиграли...")
    )
)
|| ( //else, if incorrect user variant
    alert("Не знаю такого жеста...")
)
