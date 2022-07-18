import { Pipe, PipeTransform } from '@angular/core';
import { Army, Character } from 'src/app/shared/data-model/mass-battle-tracker-server';

@Pipe({
    name: 'nonconscriptedleaders',
    pure: false
})
export class NonConscriptedLeadersPipe implements PipeTransform {
    transform(leaders: Character[], army: Army): Character[] {
        if (!leaders || !army || !army.cohorts) {
            return leaders;
        }
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        return leaders.filter(leader => !(army.cohorts.map(cohort => cohort.leader)).includes(leader));
    }
}