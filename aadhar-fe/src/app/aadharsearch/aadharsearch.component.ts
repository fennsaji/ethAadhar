import { Component, OnInit } from '@angular/core';
import { EthcontractService } from '../services/ethcontract.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aadharsearch',
  templateUrl: './aadharsearch.component.html',
  styleUrls: ['./aadharsearch.component.css']
})
export class AadharsearchComponent implements OnInit {
  searchId: number;

  constructor(private ethSer: EthcontractService, private router: Router) { }

  ngOnInit() {
  }

  async search() {
    this.router.navigate(['search/result', {id: this.searchId}])
  }

}
