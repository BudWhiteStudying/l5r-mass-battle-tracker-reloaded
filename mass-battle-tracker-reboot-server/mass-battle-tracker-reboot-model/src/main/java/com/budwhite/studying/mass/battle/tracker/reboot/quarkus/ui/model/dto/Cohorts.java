package com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Cohorts implements Serializable {
    private List<Cohort> cohorts;
}
