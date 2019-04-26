import { Component, OnInit } from '@angular/core';
import { ICustomControl } from '@shared/models/form.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FormService } from '@shared/services/form.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  button: string = 'buttons.registration';
  private _prefix: string = 'auth.registration.form.';
  controls: ICustomControl[] = [
    {
      id: 'email',
      type: 'email',
      validators: ['required', 'email'],
      errors: {
        required: 'required',
        email: 'email'
      }
    },
    {
      id: 'login',
      type: 'text',
      validators: []
    },
    {
      id: 'password',
      type: 'password',
      validators: ['required', 'pattern', 'minLength'],
      minLength: 6,
      pattern: '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})',
      errors: {
        required: 'required',
        pattern: 'pattern',
        minLength: 'minLength'
      }
    },
    {
      id: 'confirm',
      type: 'password',
      validators: ['required', 'pattern', 'minLength'],
      minLength: 6,
      // pattern: '^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})',
      errors: {
        required: 'required',
        pattern: 'pattern',
        minLength: 'minLength'
      }
    }
  ];
  form: FormGroup;

  constructor(private _formBuilder: FormBuilder,
              private _formService: FormService) {
  }

  ngOnInit() {
    this.form = this._formBuilder.group(this._formService.configureControls(this.controls, this._prefix));
  }

  onSubmit() {
    console.log(this.form.value);
  }
}
