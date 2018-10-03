import { WEB3 } from './web3.token';
import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import * as Web3 from 'web3';
import * as TruffleContract from 'truffle-contract';

declare let require: any;
declare let window: any;
declare let web3: any;

let tokenAbi = require('../../../../build/EthAadhar.json');
@Injectable({
  providedIn: 'root'
})
export class EthcontractService {
  private web3Provider: any;
  private contracts: {};
  private aadharinfo;
  private address: Array<any>;
  private contractInstance: any;

  constructor(private http: HttpClient, @Inject(WEB3) private web3: Web3) {
    // if (typeof window.web3 !== 'undefined') {
    //   this.web3Provider = window.web3.currentProvider;
    // } else {
    //   this.web3Provider = new Web3.providers.HttpProvider('http://localhost:7545');
    // }
    window.web3 = this.web3;

    this.getChairman();
  }


  async getChairman() {

    this.address = await this.web3.eth.getAccounts();

    // To access contract
    this.contractInstance = new this.web3.eth.Contract(
      JSON.parse(tokenAbi.interface),
      '0x22d1C08bE47e402f92Fa4b054065073c41EDE41A',
      {
        from: this.address[0],
        gasPrice: '20000000000'
      }
    );

    // Calling view Methods
    // let info = await this.contractInstance.methods.getInfo(0).call();  
    // console.log('infouser', info)
  }

  saveintermediate(name: string, id: number, addr: string): void {
    this.aadharinfo = {name, id, addr, face: ['test']}
  }

  getFaceData(facePic: string): void {
    this.http.post<any>('http://localhost:8080/fetchFaceId', {facePic})
      .subscribe((res: any) => {
        this.aadharinfo.faceId.push(res.faceId);
        this.createAadhar();
      });
  }

  async createAadhar() {
    console.log('aadh', this.aadharinfo);
    const {name, id, addr, face} = this.aadharinfo;
    await this.contractInstance.methods.createAadhar(name,id,addr, face)
      .send()
  }
  
  // transferEther( _transferFrom, _transferTo, _amount, _remarks){
  //   let that = this;
  //   return new Promise((resolve, reject) => {
  //     let paymentContract = TruffleContract(tokenAbi);
      
  //     paymentContract.deployed().then(function (instance) {
  //       return instance.transferFund(
  //         _transferTo,
  //         {
  //           from: _transferFrom,
  //           value: web3.toWei(_amount, "ether")
  //         });
  //     }).then(function (status) {
  //       if (status) {
  //         return resolve({ status: true });
  //       }
  //     }).catch(function (error) {
  //       console.log(error);
  //       return reject("Error in transferEther service call");
  //     });
  //   });
  // }

}