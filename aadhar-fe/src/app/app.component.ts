import { ContractService } from './services/contract.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aadhar-fe';

  constructor(private conSer: ContractService) {}
}
