package com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.factory.dto;

import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.data.enumeration.CharacterType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class Character implements Serializable {
    private long id;
    private String name;
    private String clan;
    private CharacterType characterType;
    private long armyId;
    private long cohortId;
    private Integer initiative;
}
