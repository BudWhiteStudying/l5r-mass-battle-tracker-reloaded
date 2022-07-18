import { Pipe, PipeTransform } from '@angular/core';
import { Battle, Character, RoundState } from 'src/app/shared/data-model/mass-battle-tracker-server';

@Pipe({
    name: 'standingleadersofcommander',
    pure: false
})
export class StandingLeadersOfCommanderPipe implements PipeTransform {
    transform(battleEntity: Battle, roundState: RoundState): Character[] {
        if (!battleEntity || !battleEntity.involvedArmies) {
            throw {};
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return battleEntity.involvedArmies
        .find(army => army.commander.id===roundState.actingCommander.id).cohorts
            .map(cohort => cohort.leader)
            .filter(
                leader =>
                !roundState.actionHistory
                    .filter(action => action.executionRound===roundState.roundIndex)
                        .map(action => action.perpetrator.id)
                            .includes(leader.id));
    }
}