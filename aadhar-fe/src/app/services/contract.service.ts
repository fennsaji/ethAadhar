import { Injectable } from '@angular/core';
import Web3 from 'web3';

declare let require: any;
declare let window: any;

let AadharFactory = require('../../../../build/EthAadhar.json');


@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private provider;
  private instance;
  private web3;

  constructor() { 
    this.init();
  }

  async init() {
    // this.web3 = new Web3(window.web3.currentProvider);
    
    this.instance = new this.web3.eth.Contract(
      JSON.parse(AadharFactory.interface),
      '0x22d1C08bE47e402f92Fa4b054065073c41EDE41A'
    );

    const manager = await this.instance.methods.chairperson();
    console.log(manager);
  }
}
