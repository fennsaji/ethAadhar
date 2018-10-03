import { EthcontractService } from './../services/ethcontract.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-aadhar',
  templateUrl: './new-aadhar.component.html',
  styleUrls: ['./new-aadhar.component.css']
})
export class NewAadharComponent implements OnInit {

  constructor(private ethSer: EthcontractService, private route: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const name = form.value.name;
    const userId = form.value.userid;
    const address = form.value.address;
    this.ethSer.saveintermediate(name, userId, address);
    this.route.navigate(['/takepic']);
  }
}
