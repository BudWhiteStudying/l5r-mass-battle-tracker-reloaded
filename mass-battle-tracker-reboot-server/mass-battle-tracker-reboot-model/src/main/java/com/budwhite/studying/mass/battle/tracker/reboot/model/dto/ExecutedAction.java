package com.budwhite.studying.mass.battle.tracker.reboot.model.dto;

import com.budwhite.studying.mass.battle.tracker.reboot.model.enumeration.ActionType;
import com.budwhite.studying.mass.battle.tracker.reboot.model.enumeration.ConflictStance;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
@EqualsAndHashCode(callSuper = true)
@ToString
//OLD
public class ExecutedAction extends Action{
    private int executionRound;
    private Leader perpetrator;
    private ConflictStance perpetratorStance;
    private int attritionCaused;
    private int panicCaused;
    private int panicRemoved;
}
