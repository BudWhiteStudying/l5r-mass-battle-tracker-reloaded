package com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.factory;

import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.data.entity.ArmyStateEntity;
import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.data.entity.CharacterEntity;
import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.data.entity.CohortEntity;
import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.factory.dto.Army;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import java.util.stream.Collectors;

@ApplicationScoped
public class ArmyFactory {

    @Inject
    private CohortFactory cohortFactory;

    @Inject
    private CharacterFactory characterFactory;

    public Army getArmy(ArmyStateEntity armyStateEntity) {
        ArmyStateEntity armyState = ArmyStateEntity.findById(armyStateEntity.id);
        return Army.builder()
                .id(armyStateEntity.id)
                .name(armyStateEntity.name)
                .description(armyStateEntity.description)
                .mainClan(armyStateEntity.mainClan)
                .strength(armyStateEntity.strength)
                .discipline(armyStateEntity.discipline)
                .cohorts(CohortEntity.find("armyId",armyStateEntity.id).stream().map(cohort -> cohortFactory.getCohort((CohortEntity) cohort)).collect(Collectors.toList()))
                .currentCasualties(armyState.currentCasualties)
                .attritionReduction(armyState.attritionReduction)
                .currentPanic(armyState.currentPanic)
                .battleId(armyState.battleId)
                .commander(characterFactory.getCharacter(CharacterEntity.findById(armyStateEntity.commanderId)))
                .build();
    }
}
