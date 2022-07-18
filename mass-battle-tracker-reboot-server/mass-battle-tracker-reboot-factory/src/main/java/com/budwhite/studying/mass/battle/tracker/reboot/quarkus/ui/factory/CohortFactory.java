package com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.factory;

import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.data.entity.CharacterEntity;
import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.data.entity.CohortEntity;
import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.factory.dto.Cohort;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class CohortFactory {

    public Cohort getCohort(CohortEntity cohortEntity) {
        return Cohort.builder()
                .id(cohortEntity.id)
                .armyId(cohortEntity.armyId)
                .leader(CharacterEntity.findById(cohortEntity.leaderId))
                .name(cohortEntity.name)
                .build();
    }
}
