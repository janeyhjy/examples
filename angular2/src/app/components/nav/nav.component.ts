import { Component, OnInit, ViewChild, ViewChildren, QueryList, ElementRef, Renderer2 } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less'],
  animations: [ //动画
    trigger('toggle', [
      state('collapsed', style({
        height: '0px',
        width: '0px'
      })),
      state('expanded', style({
        height: '*',
        width: '*'
      })),
      // transition('collapsed <=> expanded', [animate(500), animate(500)])
      transition('collapsed => expanded', animate(200))
    ]),
    trigger('rotate', [
      state('0', style({})),
      state('90', style({
        transform: 'rotate(90deg)'
      })),
      transition('0 <=> 90', [animate(100), animate(100)])
    ])
  ]
})
export class NavComponent implements OnInit {
  @ViewChild('menuComponent')
  menuDom: ElementRef;

  // @ViewChildren('menuChildren');
  // menuDoms: QueryList<ElementRef>;

  private menus: Array<any> = [];
  private activedMenuIdx: Array<number> = [];

  constructor(
    private router: Router,
    private renderer2: Renderer2,
    private location: Location
  ) { }

  ngOnInit() {
    // test data
   this.menus = [
      {
        type: 'click',
        key: 'customers',
        name: '菜单1',
        subMenus: [
          {
            type: 'link',
            name: '子菜单1',
            key: 'merchants',
            link: '/customers/merchants',
          },
          {
            type: 'link',
            name: '子菜单1',
            key: 'users',
            link: '/customers/users',
          }
        ]
      },
      {
        type: 'click',
        key: 'aaa',
        name: '菜单2',
        subMenus: [
          {
            type: 'link',
            name: '子菜单2',
            key: 'users',
            link: '/aaa/users',
          }
        ]
      },
      {
        type: 'link',
        key: 'login',
        name: '菜单3',
        link: '/login',
      }
    ];

    this.initMenusData(this.menus);
    console.log('this.menus-----------------------------------------------', this.menus);

    const path: string = this.location.path();
    if (path.length > 1) {
      // this.activedMenuIdx = this.getActivedMenuIndex(path);
      this.activeMenu(path);
    }

    // click nav event
    // this.router.events.subscribe( (event) => {
    //   if (event instanceof NavigationEnd) {
    //     //菜单激活状态
    //     this.activeMenu(event.urlAfterRedirects)
    //   }
    // });
  }

  // view渲染好以后触发，可用于操作dom
  // ngAfterViewInit() {
  //   const path: string = this.location.path();
  //   if (path.length > 1) {
  //     this.activeMenu(path);
  //   }
  // }

  // 一级单点击
  clickMenu (event, idx, menu): void {
//    const activedDom = this.menuDom.nativeElement.querySelector(".menu-item.actived");
//    if (activedDom) {
//      activedDom.classList.remove('actived');
//    }
//    event.currentTarget.classList.add("actived");
//    console.log(event, idx);
    if (<number>this.activedMenuIdx[0] === <number>idx) {
      return;
    }
    this.menus[this.activedMenuIdx[0]]['actived'] = false;
    this.activedMenuIdx[0] = idx;
    menu['actived'] = true;
  }

  // 二级菜单点击
  clickSubMenu (event, idx, menu): void {
    event.stopPropagation();
    if (<number>this.activedMenuIdx[1] === <number>idx) {
      return;
    }
    this.menus[this.activedMenuIdx[0]]['subMenus'][this.activedMenuIdx[1]]['actived'] = false;
    this.activedMenuIdx[1] = idx;
    menu['actived'] = true;
  }

  private getActivedMenuIndex(path): Array<any> {
    const currentMenu: Array<string> = path.substring(1).split('/');
    const menuIdx: Array<number | string> = [];
    let menuItems: any = this.menus ? this.menus : [];
    for (const item of currentMenu) {
      for (const idx in menuItems) {
        const val = menuItems[idx];
        if (item === val.key) {
          menuIdx.push(idx);
          menuItems = menuItems[idx].subMenus ? menuItems[idx].subMenus : [];
          break;
        }
      }
    }
    return menuIdx;
  }

  private activeMenu(path) {
    // dom操作
    // let dom: any = this.menuDom.nativeElement;
    // const menuIdx: Array<number> = this.getActivedMenuIndex(path);
    // if (!!menuIdx.length) {
    //   menuIdx.every((value, index): boolean => {

    //     dom = dom.querySelectorAll('.menu-item-' + index)[value];
    //     dom.classList.add('actived');
    //     console.log('=========================================================', index, value);
    //     return true;
    //   });
    // }

    // 修改原先actived=true的数据
    if (this.activedMenuIdx.length > 0) {
      let olderMenuData = this.menus;
      for (const val in this.activedMenuIdx) {
        olderMenuData[val]['actived'] = false;
        if (olderMenuData[val]['subMenus'] && olderMenuData[val]['subMenus'].length > 0) {
          olderMenuData = olderMenuData[val]['subMenus'];
        }
      }
    }

    const menuIdx: Array<number> = this.getActivedMenuIndex(path);
    let menuData = this.menus;
    for (const val of menuIdx) {
      menuData[val]['actived'] = true;
      if (menuData[val]['subMenus'] && menuData[val]['subMenus'].length > 0) {
        menuData = menuData[val]['subMenus'];
      }
    }
    console.log('actived..........................', this.menus);
    this.activedMenuIdx = menuIdx;
  }

  private initMenusData(menusData): void {
    for (let val of menusData) {
      val.actived = false;
      if (val['subMenus'] && val['subMenus'].length > 0) {
        this.initMenusData(val['subMenus']);
      }
    }
  }
}
