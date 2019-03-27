import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormService } from '@shared/services/form.service';

const sharedForms: any[] = [
  FormsModule, ReactiveFormsModule
];

@NgModule({
  exports: [
    ...sharedForms
  ],
  providers: [
    FormService
  ]
})
export class SharedFormsModule {}
