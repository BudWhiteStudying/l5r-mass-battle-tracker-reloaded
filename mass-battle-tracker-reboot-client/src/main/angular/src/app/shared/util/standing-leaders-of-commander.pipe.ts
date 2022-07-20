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
      // filter items array, items which match and return true will be
      // kept, false will be filtered out
      return battle.involvedArmies
      .find(army => actingCommanderId!=null ? army.commanderId===actingCommanderId : army.commanderId===roundState.actingCommander.id).leaders
      .filter(leader => {
        !roundState.actionHistory
        .filter(action => action.executionRound===roundState.roundIndex)
            .map(action => action.perpetrator.id)
                .includes(leader.id)
      });
  }
}
