import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { UsersComponent } from './users/users.component';
import { MerchantsComponent } from './merchants/merchants.component';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule
  ],
  declarations: [UsersComponent, MerchantsComponent]
})
export class CustomersModule { }
