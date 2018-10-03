import { WEB3 } from './web3.token';
import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import * as Web3 from 'web3';
import { Observable } from 'rxjs';

declare let require: any;
declare let window: any;

let tokenAbi = require('../../../../contract-builder/build/EthAadhar.json');
@Injectable({
  providedIn: 'root'
})
export class EthcontractService {
  private aadharinfo;
  private address: Array<any>;
  private contractInstance: any;

  constructor(private http: HttpClient, @Inject(WEB3) private web3: Web3) {
    window.web3 = this.web3;

    this.getChairman();
  }


  async getChairman() {
    // Fetch acoounts from metamask provider
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


    // Calling public variables
    // let chairman = await this.contractInstance.methods.chairperson().call();
    // console.log({chairman})

    // Calling view Methods which doesnot affect state of contract
    // let info = await this.contractInstance.methods.getInfo(0).call();  
    // console.log('infouser', info)
  }

  saveintermediate(name: string, id: number, addr: string): void {
    this.aadharinfo = {name, id, addr}
  }

  getFaceData(facePic: string): void {
    this.http.post<any>('http://localhost:8080/fetchFaceId', {facePic})
      .subscribe((res: any) => {
        this.aadharinfo.faceId.push(res.faceId);
        this.createAadhar();
      });
  }

  async createAadhar() {
    const {name, id, addr, face} = this.aadharinfo;

    // Send used for anything that changes state of contract
    await this.contractInstance.methods.createAadhar(name,id,addr, face).send()
  }
 
  async getDetails(id: number, face?: string): Promise<boolean> {
    // let faceArr = await this.contractInstance.methods.getFace(id).call();

    // let res = await this.http.post<any>('http://localhost:8080/fetchFaceId', 
    //   {userFace: face, userFaces: faceArr})
    //   .toPromise();
    
    // if (res.match === true) {
    //   let userInfo = await this.contractInstance.methods.getInfo(id).call();
    //   return userInfo;
    // } else {
    //   return false;
    // }
    let userInfo = await this.contractInstance.methods.getInfo(id).call();
    return userInfo;
  }

}