import {RESPONSE} from '@nguniversal/express-engine';
import {Inject, Injectable, Optional} from '@angular/core';

@Injectable()
export class NotFoundService {

    constructor(@Optional() @Inject(RESPONSE) private _response: any) {}

    public setStatus(_code: number, _message: string): void {
        if (this._response) {
            this._response.statusCode = _code;
            this._response.statusMessage = _message;
        }
    }
}
