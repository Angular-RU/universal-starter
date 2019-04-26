export interface ICustomControl {
  id: string;
  type?: string;
  label?: string;
  value?: string;
  errors?: ICustomErrors;
  pattern?: string;
  minLength?: number;
  validators?: string[];
  /**
   * Available strings for validators
   * 'min'
   | 'max'
   | 'required'
   | 'requiredTrue'
   | 'email'
   | 'minLength'
   | 'maxLength'
   | 'pattern'
   | 'nullValidator'
   | 'compose '
   | 'composeAsync'
   */
}

export interface ICustomErrors {
  min?: string;
  max?: string;
  required?: string;
  requiredTrue?: string;
  email?: string;
  minLength?: string;
  maxLength?: string;
  pattern?: string;
  nullValidator?: string;
  compose?: string;
  composeAsync?: string;
}
