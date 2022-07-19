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
public class ArmyEntity {
    @Id
    @GeneratedValue
    private Long id;

    private String name;
    private long commanderId;
    private String description;
    private String mainClan;
    private int strength;
    private int discipline;
    private int currentCasualties;
    private int attritionReduction;

    private int currentPanic;
    private Long battleId;

    public void clone(ArmyEntity armyEntity) {
        this.id = armyEntity.id;
        this.name = armyEntity.getName();
        this.commanderId = armyEntity.getCommanderId();
        this.description = armyEntity.getDescription();
        this.mainClan = armyEntity.getMainClan();
        this.strength = armyEntity.getStrength();
        this.discipline = armyEntity.getDiscipline();
        this.currentCasualties = armyEntity.getCurrentCasualties();
        this.attritionReduction = armyEntity.getAttritionReduction();
        this.currentPanic = armyEntity.getCurrentPanic();
        this.battleId = armyEntity.getBattleId();
    }
}
