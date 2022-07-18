import { Pipe, PipeTransform } from '@angular/core';
import { Army, Battle, Character } from 'src/app/shared/data-model/mass-battle-tracker-server';

@Pipe({
    name: 'commanders',
    pure: false
})
export class CommandersPipe implements PipeTransform {
    transform(battleEntity: Battle): Character[] {
        if (!battleEntity || !battleEntity.involvedArmies) {
            throw {};
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return battleEntity.involvedArmies.map(army => army.commander);
    }
}