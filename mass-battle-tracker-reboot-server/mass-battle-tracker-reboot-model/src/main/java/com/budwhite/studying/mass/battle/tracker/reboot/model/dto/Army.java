package com.budwhite.studying.mass.battle.tracker.reboot.model.dto;

import io.smallrye.common.constraint.NotNull;
import lombok.*;

import java.io.Serializable;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@ToString
public class Army implements Serializable {
    // independent properties
    private Long id;
    @NotNull
    private String name;
    private String description;
    private String mainClan;
    private int strength;
    private int discipline;

    // battle-dependent properties
    private int currentCasualties;
    private int attritionReduction;
    private int currentPanic;
    private Long battleId;
    @NotNull
    private List<Leader> leaders;
    private List<Cohort> cohorts;
    private Long commanderId;
}
