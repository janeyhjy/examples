import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params, NavigationStart, NavigationEnd } from '@angular/router';
import { HttpParams } from '@angular/common/http';
import { HttpService } from './http.service';
import { api } from './utils/api.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  constructor (
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private httpService: HttpService,
    // private api: Api
  ) { }

  ngOnInit() {
    console.log('enum.....', api);
    console.log('app init........................................................');
    this.httpService.get('/api/testGet', {a:1}).subscribe({
      next(res) {
        console.log('x------------------', res); 
      },
      error(err) {
        console.log('err------------------', err);
      }
    });

    this.httpService.post('/multicard/getLucyList.htm;params1=value1;params2=value2').subscribe(
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

    //test code---------------------------------------------------------------------------------------------
    // set
    // let pets = new Set(["Cat", "Dog", "Hamster"]);
    // pets["species"] = "mammals";
    // console.log('pets===============================', pets);
    // for (let pet in pets) {
    //   console.log('pets keys========================', pet); // "species"
    // }
    // for (let pet of pets) {
    //   console.log('pet values=======================', pet); // "Cat", "Dog", "Hamster"
    // }
  }
}
