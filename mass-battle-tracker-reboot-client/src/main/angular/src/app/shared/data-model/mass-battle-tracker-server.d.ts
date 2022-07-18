/* tslint:disable */
/* eslint-disable */
// Generated using typescript-generator version 2.30.840 on 2022-07-15 19:14:58.

export interface ExecutedAction extends Action {
    executionRound?: number;
    perpetrator?: CharacterUnion;
    perpetratorStance?: ConflictStance;
    attritionCaused?: number;
    panicCaused?: number;
    panicRemoved?: number;
}

export interface RoundScore extends Serializable {
    totalAttritionSuffered?: number;
    totalPanicSuffered?: number;
    totalPanicRemoved?: number;
    totalCasualtiesSuffered?: number;
}

export interface RoundState extends Serializable {
    roundIndex?: number;
    actingCommander?: Commander;
    actingLeader?: CharacterUnion;
    currentObjectivePerArmyName?: { [index: string]: StrategicObjective };
    scorePerArmyName?: { [index: string]: RoundScore };
    actionHistory?: ExecutedAction[];
}

export interface Actions {
    actions?: Action[];
}

export interface Armies {
    armies?: Army[];
}

export interface Battles {
    battles?: Battle[];
}

export interface Characters {
    characters?: CharacterUnion[];
}

export interface Objectives {
    objectives?: StrategicObjective[];
}

export interface Action extends Serializable {
    type?: ActionType;
    description?: string;
    canCauseAttrition?: boolean;
    canCausePanic?: boolean;
    canRemovePanic?: boolean;
}

export interface Army extends Serializable {
    id?: number;
    name: string;
    description?: string;
    mainClan?: string;
    cohorts?: Cohort[];
    leaders?: CharacterUnion[];
    commander?: Commander;
    strength?: number;
    currentCasualties?: number;
    attritionReduction?: number;
    discipline?: number;
    currentPanic?: number;
    battleId?: number;
}

export interface Battle extends Serializable {
    id?: number;
    name: string;
    description?: string;
    involvedArmies?: Army[];
}

export interface Character extends Serializable {
    characterType: "LEADER" | "COMMANDER";
    id?: number;
    name: string;
    clan: string;
    armyId?: number;
    cohortId?: number;
}

export interface Cohort extends Serializable {
    id?: number;
    name: string;
    leader?: CharacterUnion;
    armyId?: number;
}

export interface Commander extends Character {
    characterType: "COMMANDER";
    initiative?: number;
}

export interface StrategicObjective extends Serializable {
    type?: StrategicObjectiveType;
    name?: string;
    reached?: boolean;
    attritionCaused?: number;
    panicCaused?: number;
    panicRemoved?: number;
}

export interface Values {
}

export interface WrappedException extends RuntimeException {
}

export interface Serializable {
}

export interface Throwable extends Serializable {
    cause?: Throwable;
    stackTrace?: StackTraceElement[];
    message?: string;
    localizedMessage?: string;
    suppressed?: Throwable[];
}

export interface StackTraceElement extends Serializable {
    methodName?: string;
    fileName?: string;
    lineNumber?: number;
    className?: string;
    nativeMethod?: boolean;
}

export interface RuntimeException extends Exception {
}

export interface Exception extends Throwable {
}

export type CharacterUnion = Commander | Character;

export const enum ActionType {
    ASSAULT = "ASSAULT",
    CHALLENGE = "CHALLENGE",
    REINFORCE = "REINFORCE",
    RALLY = "RALLY",
    MARCH = "MARCH",
}

export const enum CharacterType {
    LEADER = "LEADER",
    COMMANDER = "COMMANDER",
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
