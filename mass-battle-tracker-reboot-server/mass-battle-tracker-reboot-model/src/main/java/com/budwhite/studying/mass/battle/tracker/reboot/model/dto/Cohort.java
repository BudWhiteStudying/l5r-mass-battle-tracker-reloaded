package com.budwhite.studying.mass.battle.tracker.reboot.model.dto;

import io.smallrye.common.constraint.NotNull;
import lombok.*;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
@ToString
public class Cohort implements Serializable {
    private Long id;
    @NotNull
    private String name;
    private long armyId;
    @NotNull
    private Long leaderId;
}
