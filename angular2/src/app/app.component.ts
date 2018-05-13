import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationStart, NavigationEnd } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  constructor (
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService
  ) { }

  ngOnInit() {
    console.log('app init........................................................');
    this.httpService.get('/api/testGet', {a:1}).subscribe({
      next(res) {
        console.log('x------------------', res); 
      },
      error(err) {
        console.log('err------------------', err);
      }
    });

    const params = {
      "code": 1
    }
    this.httpService.post('/multicard/getLucyList.htm;params1=value1;params2=value2', params).subscribe(
      response => {
        console.log('post *****************', response)
      },
      error => {
        console.log('post %%%%%%%%%%%%%%%%%', error);
      }
    );
    //router
    this.router.events.subscribe( (event) => {
      if (event instanceof NavigationStart) {
        console.log('router change start===========', event);
        return;
      }
      if (event instanceof NavigationEnd) {
        console.log('router change end ============', event)
        return;
      }
    });
  }
}
