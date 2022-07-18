import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './landing/landing/landing.component';

import { NameDescriptionComponent } from './new-battleEntity/name-description/name-description.component';
import { InvolvedArmiesComponent } from './new-battleEntity/involved-armies/involved-armies.component';
import { FinalSummaryComponent } from './new-battleEntity/final-summary/final-summary.component';

import { AvailableBattlesComponent } from './resume-battleEntity/available-battles/available-battles.component';

import { CommanderSelectionComponent } from './play-battleEntity/initiative/commander-selection/commander-selection.component';
import { InitiativeRecordingComponent } from './play-battleEntity/initiative/initiative-recording/initiative-recording.component';
import { LeadersSelectionComponent } from './play-battleEntity/initiative/leaders-selection/leaders-selection.component';

import { ObjectiveSelectionComponent } from './play-battleEntity/rounds/objective-selection/objective-selection.component';
import { LeaderSelectionComponent } from './play-battleEntity/rounds/leader-selection/leader-selection.component';
import { LeaderActionComponent } from './play-battleEntity/rounds/leader-action/leader-action.component';
import { TotalsCheckComponent } from './play-battleEntity/rounds/totals-check/totals-check.component';
import { FirstMoveComponent } from './play-battleEntity/rounds/first-move/first-move.component';
import { RoundSummaryComponent } from './play-battleEntity/rounds/round-summary/round-summary.component';


const routes: Routes = [
  {
    path: 'landing',
    component: LandingComponent
  },
  {
    path: 'new-battleEntity/name-description',
    component: NameDescriptionComponent
  },
  {
    path: 'new-battleEntity/involved-armies',
    component: InvolvedArmiesComponent
  },
  {
    path: 'new-battleEntity/final-summary',
    component: FinalSummaryComponent
  },
  {
    path: 'resume-battleEntity/available-battles',
    component: AvailableBattlesComponent
  },
  {
    path: 'play-battleEntity/initiative/commander-selection',
    component: CommanderSelectionComponent
  },
  {
    path: 'play-battleEntity/initiative/initiative-recording',
    component: InitiativeRecordingComponent
  },
  {
    path: 'play-battleEntity/initiative/leaders-selection',
    component: LeadersSelectionComponent
  },
  {
    path: 'play-battleEntity/rounds/objective-selection',
    component: ObjectiveSelectionComponent
  },
  {
    path: 'play-battleEntity/rounds/first-move',
    component: FirstMoveComponent
  },
  {
    path: 'play-battleEntity/rounds/leader-selection',
    component: LeaderSelectionComponent
  },
  {
    path: 'play-battleEntity/rounds/leader-action',
    component: LeaderActionComponent
  },
  {
    path: 'play-battleEntity/rounds/totals-check',
    component: TotalsCheckComponent
  },
  {
    path: 'play-battleEntity/rounds/round-summary',
    component: RoundSummaryComponent
  },
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
