package com.budwhite.studying.mass.battle.tracker.reboot.model.dto;

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
    private String name;
    private String description;
    private boolean zombie;
    private List<Army> involvedArmies;
}
