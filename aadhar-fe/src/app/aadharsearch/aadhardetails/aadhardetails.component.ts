import { EthcontractService } from './../../services/ethcontract.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-aadhardetails',
  templateUrl: './aadhardetails.component.html',
  styleUrls: ['./aadhardetails.component.css']
})
export class AadhardetailsComponent implements OnInit {
  id: number;
  aadharInfo: any;

  constructor(private route: ActivatedRoute, private ethSer: EthcontractService) { 
    this.route.params.subscribe(async res => {
      this.id = +res.id;
      this.aadharInfo = await this.ethSer.getDetails(this.id);
    })
  }

  ngOnInit() {
  }

}
