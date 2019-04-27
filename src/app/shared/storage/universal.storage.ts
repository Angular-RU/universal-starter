import { Injectable } from '@angular/core';
import { CookieService } from '@gorniv/ngx-universal';

@Injectable()
export class UniversalStorage implements Storage {
  [index: number]: string;
  [key: string]: any;
  length: number;
  cookies: any;

  constructor(private cookieService: CookieService) {}

  public clear(): void {
    this.cookieService.removeAll();
  }

  public getAll(): Object {
    return this.cookieService.getAll();
  }

  public getItem(key: string): string {
    return this.cookieService.get(key);
  }

  public key(index: number): string {
    return this.cookieService.getAll().propertyIsEnumerable[index];
  }

  public removeItem(key: string): void {
    this.cookieService.remove(key);
  }

  public setItem(key: string, data: string): void {
    this.cookieService.put(key, data);
  }
}
