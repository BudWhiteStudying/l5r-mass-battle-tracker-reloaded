package com.budwhite.studying.mass.battle.tracker.reboot.model.dto;

import lombok.*;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
@ToString
public class Cohort implements Serializable {
    private Long id;
    private String name;
    private long armyId;
    private Leader leader;
}
