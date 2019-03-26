import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const sharedForms: any[] = [
  FormsModule, ReactiveFormsModule
];

@NgModule({
  exports: [
    ...sharedForms
  ]
})
export class SharedFormsModule {}
