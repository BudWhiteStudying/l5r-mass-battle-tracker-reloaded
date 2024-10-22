package com.budwhite.studying.mass.battle.tracker.reboot.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
//OLD
public class StrategicObjective {
    private String name;
    private boolean reached;
    private int attritionCaused;
    private int panicCaused;
    private int panicRemoved;
}
