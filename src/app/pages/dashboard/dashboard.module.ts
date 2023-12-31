import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {SharedModule} from "../../../modules/shared.module";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent
  ],
  imports: [
    SharedModule,
    DashboardRoutingModule
  ]
})

export class DashboardModule{}
