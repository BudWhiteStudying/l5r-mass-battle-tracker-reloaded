import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Army, Battle, Character, CharacterType } from 'src/app/shared/data-model/mass-battle-tracker-server';
import {isEqualWith} from "lodash";
import {isNullOrEmptyString} from "../../shared/utility/string.utility";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'involved-armies',
  templateUrl: './involved-armies.component.html',
  styleUrls: ['./involved-armies.component.scss']
})
export class InvolvedArmiesComponent implements OnInit {
  
  pageTitle = "Set involved armies";

  battleEntity : Battle;
  addingNewArmy : Boolean = false;
  addingNewLeader : Boolean = false;
  notEnoughArmiesError : Boolean = false;
  notEnoughLeadersError : Boolean = false;

  armyInProgress : Army = {
    name : "",
    description : "",
    mainClan : "",
    cohorts : [],
    leaders : [],
    strength : 0,
    discipline : 0,
    currentCasualties : 0,
    currentPanic : 0
  };

  leaderInProgress : Character = {
    name : "",
    clan : "",
    characterType : CharacterType.LEADER
  };

  private armyFormValueChangesSubscription: Subscription;
  private leaderFormValueChangesSubscription: Subscription;

  newArmyForm: FormGroup;
  newLeaderForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private router:Router,
    private httpClient: HttpClient) {
    if(this.router.getCurrentNavigation().extras.state) {
      this.battleEntity = this.router.getCurrentNavigation().extras.state.battleEntity;
      this.buildArmyForm();
      this.buildLeaderForm();
    }
    else {
      this.router.navigateByUrl("/");
    }
  }

  ngOnInit(): void {}

  onFinalSubmit(): void {
    if(this.battleEntity.involvedArmies.length>=2) {
      this.updateBattle().then(
        response => {
          console.info("Remote battleEntity has been updated:\n" + JSON.stringify(response));
          this.battleEntity = response;
          this.router.navigateByUrl('/new-battleEntity/final-summary', {
            state: {battleEntity: this.battleEntity}
          });
        }
      );
    }
    else {
      this.notEnoughArmiesError = true;
    }
  }

  onAddArmyClicked(): void {
    if(!this.addingNewArmy) {
      this.addingNewArmy = true;
      this.armyInProgress = 
        {
          name : "",
          description : "",
          mainClan : "",
          cohorts : [],
          leaders : [],
          strength : 0,
          discipline : 0,
          currentCasualties : 0,
          currentPanic : 0
        };
        this.notEnoughArmiesError = false;
    }
  }

  onNewArmySubmit(): void {
    if(this.newArmyForm.valid) {
      if(this.armyInProgress.leaders.length>0) {
        this.armyInProgress.name = this.newArmyForm.value.armyName;
        this.armyInProgress.mainClan = this.newArmyForm.value.armyClan;
        this.armyInProgress.strength = this.newArmyForm.value.armyStrength;
        this.armyInProgress.discipline = this.newArmyForm.value.armyDiscipline;
        this.armyInProgress.attritionReduction = this.newArmyForm.value.armyAttritionReduction;
        this.battleEntity.involvedArmies.push(this.armyInProgress);
        console.debug("New state of battleEntity after onNewArmySubmit: " + JSON.stringify(this.battleEntity,null,4));
        this.addingNewArmy = false;
        this.newArmyForm.reset();
        this.notEnoughArmiesError = false;
      }
      else {
        this.notEnoughLeadersError = true;
      }
    }
  }

  onNewLeaderSubmit(): void {
    if(this.newLeaderForm.valid) {
      this.leaderInProgress.name = this.newLeaderForm.value.leaderName;
      this.leaderInProgress.clan = this.newLeaderForm.value.leaderClan;
      this.armyInProgress.leaders.push(this.leaderInProgress);
      console.debug("New state of army after onNewLeaderSubmit: " + JSON.stringify(this.armyInProgress,null,4));
      this.addingNewLeader = false;
      this.notEnoughLeadersError = false;
      this.newLeaderForm.reset();
    }
  }

  onAddLeaderClicked(): void {
    if(!this.addingNewLeader) {
      this.addingNewLeader = true;
      this.notEnoughLeadersError = false;
      this.leaderInProgress = 
        {
          name : "",
          clan : "",
          characterType : CharacterType.LEADER
        };
    }
  }

  private updateBattle(): Promise<Battle> {
    return this.httpClient
    .put<Battle>("/mass-battle-tracker/api/battleEntity", this.battleEntity).toPromise();
  }

  private buildArmyForm(): void {
    this.newArmyForm = this.formBuilder.group({
      armyName: new FormControl('', Validators.required),//[this.battleEntity.name, Validators.required],
      armyClan: new FormControl('', Validators.required),//[this.battleEntity.name, Validators.required],
      armyStrength: new FormControl('', Validators.required),//[this.battleEntity.description, Validators.required],//[this.battleEntity.name, Validators.required],
      armyDiscipline: new FormControl('', Validators.required),//[this.battleEntity.description, Validators.required],
      armyAttritionReduction: new FormControl('', Validators.required)//[this.battleEntity.description, Validators.required]
    });

    let formInitialValue = this.newArmyForm.value;
    this.armyFormValueChangesSubscription = this.newArmyForm.valueChanges
      .subscribe(() => {
        let formCurrentValueEqualsInitialValue = isEqualWith(formInitialValue, this.newArmyForm.getRawValue(),
          (field1, field2) => { // treat empty and null strings as equal
            if (isNullOrEmptyString(field1) && isNullOrEmptyString(field2))
              return true;
          })

        if (formCurrentValueEqualsInitialValue)
          this.newArmyForm.markAsPristine();
      })
  }



  private buildLeaderForm(): void {
    this.newLeaderForm = this.formBuilder.group({
      leaderName: new FormControl('', Validators.required),//[this.battleEntity.name, Validators.required],
      leaderClan: new FormControl('', Validators.required)//[this.battleEntity.description, Validators.required]
    });

    let formInitialValue = this.newLeaderForm.value;
    this.leaderFormValueChangesSubscription = this.newLeaderForm.valueChanges
      .subscribe(() => {
        let formCurrentValueEqualsInitialValue = isEqualWith(formInitialValue, this.newLeaderForm.getRawValue(),
          (field1, field2) => { // treat empty and null strings as equal
            if (isNullOrEmptyString(field1) && isNullOrEmptyString(field2))
              return true;
          })

        if (formCurrentValueEqualsInitialValue)
          this.newLeaderForm.markAsPristine()
      })
  }
}
