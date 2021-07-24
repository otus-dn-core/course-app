import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateRangeComponent } from './date-range.component';

import { ReactiveFormsModule, FormGroup, FormBuilder } from '@angular/forms';



@NgModule({
  declarations: [
    DateRangeComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormGroup,
    FormBuilder
  ],
  exports: [
    DateRangeComponent
  ]
})
export class DateRangeModule { }
