package com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.data.entity;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;


@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class ArmyStateEntity extends ArmyEntity {

    public int currentCasualties;
    public int attritionReduction;

    public int currentPanic;
    public Long battleId;
}
