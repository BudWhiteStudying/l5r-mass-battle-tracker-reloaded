package com.budwhite.studying.mass.battle.tracker.reboot.model.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Data
public class BattleEntity {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String description;
    private boolean defined;
    private boolean ended;
    private Integer lastCompletedRound;

    public BattleEntity(String name, String description, boolean defined, boolean ended) {
        this.name = name;
        this.description = description;
        this.defined = defined;
        this.ended = ended;
    }

    public void clone(BattleEntity battleEntity) {
        this.name = battleEntity.name;
        this.description = battleEntity.description;
        this.defined = battleEntity.defined;
        this.ended = battleEntity.ended;
        this.lastCompletedRound = battleEntity.lastCompletedRound;
    }
}
