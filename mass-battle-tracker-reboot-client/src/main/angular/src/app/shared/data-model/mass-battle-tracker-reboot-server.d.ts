/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 2.30.840 on 2022-07-22 19:50:46.

export interface Action extends Serializable {
    description?: string;
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
    perpetratorId?: number;
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
    currentObjectivePerArmyId?: { [index: string]: StrategicObjective };
    scorePerArmyId?: { [index: string]: RoundScore };
    actionHistory?: ExecutedAction[];
}

export interface StrategicObjective {
    name?: string;
    reached?: boolean;
    attritionCaused?: number;
    panicCaused?: number;
    panicRemoved?: number;
}

export interface Serializable {
}
