import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Battle, Battles } from 'src/app/shared/data-model/mass-battle-tracker-reboot-server';

@Component({
  selector: 'available-battles',
  templateUrl: './available-battles.component.html',
  styleUrls: ['./available-battles.component.scss']
})
export class AvailableBattlesComponent implements OnInit {

  constructor(private httpClient : HttpClient,
    private router : Router) { }

  availableBattles : Battle[];
  pageTitle = "Pick a battle to resume";

  private retrieveBattles(): void {
    this.httpClient
    .get<Battles>("/mass-battle-tracker-reboot/api/battle/unfinished",{}).toPromise()
    .then(
      response => {
        console.info("Retrieved initialized battle: " + JSON.stringify(response));
        this.availableBattles = response.battles;
      }
    );
  }

  resumeBattle(battle : Battle) {
    this.router.navigateByUrl('/play-battle/rounds/objective-selection', {
      state: {battle: battle}
    });
  }

  ngOnInit(): void {
    this.retrieveBattles();
  }

}
