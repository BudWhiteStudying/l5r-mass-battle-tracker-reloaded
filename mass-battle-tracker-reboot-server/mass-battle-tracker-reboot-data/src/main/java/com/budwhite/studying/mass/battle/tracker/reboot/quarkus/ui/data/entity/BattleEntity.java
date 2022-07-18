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
public class BattleEntity extends PanacheEntity {
    public String name;
    public String description;
    public boolean zombie;

    public BattleEntity(long id, String name, String description, boolean zombie) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.zombie = zombie;
    }

    public void clone(BattleEntity battleEntity) {
        this.name = battleEntity.name;
        this.description = battleEntity.description;
        this.zombie = battleEntity.zombie;
    }
}
