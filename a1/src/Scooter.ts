export class Scooter{
    public size: string;
    public color: string;
    public material: string;
    public brand: string;
    public isElectric: boolean;
    
    constructor(size: string, color: string, material: string, brand: string, isElectric: boolean){
        this.size = size;
        this.color = color;
        this.material = material;
        this.brand = brand;
        this.isElectric = isElectric;
    }

    public run(){
        console.log(`The scooter has started running`);
    }

    public brake(){
        console.log(`The scooter is braking`);
    }

    public info(){
        console.log(`\nSize: ${this.size}`);
        console.log(`Color: ${this.color}`);
        console.log(`Material: ${this.material}`);
        console.log(`Brand: ${this.brand}`);
        console.log(`This scooter ${this.isElectric?'is':`isn't`} electric`);
    }

}