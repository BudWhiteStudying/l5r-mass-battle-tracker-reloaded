package com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.factory;

import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.data.entity.ArmyStateEntity;
import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.data.entity.BattleEntity;
import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.factory.dto.Battle;
import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.factory.dto.Battles;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import java.util.List;
import java.util.stream.Collectors;

@ApplicationScoped
public class BattleFactory {

    @Inject
    private ArmyFactory armyFactory;

    public Battle getBattle(BattleEntity battleEntity) {
        return Battle.builder()
                .id(battleEntity.id)
                .description(battleEntity.description)
                .name(battleEntity.name)
                .zombie(battleEntity.zombie)
                .involvedArmies(ArmyStateEntity.find("battleId", battleEntity.id).stream().map(armyState -> armyFactory.getArmy((ArmyStateEntity) armyState)).collect(Collectors.toList()))
                .build();
    }

    public BattleEntity toBattle(Battle battle) {
        return new BattleEntity(
                battle.getId(),
                battle.getName(),
                battle.getDescription(),
                battle.isZombie()
        );
    }

    public Battles getBattles(List<BattleEntity> battleEntities) {
        return new Battles(
                battleEntities.stream()
                        .map(this::getBattle)
                        .collect(Collectors.toList())
        );
    }
}
