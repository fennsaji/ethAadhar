import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WEB3 } from './tokens';

declare let require;

const Web3 = require('web3') ;

@NgModule({
  imports: [
    CommonModule
  ],
  providers:[
    // { 
    //   provide: WEB3,
    //   useFactory: () => new Web3(Web3.givenProvider || "ws://localhost:8546")
    // }
  ],
  declarations: []
})
export class EthereumModule { }
