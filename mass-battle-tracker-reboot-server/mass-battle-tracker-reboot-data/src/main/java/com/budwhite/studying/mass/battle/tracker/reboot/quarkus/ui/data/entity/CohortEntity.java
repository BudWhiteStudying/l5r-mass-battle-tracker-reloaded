package com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.data.entity;

import io.quarkus.hibernate.orm.panache.PanacheEntity;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class CohortEntity extends PanacheEntity {
    public String name;
    public long leaderId;
    public long armyId;
}
