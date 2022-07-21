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
public class LeaderEntity {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String clan;
    private long armyId;
    private Integer initiative;
    private boolean commander = false;

    public void clone(LeaderEntity leaderEntity) {
        this.id = leaderEntity.getId();
        this.name = leaderEntity.getName();
        this.clan = leaderEntity.getClan();
        this.armyId = leaderEntity.getArmyId();
        this.initiative = leaderEntity.getInitiative();
        this.commander = leaderEntity.isCommander();
    }
}
