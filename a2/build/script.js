"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Account_1 = require("./Account");
var acc = new Account_1.Account('Deolane Bezerra');
console.log(acc.accNumber);
acc.deposit(5000);
acc.withdraw(750);
acc.info();
