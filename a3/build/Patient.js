"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Patient = void 0;
var Patient = /** @class */ (function () {
    function Patient(name, birthday) {
        this.name = name;
        this.birthday = birthday;
    }
    Patient.prototype.setUpAppointment = function (appointmentDate, appointmentType, doctor) {
        this.appointmentDate = appointmentDate;
        this.appointmentType = appointmentType;
        this.doctor = doctor;
        var date = "".concat(this.appointmentDate.getUTCDate(), "/").concat(this.appointmentDate.getUTCMonth(), "/").concat(this.appointmentDate.getUTCFullYear());
        console.log("Successfully set up a ".concat(this.appointmentType, " appointment for ").concat(this.name, " on ").concat(date, " with Dr. ").concat(this.doctor));
    };
    Patient.prototype.attendAppointment = function () {
        console.log("".concat(this.name, " attended their appointment with Dr. ").concat(this.doctor));
    };
    Patient.prototype.cancelAppointment = function () {
        var date = "".concat(this.appointmentDate.getUTCDate(), "/").concat(this.appointmentDate.getUTCMonth(), "/").concat(this.appointmentDate.getUTCFullYear());
        console.log("".concat(this.name, " cancelled their appointment with Dr. ").concat(this.doctor, " on ").concat(date));
        this.doctor = '';
        this.appointmentDate = null;
    };
    return Patient;
}());
exports.Patient = Patient;
