import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NavComponent } from './components/nav/nav.component';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './pages/home/home.component';
import { Error404Component } from './pages/error404/error404.component';
// import { PipPipe } from './test/pip.pipe';

@NgModule({
  declarations: [
    //组件，指令，管道
    AppComponent,
    LoginComponent,
    NavComponent,
    HomeComponent,
    Error404Component,
    // PipPipe
  ],
  imports: [
    // 要折叠（Folded）进本模块中的其它模块。折叠的意思是从被导入的模块中导出的那些软件资产同样会被声明在这里。
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    // Angular 会使用该模块的注入器注册这些提供商。 如果该模块是启动模块，那就会使用根注入器。
    // 当需要注入到任何组件、指令、管道或服务时，这些服务对于本注入器的子注入器都是可用的。
    AuthService,
    AuthGuard,
    // { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent],//要自动启动的组件列表。通常，在这个列表中只有一个组件，也就是应用的根组件。
  exports: [
    // 可供导入了自己的模块使用的可声明对象（组件、指令、管道类）的列表。
  ],
  entryComponents: [
    // 那些可以动态加载进视图的组件列表。
  ]
})
export class AppModule { }
