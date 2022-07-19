package com.budwhite.studying.mass.battle.tracker.reboot.model.dto;

import lombok.*;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class Leader implements Serializable {
    private Long id;
    private String name;
    private String clan;
    private boolean commander;
    private long armyId;
    private long cohortId;
    private Integer initiative;
}
