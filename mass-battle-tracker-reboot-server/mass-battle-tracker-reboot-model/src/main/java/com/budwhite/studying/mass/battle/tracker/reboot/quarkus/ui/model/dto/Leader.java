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
public class Leader implements Serializable {
    private long id;
    private String name;
    private String clan;
    private boolean commander;
    private long armyId;
    private long cohortId;
    private Integer initiative;
}
