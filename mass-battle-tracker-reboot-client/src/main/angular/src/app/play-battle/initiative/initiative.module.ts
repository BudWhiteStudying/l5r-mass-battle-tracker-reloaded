import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommanderSelectionComponent } from './commander-selection/commander-selection.component';
import { InitiativeRecordingComponent } from './initiative-recording/initiative-recording.component';
import { LeadersSelectionComponent } from './leaders-selection/leaders-selection.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';

import { PlayBattleModule } from '../play-battle.module';
import { UtilModule } from 'src/app/shared/util/util.module';
import { CommanderOfArmyPipe } from 'src/app/shared/util/commander-of-army.pipe';



@NgModule({
  declarations: [CommanderSelectionComponent, InitiativeRecordingComponent, LeadersSelectionComponent],
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
  ],
  providers : [CommanderOfArmyPipe]
})
export class InitiativeModule { }
