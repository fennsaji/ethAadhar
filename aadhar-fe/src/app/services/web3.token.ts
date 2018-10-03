import { InjectionToken } from '@angular/core';
import Web3 from 'web3';

declare let window: any;
declare let web3: any;

let web3Provider: any;

if (typeof window.web3 !== 'undefined') {
  web3Provider = window.web3.currentProvider;
} else {
  web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
}

export const WEB3 = new InjectionToken<Web3>('web3', {
  providedIn: 'root',
  factory: () => new Web3(web3Provider)
});