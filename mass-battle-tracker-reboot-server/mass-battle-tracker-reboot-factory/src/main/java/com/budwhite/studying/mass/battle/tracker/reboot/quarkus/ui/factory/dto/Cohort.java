package com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.factory.dto;

import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.data.entity.CharacterEntity;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Cohort implements Serializable {
    private long id;
    private String name;
    private long armyId;
    private CharacterEntity leader;
}
