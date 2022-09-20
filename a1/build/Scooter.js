"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scooter = void 0;
var Scooter = /** @class */ (function () {
    function Scooter(size, color, material, brand, isElectric) {
        this.size = size;
        this.color = color;
        this.material = material;
        this.brand = brand;
        this.isElectric = isElectric;
    }
    Scooter.prototype.run = function () {
        console.log("The scooter has started running");
    };
    Scooter.prototype.brake = function () {
        console.log("The scooter is braking");
    };
    Scooter.prototype.info = function () {
        console.log("\nSize: ".concat(this.size));
        console.log("Color: ".concat(this.color));
        console.log("Material: ".concat(this.material));
        console.log("Brand: ".concat(this.brand));
        console.log("This scooter ".concat(this.isElectric ? 'is' : "isn't", " electric"));
    };
    return Scooter;
}());
exports.Scooter = Scooter;
