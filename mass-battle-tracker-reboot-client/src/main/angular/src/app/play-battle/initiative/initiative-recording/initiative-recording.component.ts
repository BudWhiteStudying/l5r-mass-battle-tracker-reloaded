import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Battle } from 'src/app/shared/data-model/mass-battle-tracker-reboot-server';

@Component({
  selector: 'initiative-recording',
  templateUrl: './initiative-recording.component.html',
  styleUrls: ['./initiative-recording.component.scss']
})
export class InitiativeRecordingComponent implements OnInit {
  
  pageTitle = '"Initiative" phase: record initiative of each commander';

  battle : Battle;

  constructor(private router:Router,
    private httpClient: HttpClient) {
    if(this.router.getCurrentNavigation().extras.state) {
      this.battle = this.router.getCurrentNavigation().extras.state.battle;
    }
    else {
      this.router.navigateByUrl("/");
    }
  }

  ngOnInit(): void {
  }

  private updateBattle(): Promise<Battle> {
    return this.httpClient
    .put<Battle>("/mass-battle-tracker-reboot/api/battle", this.battle).toPromise();
  }

  onSubmit(): void {
    console.debug("Upon submission, battle is:\n" + JSON.stringify(this.battle, null, 4));
    if(this.battle.involvedArmies.filter(army => !army.commander.initiative).length>0) {
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
