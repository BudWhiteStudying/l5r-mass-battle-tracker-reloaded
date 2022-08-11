package com.budwhite.studying.mass.battle.tracker.reboot.factory;

import com.budwhite.studying.mass.battle.tracker.reboot.data.repository.ArmyRepository;
import com.budwhite.studying.mass.battle.tracker.reboot.data.repository.LeaderRepository;
import com.budwhite.studying.mass.battle.tracker.reboot.data.repository.CohortRepository;
import com.budwhite.studying.mass.battle.tracker.reboot.model.dto.Army;
import com.budwhite.studying.mass.battle.tracker.reboot.model.entity.ArmyEntity;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import java.util.stream.Collectors;

@ApplicationScoped
public class ArmyFactory {

    @Inject
    private CohortFactory cohortFactory;

    @Inject
    private LeaderFactory leaderFactory;

    @Inject
    private CohortRepository cohortRepository;

    @Inject
    private LeaderRepository leaderRepository;

    @Inject
    private ArmyRepository armyRepository;

    public Army getArmy(ArmyEntity armyEntity) {
        ArmyEntity armyState = armyRepository.findById(armyEntity.getId());
        return Army.builder()
                .id(armyEntity.getId())
                .name(armyEntity.getName())
                .description(armyEntity.getDescription())
                .mainClan(armyEntity.getMainClan())
                .strength(armyEntity.getStrength())
                .discipline(armyEntity.getDiscipline())
                .cohorts(cohortRepository.find("armyId", armyEntity.getId()).stream().map(cohortEntity -> cohortFactory.getCohort(cohortEntity)).collect(Collectors.toList()))
                .leaders(leaderRepository.find("armyId", armyEntity.getId()).stream().map(leaderEntity -> leaderFactory.getLeader(leaderEntity)).collect(Collectors.toList()))
                .currentCasualties(armyState.getCurrentCasualties())
                .currentPanic(armyState.getCurrentPanic())
                .battleId(armyState.getBattleId())
                .commanderId(armyEntity.getCommanderId())
                .build();
    }

    public ArmyEntity toArmyEntity(Army army) {
        return new ArmyEntity(
                army.getId(),
                army.getName(),
                army.getCommanderId(),
                army.getDescription(),
                army.getMainClan(),
                army.getStrength(),
                army.getDiscipline(),
                army.getCurrentCasualties(),
                army.getCurrentPanic(),
                army.getBattleId()
        );
    }
}
