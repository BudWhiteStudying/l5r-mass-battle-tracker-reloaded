package com.budwhite.studying.mass.battle.tracker.reboot.model.dto;

import com.budwhite.studying.mass.battle.tracker.reboot.model.enumeration.ActionType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
//OLD
public class Action implements Serializable {
    private ActionType type;
    private String description;
    private boolean canCauseAttrition;
    private boolean canCausePanic;
    private boolean canRemovePanic;
}
