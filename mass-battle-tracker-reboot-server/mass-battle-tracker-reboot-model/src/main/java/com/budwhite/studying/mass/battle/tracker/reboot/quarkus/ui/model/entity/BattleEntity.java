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
public class BattleEntity {
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private String description;
    private boolean zombie;

    public BattleEntity(String name, String description, boolean zombie) {
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
