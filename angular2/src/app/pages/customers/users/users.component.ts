import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HttpService } from '../../../http.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) { }

  ngOnInit() {

    const code = this.activatedRoute.snapshot.queryParams.code
    const params = {
      code: code
    }
    this.httpService.post('/H5/checkLogin.htm', params).subscribe(
      response => {
        console.log('post *****************', response);
      },
      error => {
        console.log('post %%%%%%%%%%%%%%%%%', error);
      }
    );
    this.httpService.post('/H5/checkBundling.htm', params).subscribe(
      response => {
        console.log('post params success-----', response)
      },
      error => {
        console.log('post params error-----', error)
      }
    );
  }

}
