import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ExperienciaLaboralPageRoutingModule } from './experiencia-laboral-routing.module';
import { ExperienciaLaboralPage } from './experiencia-laboral.page';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExperienciaLaboralPageRoutingModule,   
    CommonModule,
    FormsModule,
    IonicModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule
  ],
  declarations: [ExperienciaLaboralPage]
})
export class ExperienciaLaboralPageModule {}
