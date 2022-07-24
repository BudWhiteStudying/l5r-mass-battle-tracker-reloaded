import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AvailableBattlesComponent } from './available-battles/available-battles.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PlayBattleModule } from '../play-battle/play-battle.module';
import { MatSelectModule } from '@angular/material/select';
import { UtilModule } from '../shared/util/util.module';



@NgModule({
  declarations: [AvailableBattlesComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    PlayBattleModule,
    MatSelectModule,
    UtilModule
  ]
})
export class ResumeBattleModule { }
