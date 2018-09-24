import { EthcontractService } from './services/ethcontract.service';
// import { EthService } from './ethereum/eth.service';
// import { ContractService } from './services/contract.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aadhar-fe';

  constructor(private ethSer: EthcontractService) {
    this.init();
  }

  async init() {
    console.log(await this.ethSer.getAccountInfo());
  }
}
