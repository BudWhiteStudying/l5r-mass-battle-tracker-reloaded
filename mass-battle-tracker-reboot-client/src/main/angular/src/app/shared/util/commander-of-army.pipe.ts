import { Pipe, PipeTransform } from '@angular/core';
import { Army, Leader } from '../data-model/mass-battle-tracker-reboot-server';

@Pipe({
  name: 'commanderOfArmy',
  pure: false
})
export class CommanderOfArmyPipe implements PipeTransform {

  transform(army: Army): Leader {
    return army.leaders.filter(leader => leader.id===army.commanderId)[0];
  }

}
