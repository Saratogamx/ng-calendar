import { InjectionToken } from '@angular/core';

export let TOASTR_TOKEN = new InjectionToken<any>('toastr');

export interface Toastr {
  success(msg: string, title?: string, options?: any): void;
  info(msg: string, title?: string, options?: any): void;
  warning(msg: string, title?: string, options?: any): void;
  error(msg: string, title?: string, options?: any): void;
}
