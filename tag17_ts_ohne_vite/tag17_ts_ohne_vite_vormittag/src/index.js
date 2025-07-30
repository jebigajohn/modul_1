"use strict";
// Primitive Types in der Programmierersprache
let firstName = "Joe";
let age = 22;
let isOnline = true;
function sayHello(name) {
    return "Hello" + name;
}
console.log(sayHello("andre"));
console.log(sayHello("Joe"));
function logMessage(message) {
    console.log("Log", message);
}
logMessage("Heute ist ein schöner Tag");
function calcArea(widht, height) {
    return widht * height;
}
console.log(calcArea(100, 20));
