import { Pipe, PipeTransform } from '@angular/core';
import { Battle } from '../data-model/mass-battle-tracker-reboot-server';

@Pipe({
  name: 'cohortNameByLeaderId'
})
export class CohortNameByLeaderIdPipe implements PipeTransform {

  transform(battle: Battle, leaderId: number): String {
    return battle.involvedArmies.find(army => army.leaders.map(leader => leader.id).includes(leaderId))
    .cohorts.find(cohort => cohort.leaderId===leaderId).name;
  }

}
