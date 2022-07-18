package com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.factory.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Army implements Serializable {
    // independent properties
    private long id;
    private String name;
    private long commanderId;
    private String description;
    private String mainClan;
    private int strength;
    private int discipline;
    private List<Cohort> cohorts;

    // battle-dependent properties
    public int currentCasualties;
    public int attritionReduction;
    public int currentPanic;
    public Long battleId;
    private List<Character> leaders;
    private Character commander;
}
