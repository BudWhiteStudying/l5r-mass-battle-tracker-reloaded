package com.budwhite.studying.mass.battle.tracker.reboot.model.dto;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
@EqualsAndHashCode(callSuper = true)
@ToString
//OLD
public class ExecutedAction extends Action{
    private int executionRound;
    private Long perpetratorId;
    private int attritionCaused;
    private int panicCaused;
    private int panicRemoved;
}
