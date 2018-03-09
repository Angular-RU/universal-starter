
import { Inject, Injectable } from '@angular/core';
import { REQUEST } from '@nguniversal/express-engine';

@Injectable()
export class UniversalStorage implements Storage {

    [index: number]: string;
    [key: string]: any;
    length: number;
    cookies: any;

    constructor( @Inject(REQUEST) private request: any) {
        if (request === null) {
            this.cookies = [];
            return;
        }
        this.cookies = request.cookies;
    }

    clear(): void {
        this.cookies = [];
    }

    getItem(key: string): string {
        const result = this.cookies[key];

        return result;
    }

    key(index: number): string {
        const result = this.cookies.propertyIsEnumerable[index];

        return result;
    }

    removeItem(key: string): void {
        this.cookies[key] = undefined;
    }

    setItem(key: string, data: string): void {
        this.cookies[key] = data;
    }

}
