package com.budwhite.studying.mass.battle.tracker.reboot.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
//OLD
public class RoundState implements Serializable {
    private int roundIndex;
    private Leader actingCommander;
    private Leader actingLeader;
    private Map<Long, StrategicObjective> currentObjectivePerArmyId;
    private Map<Long, RoundScore> scorePerArmyId;
    private List<ExecutedAction> actionHistory;
}
