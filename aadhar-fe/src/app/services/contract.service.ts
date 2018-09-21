import { Injectable } from '@angular/core';
import * as Web3 from 'web3';
import *  as secrets from '../../../../secrets';
import * as HDWalletProvider from 'truffle-hdwallet-provider';

declare let require: any;

let BallotFactory = require('../../../../build/Ballot.json');

@Injectable({
  providedIn: 'root'
})
export class ContractService {
  private provider: null;
  private instance;

  constructor() { 
    this.provider = new HDWalletProvider(
      secrets.accountMnemonic,
      secrets.rinkebyNode
    );
  
    let web3;
    web3 = new Web3(this.provider);
    
    this.instance = new web3.eth.Contract(
      JSON.parse(BallotFactory.interface),
      secrets.deployedTo
    );
  }


}
