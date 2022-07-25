import { Pipe, PipeTransform } from '@angular/core';
import { Battle } from '../data-model/mass-battle-tracker-reboot-server';

@Pipe({
  name: 'armyById'
})
export class ArmyByIdPipe implements PipeTransform {

  transform(battle: Battle, armyId: number): unknown {
    return battle.involvedArmies.find(army => army.id === armyId).name;
  }

}
