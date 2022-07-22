import { Pipe, PipeTransform } from '@angular/core';
import { Battle, Leader, RoundState } from '../data-model/mass-battle-tracker-reboot-server';

@Pipe({
  name: 'standingLeadersOfCommander'
})
export class StandingLeadersOfCommanderPipe implements PipeTransform {
  transform(battle: Battle, roundState: RoundState, actingCommanderId?: number): Leader[] {
      if (!battle || !battle.involvedArmies) {
          throw {};
      }
      console.debug("about to execute pipe standingLeadersOfCommander with:\nbattle --> "+JSON.stringify(battle, null, 4)+"\nroundState --> "+JSON.stringify(roundState, null, 4)+"\nactingCommanderId -->"+actingCommanderId);
      // filter items array, items which match and return true will be
      // kept, false will be filtered out
      const relevantArmy = battle.involvedArmies
      .find(army => (actingCommanderId || actingCommanderId===0) ? army.commanderId===actingCommanderId : army.commanderId===roundState.actingCommander.id);
      return relevantArmy.leaders
      .filter(leader =>
        (
          relevantArmy.cohorts.map(cohort => cohort.leaderId).includes(leader.id)
        ) &&
        (roundState.actionHistory.length==0 ||
        !(roundState.actionHistory
        .filter(action => action.executionRound===roundState.roundIndex)
            .map(action => action.perpetratorId)
                .includes(leader.id)))
      );
  }
}
