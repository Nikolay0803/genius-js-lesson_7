// Домашнє завдання
// ----1----
// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома
// методами:
// read() запитує два значення за допомогою prompt і запам’ятовує їх у
// властивостях об’єкта.
// sum() повертає суму цих властивостей.
// mul() повертає результат множення даних властивостей.

function Calculator() {
  this.read = function () {
    this.firstValue = parseFloat(prompt("Введіть перше число", 0));
    this.secondValue = parseFloat(prompt("Введіть друге число", 0));
  };

  this.sum = function () {
    return this.firstValue + this.secondValue;
  };

  this.mul = function () {
    return this.firstValue * this.secondValue;
  };
}

const calculator = new Calculator();
calculator.read();

console.log("Сума: " + calculator.sum());
console.log("Множення: " + calculator.mul());
