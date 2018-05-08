import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit{
  constructor (
    private router: Router
  ) {}

  ngOnInit() {
    this.router.events.subscribe( (event) => {
      if (event instanceof NavigationStart) {
        console.log('router change start===========', event)
        return;
      }
      if (event instanceof NavigationEnd) {
        console.log('router change end ============', event)
        return;
      }
    })
  }
}
