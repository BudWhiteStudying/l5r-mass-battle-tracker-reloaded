import { Pipe, PipeTransform } from '@angular/core';
import { Army } from '../data-model/mass-battle-tracker-reboot-server';

@Pipe({
  name: 'leaderNameById'
})
export class LeaderNameByIdPipe implements PipeTransform {

  transform(army: Army, leaderId: number): unknown {
    return army.leaders.find(leader => leader.id===leaderId).name;
  }

}
