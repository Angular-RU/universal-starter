import { ICustomControl } from '@shared/models/form.model';
import { Validators } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable()
export class FormService {
  private _isArray(subject: any[] | any): boolean {
    return typeof subject === 'object' && subject.constructor === Array;
  }

  public configureControls(controls: ICustomControl[], prefix?: string): any[] {
    const group: any = {};
    if (this._isArray(controls)) {
      controls.forEach((control: ICustomControl) => {
        control.label = control.label ? control.label : `${prefix}${control.id}.label`;
        control.type = control.type ? control.type : `${prefix}${control.id}`;
        group[control.id] = this.configureControl(control);
      });
    }
    return group;
  }

  public configureControl(control: ICustomControl): any[] {

    // First of all we add initial value. Mock 'null' value if haven't stored value
    const output: any[] = [control.value ? control.value : null],
      // Initialize empty validators array.
      validators: any[] = [];

    if (control.validators) {
      if (this._isArray(control.validators)) {
        control.validators.forEach((validatorName) => {
          const validator: any = this._setValidator(control, validatorName);
          if (!validator) {
            validators.push(validators);
          }
        });
      } else if (typeof control.validators === 'string') {
        this._setValidator(control, control.validators as string);
      }
    }
    // Add an array of validators to the end of the control array.
    output.push(validators);
    return output;
  }

  private _setValidator(input: ICustomControl, key: string) {
    // Check if validator should accept parameters.
    const isValidatorTakesValue: boolean =
      key === 'min' ||
      key === 'max' ||
      key === 'minLength' ||
      key === 'maxLength' ||
      key === 'pattern';

    if (isValidatorTakesValue) {
      if (!input[key]) { // Check if input value exist to each validator.
        this._warning(key);
        return true;
      }
    } else {
      return Validators[key]; // If validator shouldn't accept any parameters.
    }
    return Validators[key](input[key]);
  }

  private _warning(key: string) {
    // This is just a warning method.
    let prefix: string = '';
    switch (key) {
      case 'min': {
        prefix = 'Min length number';
        break;
      }
      case 'max': {
        prefix = 'Max number';
        break;
      }
      case 'minLength': {
        prefix = 'Min length number';
        break;
      }
      case 'maxLength': {
        prefix = 'Max length number';
        break;
      }
      case 'pattern': {
        prefix = 'Pattern string';
        break;
      }
      default: {
        prefix = 'Some value';
        break;
      }
    }
    console.warn(
      `'${prefix}' doesn't exist in control configuration. Please, check '${key}' configuration.`
    );
  }
}
