package com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.factory;

import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.model.entity.BattleEntity;
import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.data.repository.ArmyRepository;
import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.model.dto.Battle;
import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.model.dto.Battles;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import java.util.List;
import java.util.stream.Collectors;

@ApplicationScoped
public class BattleFactory {

    @Inject
    private ArmyFactory armyFactory;

    @Inject
    private ArmyRepository armyRepository;

    public Battle getBattle(BattleEntity battleEntity) {
        return Battle.builder()
                .id(battleEntity.getId())
                .description(battleEntity.getDescription())
                .name(battleEntity.getName())
                .zombie(battleEntity.isZombie())
                .involvedArmies(armyRepository.find("battleId", battleEntity.getId()).stream().map(armyState -> armyFactory.getArmy(armyState)).collect(Collectors.toList()))
                .build();
    }

    public BattleEntity toBattleEntity(Battle battle) {
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
