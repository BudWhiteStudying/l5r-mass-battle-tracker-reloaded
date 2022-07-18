import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing/landing.component';
import { AppRoutingModule } from '../app-routing.module';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [LandingComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class LandingModule { }
