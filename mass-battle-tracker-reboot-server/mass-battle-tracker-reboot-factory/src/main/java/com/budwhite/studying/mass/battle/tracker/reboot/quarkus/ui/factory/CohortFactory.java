package com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.factory;

import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.model.entity.CohortEntity;
import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.data.repository.LeaderRepository;
import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.model.dto.Cohort;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;

@ApplicationScoped
public class CohortFactory {

    @Inject
    private LeaderRepository leaderRepository;

    @Inject
    private LeaderFactory leaderFactory;

    public Cohort getCohort(CohortEntity cohortEntity) {
        return Cohort.builder()
                .id(cohortEntity.getId())
                .armyId(cohortEntity.getArmyId())
                .leader(leaderFactory.getLeader(leaderRepository.findById(cohortEntity.getLeaderId())))
                .name(cohortEntity.getName())
                .build();
    }

    public CohortEntity toCohortEntity(Cohort cohort) {
        return new CohortEntity(
                cohort.getId(),
                cohort.getName(),
                cohort.getLeader().getId(),
                cohort.getArmyId()
        );
    }
}
