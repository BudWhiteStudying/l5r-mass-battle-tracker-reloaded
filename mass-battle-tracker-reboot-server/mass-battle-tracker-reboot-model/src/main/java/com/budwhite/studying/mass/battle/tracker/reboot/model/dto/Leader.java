package com.budwhite.studying.mass.battle.tracker.reboot.model.dto;

import io.smallrye.common.constraint.NotNull;
import lombok.*;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
public class Leader implements Serializable {
    private Long id;
    @NotNull
    private String name;
    @NotNull
    private String clan;
    private boolean commander;
    @NotNull
    private long armyId;
    private Integer initiative;
}
