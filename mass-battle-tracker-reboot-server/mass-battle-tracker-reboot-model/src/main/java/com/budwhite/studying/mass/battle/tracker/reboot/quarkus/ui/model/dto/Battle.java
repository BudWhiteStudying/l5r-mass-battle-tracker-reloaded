package com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Builder
public class Battle implements Serializable {
    private long id;
    private String name;
    private String description;
    private boolean zombie;
    private List<Army> involvedArmies;
}
