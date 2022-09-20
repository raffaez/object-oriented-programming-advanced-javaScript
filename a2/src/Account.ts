export class Account{
    public holder: string;
    public accNumber: number;
    private balance: number = 0;

    constructor(holder: string){
        this.holder = holder;
        this.accNumber = Math.random()*(99999-10000)+10000;
    }

    public deposit(value: number){
        this.balance+=value;
        console.log(`Successful deposit. Current balance: $${this.balance}`);
    }

    public withdraw(value: number){
        if(this.balance>=value){
            console.log(`Successful withdrawal. Current balance: $${this.balance}`);
        }else{
            console.log(`Insufficient funds.`);
        }
    }

    public checkBalance(value: number){
        console.log(`Current balance: $${this.balance}`);
    }
}