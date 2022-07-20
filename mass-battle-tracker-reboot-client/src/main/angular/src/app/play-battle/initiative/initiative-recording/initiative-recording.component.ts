import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Battle, Leader } from 'src/app/shared/data-model/mass-battle-tracker-reboot-server';
import { CommanderOfArmyPipe } from 'src/app/shared/util/commander-of-army.pipe';

@Component({
  selector: 'initiative-recording',
  templateUrl: './initiative-recording.component.html',
  styleUrls: ['./initiative-recording.component.scss']
})
export class InitiativeRecordingComponent implements OnInit {
  
  pageTitle = '"Initiative" phase: record initiative of each commander';

  battle : Battle;
  commanders : Leader[]

  constructor(private router:Router,
    private httpClient: HttpClient,
    private commanderOfArmyPipe : CommanderOfArmyPipe) {
    if(this.router.getCurrentNavigation().extras.state) {
      this.battle = this.router.getCurrentNavigation().extras.state.battle;
    }
    else {
      this.router.navigateByUrl("/");
    }
  }

  ngOnInit(): void {
    this.commanders = this.battle.involvedArmies.map(army => this.commanderOfArmyPipe.transform(army));
  }

  private updateBattle(): Promise<Battle> {
    return this.httpClient
    .put<Battle>("/mass-battle-tracker-reboot/api/battle", this.battle).toPromise();
  }

  private registerInitiativeValues() : void {
    this.battle.involvedArmies.forEach(army => {
      army.leaders.filter(leader => leader.id===army.commanderId)[0]=this.commanders.filter(commander => commander.id===army.commanderId)[0];
    })
  }

  onSubmit(): void {
    console.debug("Upon submission, battle is:\n" + JSON.stringify(this.battle, null, 4));
    if(this.battle.involvedArmies.filter(army => !this.commanderOfArmyPipe.transform(army).initiative).length>0) {
      console.warn("Not all initiative values have been set");
    }
    else {
      this.updateBattle()
      .then(
        response => {
          console.info("Remote battle has been updated:\n" + JSON.stringify(response));
          this.battle = response;
          this.router.navigateByUrl('/play-battle/initiative/leaders-selection', {
            state: {battle: this.battle}
          });
        }
      );
    }
  }
}
