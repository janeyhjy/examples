import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-merchants',
  templateUrl: './merchants.component.html',
  styleUrls: ['./merchants.component.less']
})
export class MerchantsComponent implements OnInit {
  private modalRef: BsModalRef;
  constructor(
    private activatedRoute: ActivatedRoute,
    private modalService: BsModalService
  ) { }

  ngOnInit() {
    // this.activatedRoute.snapshot.params; // router params
    // this.activatedRoute.snapshot.queryParams; //url params
  }

  openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template);
  }

}