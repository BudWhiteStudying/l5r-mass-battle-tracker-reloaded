package com.budwhite.studying.mass.battle.tracker.reboot.model.dto;

import io.smallrye.common.constraint.NotNull;
import lombok.*;

import java.io.Serializable;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
@ToString
public class Battle implements Serializable {
    private long id;
    @NotNull
    private String name;
    @NotNull
    private String description;
    private boolean zombie;
    private List<Army> involvedArmies;
}
