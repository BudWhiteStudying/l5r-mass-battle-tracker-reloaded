import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommanderOfArmyPipe } from './commander-of-army.pipe';
import { CommandersInBattlePipe } from './commanders-in-battle.pipe';
import { NonConscriptedLeadersOfArmyPipe } from './non-conscripted-leaders-of-army.pipe';
import { HighestInitCommanderInBattlePipe } from './highest-init-commander-in-battle.pipe';
import { StandingLeadersOfCommanderPipe } from './standing-leaders-of-commander.pipe';



@NgModule({
  declarations: [CommanderOfArmyPipe, CommandersInBattlePipe, NonConscriptedLeadersOfArmyPipe, HighestInitCommanderInBattlePipe, StandingLeadersOfCommanderPipe],
  imports: [
    CommonModule
  ],
  exports: [CommanderOfArmyPipe, CommandersInBattlePipe, NonConscriptedLeadersOfArmyPipe, HighestInitCommanderInBattlePipe, StandingLeadersOfCommanderPipe]
})
export class UtilModule { }
