import { EthService } from './ethereum/eth.service';
// import { ContractService } from './services/contract.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aadhar-fe';

  constructor(private ethSer: EthService) {
    console.log(this.ethSer.getAccounts());
  }
}
