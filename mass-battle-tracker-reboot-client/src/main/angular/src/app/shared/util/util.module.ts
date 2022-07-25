import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommanderOfArmyPipe } from './commander-of-army.pipe';
import { CommandersInBattlePipe } from './commanders-in-battle.pipe';
import { NonConscriptedLeadersOfArmyPipe } from './non-conscripted-leaders-of-army.pipe';
import { HighestInitCommanderInBattlePipe } from './highest-init-commander-in-battle.pipe';
import { StandingLeadersOfCommanderPipe } from './standing-leaders-of-commander.pipe';
import { LeaderNameByIdPipe } from './leader-name-by-id.pipe';
import { MaxBetweenTwoPipe } from './max-between-two.pipe';
import { MinBetweenTwoPipe } from './min-between-two.pipe';
import { ArmyByIdPipe } from './army-by-id.pipe';
import { CohortNameByLeaderIdPipe } from './cohort-name-by-leader-id.pipe';



@NgModule({
  declarations: [CommanderOfArmyPipe, CommandersInBattlePipe, NonConscriptedLeadersOfArmyPipe, HighestInitCommanderInBattlePipe, StandingLeadersOfCommanderPipe, LeaderNameByIdPipe, MaxBetweenTwoPipe, MinBetweenTwoPipe, ArmyByIdPipe, CohortNameByLeaderIdPipe],
  imports: [
    CommonModule
  ],
  exports: [CommanderOfArmyPipe, CommandersInBattlePipe, NonConscriptedLeadersOfArmyPipe, HighestInitCommanderInBattlePipe, StandingLeadersOfCommanderPipe, LeaderNameByIdPipe, ArmyByIdPipe, CohortNameByLeaderIdPipe]
})
export class UtilModule { }
