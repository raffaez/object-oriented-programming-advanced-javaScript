export class Patient{
    public name: string;
    public birthday: Date;
    public appointmentDate: Date;
    public appointmentType: string;
    public doctor: string;

    constructor(name: string, birthday: Date){
        this.name = name;
        this.birthday = birthday;
    }
    
    public setUpAppointment(appointmentDate: Date, appointmentType, doctor: string){
        this.appointmentDate = appointmentDate;
        this.appointmentType = appointmentType;
        this.doctor = doctor;
        const date = `${this.appointmentDate.getUTCDate()}/${this.appointmentDate.getUTCMonth()}/${this.appointmentDate.getUTCFullYear()}`;
        console.log(`Successfully set up a ${this.appointmentType} appointment for ${this.name} on ${date} with Dr. ${this.doctor}`);
    }

    public attendAppointment(){
        console.log(`${this.name} attended their appointment with Dr. ${this.doctor}`);
    }

    public cancelAppointment(){
        const date = `${this.appointmentDate.getUTCDate()}/${this.appointmentDate.getUTCMonth()}/${this.appointmentDate.getUTCFullYear()}`;
        console.log(`${this.name} cancelled their appointment with Dr. ${this.doctor} on ${date}`);
        this.doctor = '';
        this.appointmentDate = null;
    }
}