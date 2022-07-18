import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvailableBattlesComponent } from './available-battles/available-battles.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [AvailableBattlesComponent],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ResumeBattleModule { }
