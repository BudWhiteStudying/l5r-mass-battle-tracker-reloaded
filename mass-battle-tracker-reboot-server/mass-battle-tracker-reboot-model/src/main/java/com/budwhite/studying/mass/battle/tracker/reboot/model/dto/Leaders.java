package com.budwhite.studying.mass.battle.tracker.reboot.model.dto;

import io.smallrye.common.constraint.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.io.Serializable;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
public class Leaders implements Serializable {
    @NotNull
    private List<Leader> leaders;
}
