import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Battle, CharacterType } from 'src/app/shared/data-model/mass-battle-tracker-server';

@Component({
  selector: 'commander-selection',
  templateUrl: './commander-selection.component.html',
  styleUrls: ['./commander-selection.component.scss']
})
export class CommanderSelectionComponent implements OnInit {
  
  pageTitle = '"Initiative" phase: select a commander for every involved Army';

  battleEntity : Battle;

  constructor(private router:Router,
    private httpClient: HttpClient) {
    if(this.router.getCurrentNavigation().extras.state) {
      this.battleEntity = this.router.getCurrentNavigation().extras.state.battleEntity;
    }
    else {
      this.battleEntity = {
        "description": "The Scorpion tries to snatch Kenson Gakka back from Lion hands",
        "involvedArmies": [
            {
                "leaders": [
                    {
                      "clan": "",
                      "name": "Bayushi Ogoi",
                      "characterType" : CharacterType.LEADER
                    },
                    {
                      "clan": "",
                      "name": "Shosuro Ageko",
                      "characterType" : CharacterType.LEADER
                    }
                ],
                "currentCasualties": 0,
                "currentPanic": 0,
                "description": "",
                "discipline": 70,
                "mainClan": "Scorpion",
                "name": "Scorpion attackers",
                "strength": 70
            },
            {
                "leaders": [
                    {
                      "clan": "Lion",
                      "name": "Matsu Mitsui",
                      "characterType" : CharacterType.LEADER
                    },
                    {
                      "clan": "Crab",
                      "name": "Hida Gamagori",
                      "characterType" : CharacterType.LEADER
                    }
                ],
                "currentCasualties": 0,
                "currentPanic": 0,
                "description": "",
                "discipline": 80,
                "mainClan": "Lion",
                "name": "Lion defenders",
                "strength": 100
            }
        ],
        "name": "The Battle of Kenson Gakka"
    };
    }
    console.debug("Component has been constructed, battleEntity is " + JSON.stringify(this.battleEntity));
  }

  ngOnInit(): void {
  }

  private updateBattle(): Promise<Battle> {
    this.battleEntity.involvedArmies.forEach(
      army => {
        army.commander.characterType = CharacterType.COMMANDER;
      }
    );
    return this.httpClient
    .put<Battle>("/mass-battle-tracker/api/battleEntity", this.battleEntity).toPromise();
  }

  onSubmit() : void {
    console.debug("Commanders have been selected, army is:\n" + JSON.stringify(this.battleEntity, null, 4));
    if(this.battleEntity.involvedArmies.filter(army => !army.commander).length>0) {
      console.warn("Not all commanders have been set");
    }
    else {
      this.updateBattle()
      .then(
        response => {
          console.info("Remote battleEntity has been updated:\n" + JSON.stringify(response));
          this.battleEntity = response;
          this.router.navigateByUrl('/play-battleEntity/initiative/initiative-recording', {
            state: {battleEntity: this.battleEntity}
          });
        }
      );
    }
  }
}
