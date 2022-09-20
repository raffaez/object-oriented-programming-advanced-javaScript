"use strict";
/*
Crie uma classe patinete e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto patinete, defina as instâncias deste objeto e apresente as informações deste objeto no console.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var Scooter_1 = require("./Scooter");
var scooter = new Scooter_1.Scooter('small', 'silver', 'aluminium', 'Samsung', false);
console.clear();
scooter.run();
scooter.brake();
scooter.info();
