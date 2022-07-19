package com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.feature.battle.service;

import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.data.repository.ArmyRepository;
import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.data.repository.CohortRepository;
import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.data.repository.LeaderRepository;
import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.factory.ArmyFactory;
import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.factory.CohortFactory;
import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.factory.LeaderFactory;
import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.model.dto.Armies;
import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.model.dto.Cohorts;
import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.model.dto.Leaders;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import java.util.stream.Collectors;

@ApplicationScoped
public class AdminService {
    
    @Inject
    LeaderRepository leaderRepository;
    
    @Inject
    CohortRepository cohortRepository;
    
    @Inject
    ArmyRepository armyRepository;
    
    @Inject
    LeaderFactory leaderFactory;
    
    @Inject
    CohortFactory cohortFactory;
    
    @Inject
    ArmyFactory armyFactory;
    
    public Leaders getLeaders() {
        return new Leaders(leaderRepository.findAll().stream().map(leaderEntity -> leaderFactory.getLeader(leaderEntity)).collect(Collectors.toList()));
    }

    public Cohorts getCohorts() {
        return new Cohorts(cohortRepository.findAll().stream().map(cohortEntity -> cohortFactory.getCohort(cohortEntity)).collect(Collectors.toList()));
    }

    public Armies getArmies() {
        return new Armies(armyRepository.findAll().stream().map(armyEntity -> armyFactory.getArmy(armyEntity)).collect(Collectors.toList()));
    }
}
