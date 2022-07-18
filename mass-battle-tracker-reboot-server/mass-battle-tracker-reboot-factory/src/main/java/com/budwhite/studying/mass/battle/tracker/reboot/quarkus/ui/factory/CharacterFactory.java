package com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.factory;

import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.data.entity.CharacterEntity;
import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.factory.dto.Character;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class CharacterFactory {

    public Character getCharacter(CharacterEntity characterEntity) {
        return Character.builder()
                .id(characterEntity.id)
                .armyId(characterEntity.armyId)
                .clan(characterEntity.clan)
                .characterType(characterEntity.characterType)
                .cohortId(characterEntity.cohortId)
                .name(characterEntity.name)
                .initiative(characterEntity.initiative) // could be null if it's not a commander
                .build();
    }
}
