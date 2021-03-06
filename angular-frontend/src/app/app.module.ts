import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TutorialDetailsComponent } from './components/tutorial/tutorial-details/tutorial-details.component';
import { CreateTutorialComponent } from './components/tutorial/create-tutorial/create-tutorial.component';
import { UpdateTutorialComponent } from './components/tutorial/update-tutorial/update-tutorial.component';
import { TutorialListComponent } from './components/tutorial/tutorial-list/tutorial-list.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PatientListComponent } from './components/patient/patient-list/patient-list.component';
import { CreatePatientComponent } from './components/patient/create-patient/create-patient.component';
import { PatientDetailsComponent } from './components/patient/patient-details/patient-details.component';
import { UpdatePatientComponent } from './components/patient/update-patient/update-patient.component';
import { HospitalListComponent } from './components/hospital/hospital-list/hospital-list.component';
import { CreateHospitalComponent } from './components/hospital/create-hospital/create-hospital.component';
import { HospitalDetailsComponent } from './components/hospital/hospital-details/hospital-details.component';
import { UpdateHospitalComponent } from './components/hospital/update-hospital/update-hospital.component';
import { DoctorListComponent } from './components/doctor/doctor-list/doctor-list.component';
import { CreateDoctorComponent } from './components/doctor/create-doctor/create-doctor.component';
import { DoctorDetailsComponent } from './components/doctor/doctor-details/doctor-details.component';
import { UpdateDoctorComponent } from './components/doctor/update-doctor/update-doctor.component';
import { PrescriptionListComponent } from './components/prescription/prescription-list/prescription-list.component';
import { PrescriptionDetailsComponent } from './components/prescription/prescription-details/prescription-details.component';
import { CreatePrescriptionComponent } from './components/prescription/create-prescription/create-prescription.component';
import { UpdatePrescriptionComponent } from './components/prescription/update-prescription/update-prescription.component';
import { InvoiceListComponent } from './components/Invoice/invoice-list/invoice-list.component';
import { MedicineListComponent } from './components/Medicine/medicine-list/medicine-list.component';
import { MedicineAddComponent } from './components/Medicine/medicine-add/medicine-add.component';
import { MedicineDetailsComponent } from './components/Medicine/medicine-details/medicine-details.component';
import { MedicineEditComponent } from './components/Medicine/medicine-edit/medicine-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    TutorialDetailsComponent,
    CreateTutorialComponent,
    UpdateTutorialComponent,
    TutorialListComponent,
    PatientListComponent,
    CreatePatientComponent,
    PatientDetailsComponent,
    UpdatePatientComponent,
    HospitalListComponent,
    CreateHospitalComponent,
    HospitalDetailsComponent,
    UpdateHospitalComponent,
    DoctorListComponent,
    CreateDoctorComponent,
    DoctorDetailsComponent,
    UpdateDoctorComponent,
    PrescriptionListComponent,
    PrescriptionDetailsComponent,
    CreatePrescriptionComponent,
    UpdatePrescriptionComponent,
    InvoiceListComponent,
    MedicineListComponent,
    MedicineAddComponent,
    MedicineDetailsComponent,
    MedicineEditComponent
  ],
    imports: [
        RouterModule,
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
