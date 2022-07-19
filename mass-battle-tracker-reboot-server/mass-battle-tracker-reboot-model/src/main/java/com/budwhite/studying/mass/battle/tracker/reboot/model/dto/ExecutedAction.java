package com.budwhite.studying.mass.battle.tracker.reboot.model.dto;

import com.budwhite.studying.mass.battle.tracker.reboot.model.enumeration.ActionType;
import com.budwhite.studying.mass.battle.tracker.reboot.model.enumeration.ConflictStance;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
//OLD
public class ExecutedAction {
    private ActionType type;
    private String description;
    private boolean canCauseAttrition;
    private boolean canCausePanic;
    private boolean canRemovePanic;
    private int executionRound;
    private Leader perpetrator;
    private ConflictStance perpetratorStance;
    private int attritionCaused;
    private int panicCaused;
    private int panicRemoved;
}
