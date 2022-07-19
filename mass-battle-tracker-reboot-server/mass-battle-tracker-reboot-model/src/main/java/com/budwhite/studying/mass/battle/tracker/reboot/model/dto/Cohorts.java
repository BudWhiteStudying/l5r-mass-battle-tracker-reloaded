package com.budwhite.studying.mass.battle.tracker.reboot.model.dto;

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
public class Cohorts implements Serializable {
    private List<Cohort> cohorts;
}
