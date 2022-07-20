/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 2.30.840 on 2022-07-20 20:10:32.

export interface Action extends Serializable {
    type?: ActionType;
    description?: string;
    canCauseAttrition?: boolean;
    canCausePanic?: boolean;
    canRemovePanic?: boolean;
}

export interface Armies extends Serializable {
    armies?: Army[];
}

export interface Army extends Serializable {
    id?: number;
    name?: string;
    description?: string;
    mainClan?: string;
    strength?: number;
    discipline?: number;
    currentCasualties?: number;
    attritionReduction?: number;
    currentPanic?: number;
    battleId?: number;
    leaders?: Leader[];
    cohorts?: Cohort[];
    commanderId?: number;
}

export interface ArmyBuilder {
}

export interface Battle extends Serializable {
    id?: number;
    name?: string;
    description?: string;
    zombie?: boolean;
    involvedArmies?: Army[];
}

export interface BattleBuilder {
}

export interface Battles extends Serializable {
    battles?: Battle[];
}

export interface Cohort extends Serializable {
    id?: number;
    name?: string;
    armyId?: number;
    leaderId?: number;
}

export interface CohortBuilder {
}

export interface Cohorts extends Serializable {
    cohorts?: Cohort[];
}

export interface ExecutedAction extends Action {
    executionRound?: number;
    perpetrator?: Leader;
    perpetratorStance?: ConflictStance;
    attritionCaused?: number;
    panicCaused?: number;
    panicRemoved?: number;
}

export interface Leader extends Serializable {
    id?: number;
    name?: string;
    clan?: string;
    commander?: boolean;
    armyId?: number;
    cohortId?: number;
    initiative?: number;
}

export interface LeaderBuilder {
}

export interface Leaders extends Serializable {
    leaders?: Leader[];
}

export interface RoundScore {
    totalAttritionSuffered?: number;
    totalPanicSuffered?: number;
    totalPanicRemoved?: number;
    totalCasualtiesSuffered?: number;
}

export interface RoundState extends Serializable {
    roundIndex?: number;
    actingCommander?: Leader;
    actingLeader?: Leader;
    currentObjectivePerArmyName?: { [index: string]: StrategicObjective };
    scorePerArmyName?: { [index: string]: RoundScore };
    actionHistory?: ExecutedAction[];
}

export interface StrategicObjective {
    type?: StrategicObjectiveType;
    name?: string;
    reached?: boolean;
    attritionCaused?: number;
    panicCaused?: number;
    panicRemoved?: number;
}

export interface Serializable {
}

export const enum ActionType {
    ASSAULT = "ASSAULT",
    CHALLENGE = "CHALLENGE",
    REINFORCE = "REINFORCE",
    RALLY = "RALLY",
    MARCH = "MARCH",
}

export const enum ConflictStance {
    AIR = "AIR",
    EARTH = "EARTH",
    FIRE = "FIRE",
    VOID = "VOID",
    WATER = "WATER",
}

export const enum StrategicObjectiveType {
    TODO1 = "TODO1",
    TODO2 = "TODO2",
    TO_VICTORY = "TO_VICTORY",
}
