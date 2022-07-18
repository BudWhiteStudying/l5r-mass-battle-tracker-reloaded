import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Battle } from 'src/app/shared/data-model/mass-battle-tracker-server';

@Component({
  selector: 'initiative-recording',
  templateUrl: './initiative-recording.component.html',
  styleUrls: ['./initiative-recording.component.scss']
})
export class InitiativeRecordingComponent implements OnInit {
  
  pageTitle = '"Initiative" phase: record initiative of each commander';

  battleEntity : Battle;

  constructor(private router:Router,
    private httpClient: HttpClient) {
    if(this.router.getCurrentNavigation().extras.state) {
      this.battleEntity = this.router.getCurrentNavigation().extras.state.battleEntity;
    }
    else {
      this.router.navigateByUrl("/");
    }
  }

  ngOnInit(): void {
  }

  private updateBattle(): Promise<Battle> {
    return this.httpClient
    .put<Battle>("/mass-battle-tracker/api/battleEntity", this.battleEntity).toPromise();
  }

  onSubmit(): void {
    console.debug("Upon submission, battleEntity is:\n" + JSON.stringify(this.battleEntity, null, 4));
    if(this.battleEntity.involvedArmies.filter(army => !army.commander.initiative).length>0) {
      console.warn("Not all initiative values have been set");
    }
    else {
      this.updateBattle()
      .then(
        response => {
          console.info("Remote battleEntity has been updated:\n" + JSON.stringify(response));
          this.battleEntity = response;
          this.router.navigateByUrl('/play-battleEntity/initiative/leaders-selection', {
            state: {battleEntity: this.battleEntity}
          });
        }
      );
    }
  }
}
