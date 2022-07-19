package com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.model.entity;

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
public class CohortEntity {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private long leaderId;
    private long armyId;

    public void clone(CohortEntity cohortEntity) {
        this.id = cohortEntity.getId();
        this.name = cohortEntity.getName();
        this.leaderId = cohortEntity.getLeaderId();
        this.armyId = cohortEntity.getArmyId();
    }
}
