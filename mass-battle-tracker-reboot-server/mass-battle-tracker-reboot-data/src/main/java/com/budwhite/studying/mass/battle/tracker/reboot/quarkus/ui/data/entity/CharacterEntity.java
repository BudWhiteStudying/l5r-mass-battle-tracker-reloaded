package com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.data.entity;

import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.data.enumeration.CharacterType;
import io.quarkus.hibernate.orm.panache.PanacheEntity;
import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class CharacterEntity extends PanacheEntity {
    public String name;
    public String clan;
    public CharacterType characterType;
    public long armyId;
    public long cohortId;
    public Integer initiative;
}
