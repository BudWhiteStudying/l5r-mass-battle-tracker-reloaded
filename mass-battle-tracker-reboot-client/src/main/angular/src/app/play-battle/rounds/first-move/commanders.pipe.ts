import { Pipe, PipeTransform } from '@angular/core';
import { Army, Battle, Leader } from 'src/app/shared/data-model/mass-battle-tracker-reboot-server';

@Pipe({
    name: 'commanders',
    pure: false
})
export class CommandersPipe implements PipeTransform {
    transform(battle: Battle): Leader[] {
        if (!battle || !battle.involvedArmies) {
            throw {};
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return battle.involvedArmies.map(army => army.commander);
    }
}