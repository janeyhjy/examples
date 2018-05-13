import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-merchants',
  templateUrl: './merchants.component.html',
  styleUrls: ['./merchants.component.less']
})
export class MerchantsComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    // this.activatedRoute.snapshot.params; // router params
    // this.activatedRoute.snapshot.queryParams; //url params
  }

}
