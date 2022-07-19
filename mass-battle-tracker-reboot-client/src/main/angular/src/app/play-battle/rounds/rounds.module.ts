import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObjectiveSelectionComponent } from './objective-selection/objective-selection.component';
import { LeaderSelectionComponent } from './leader-selection/leader-selection.component';
import { LeaderActionComponent } from './leader-action/leader-action.component';
import { TotalsCheckComponent } from './totals-check/totals-check.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { PlayBattleModule } from '../play-battle.module';
import { FirstMoveComponent } from './first-move/first-move.component';
import { HighestInitCommanderPipe } from './first-move/highest-init-commander.pipe';
import { CommandersPipe } from './first-move/commanders.pipe';
import { StandingLeadersOfCommanderPipe } from './leader-selection/standing-leaders-of-commander.pipe';
import { RoundSummaryComponent } from './round-summary/round-summary.component';



@NgModule({
  declarations: [ObjectiveSelectionComponent, LeaderSelectionComponent, LeaderActionComponent, TotalsCheckComponent, FirstMoveComponent, HighestInitCommanderPipe, CommandersPipe, StandingLeadersOfCommanderPipe, RoundSummaryComponent],
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
    MatCheckboxModule
  ]
})
export class RoundsModule { }
