package com.budwhite.studying.mass.battle.tracker.reboot.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
//OLD
public class RoundScore {
    private int totalAttritionSuffered;
    private int totalPanicSuffered;
    private int totalPanicRemoved;
    private int totalCasualtiesSuffered;
}
