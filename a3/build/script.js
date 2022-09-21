"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Patient_1 = require("./Patient");
var patient = new Patient_1.Patient('Hannah Montana', new Date('1992-01-01'));
patient.setUpAppointment(new Date('2022-10-01'), 'check up', 'Deolane Bezerra');
patient.cancelAppointment();
patient.setUpAppointment(new Date('2022-10-01'), 'check up', 'Deolane Bezerra');
patient.attendAppointment();
