package com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
public class Cohort implements Serializable {
    private long id;
    private String name;
    private long armyId;
    private Leader leader;
}
