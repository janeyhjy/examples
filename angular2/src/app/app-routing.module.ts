import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error404/error404.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {
    path: 'home',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'customers',
        pathMatch: 'full'
      },
      {
        path: 'customers',
        loadChildren: 'app/pages/customers/customers.module#CustomersModule'//lazy load 模块
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**', // 如果地址栏中输入没有定义的路由就跳转到404路由界面
    redirectTo: '404'
  },
  {
    path: '404',
    component: Error404Component
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
