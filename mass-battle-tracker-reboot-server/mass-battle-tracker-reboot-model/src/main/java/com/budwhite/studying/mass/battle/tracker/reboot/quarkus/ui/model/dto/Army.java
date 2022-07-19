package com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
public class Army implements Serializable {
    // independent properties
    private Long id;
    private String name;
    private String description;
    private String mainClan;
    private int strength;
    private int discipline;
    private List<Cohort> cohorts;

    // battle-dependent properties
    private int currentCasualties;
    private int attritionReduction;
    private int currentPanic;
    private Long battleId;
    private List<Leader> leaders;
    private Leader commander;
}
