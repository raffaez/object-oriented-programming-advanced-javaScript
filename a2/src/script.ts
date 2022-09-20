import { Account } from "./Account";

const acc = new Account('Deolane Bezerra');

console.log(acc.accNumber);
acc.deposit(5000);
acc.withdraw(750);
acc.info();