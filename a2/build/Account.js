"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account(holder) {
        this.balance = 0;
        this.holder = holder;
        this.accNumber = Number((Math.random() * (99999 - 10000) + 10000).toFixed(0));
    }
    Account.prototype.deposit = function (value) {
        this.balance += value;
        console.log("Successful deposit. Current balance: $".concat(this.balance));
    };
    Account.prototype.withdraw = function (value) {
        if (this.balance >= value) {
            this.balance -= value;
            console.log("Successful withdrawal. Current balance: $".concat(this.balance));
        }
        else {
            console.log("Insufficient funds.");
        }
    };
    Account.prototype.checkBalance = function (value) {
        console.log("Current balance: $".concat(this.balance));
    };
    Account.prototype.info = function () {
        console.log("\n".concat(this.holder, "'s account"));
        console.log("Account ".concat(this.accNumber));
        console.log("Balance: $".concat(this.balance));
    };
    return Account;
}());
exports.Account = Account;
