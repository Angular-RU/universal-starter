import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICustomControl } from '@shared/models/form.model';
import { FormService } from '@shared/services/form.service';
import { AuthService } from '@shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private _prefix: string = 'auth.login.form.';
  button: string = 'buttons.login';
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
      id: 'password',
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
              private _auth: AuthService,
              private _formService: FormService) {
  }

  ngOnInit() {
    this.form = this._formBuilder.group(this._formService.configureControls(this.controls, this._prefix));
  }

  onSubmit() {
    this._auth.logIn(this.form.value);
  }
}
