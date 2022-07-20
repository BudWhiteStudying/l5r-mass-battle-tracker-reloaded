import { Pipe, PipeTransform } from '@angular/core';
import { Battle, Leader } from '../data-model/mass-battle-tracker-reboot-server';

@Pipe({
  name: 'highestInitCommanderInBattle'
})
export class HighestInitCommanderInBattlePipe implements PipeTransform {
  transform(battle: Battle): Leader {
      if (!battle || !battle.involvedArmies) {
          throw {};
      }
      // filter items array, items which match and return true will be
      // kept, false will be filtered out
      return battle.involvedArmies.map(army => army.leaders.filter(leader => leader.id===army.commanderId)[0]).reduce((commander1, commander2) => commander1.initiative>commander2.initiative ? commander1 : commander2);
  }
}
