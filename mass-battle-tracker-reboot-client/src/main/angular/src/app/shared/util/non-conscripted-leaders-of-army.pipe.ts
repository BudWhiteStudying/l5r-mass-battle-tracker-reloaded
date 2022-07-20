import { Pipe, PipeTransform } from '@angular/core';
import { Army, Leader } from '../data-model/mass-battle-tracker-reboot-server';

@Pipe({
  name: 'nonConscriptedLeadersOfArmy'
})
export class NonConscriptedLeadersOfArmyPipe implements PipeTransform {
  transform(leaders: Leader[], army: Army): Leader[] {
      if (!leaders || !army || !army.cohorts) {
          return leaders;
      }
      // filter items array, items which match and return true will be
      // kept, false will be filtered out
      return leaders.filter(leader => !(army.cohorts.map(cohort => cohort.leaderId)).includes(leader.id));
  }
}
