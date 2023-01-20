const formEl = document.querySelector("form");
const errorEl = document.getElementById("error");
const emailEl = document.getElementById("email");

const emailReg = /.+\@\w+\.\w+/;

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    let resultTest = emailReg.test(emailEl.value);

    if(resultTest) {
        alert('вы успешно зарегистрировались');
        errorEl.style.display = "none";
        emailEl.style.borderColor = "#ccc";
    }else{
        errorEl.style.display = "block";
        errorEl.innerText = "Не корректный формат почты";
        errorEl.style.border = '1px solid red';

    }
})




























// const userAge = 22;
// let copyUserAge = userAge;
// copyUserAge = 30;
// console.log(copyUserAge, userAge);

// const userData = {
//     userName: "Tima",
//     userAge: "22",
// };

// const shallowCopy = userData;
// shallowCopy.userAge = 122;
// console.log(shallowCopy, userData);

// const trueCopy = {
//     ...userData,
// };

// trueCopy.userAge = 1200;
// console.log(shallowCopy, userData, trueCopy);

// const person = {
//     age: 22,
//     name: "User",
// };

// const JSONStr = JSON.stringify(person);
// console.log(person, JSONStr);

// const parsedData = JSON.parse(JSONStr);
// console.log(parsedData);
// // рекурсия
// const factorial = (number) => {
//     if (number === 1) {
//         return 1 ;
//     }
//     return number * factorial(number - 1);
// };

// const result = factorial (5);
// console.log(result);




