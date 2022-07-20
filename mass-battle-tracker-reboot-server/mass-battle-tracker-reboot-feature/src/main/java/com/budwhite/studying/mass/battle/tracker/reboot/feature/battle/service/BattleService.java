package com.budwhite.studying.mass.battle.tracker.reboot.feature.battle.service;

import com.budwhite.studying.mass.battle.tracker.reboot.data.repository.ArmyRepository;
import com.budwhite.studying.mass.battle.tracker.reboot.data.repository.LeaderRepository;
import com.budwhite.studying.mass.battle.tracker.reboot.data.repository.CohortRepository;
import com.budwhite.studying.mass.battle.tracker.reboot.factory.ArmyFactory;
import com.budwhite.studying.mass.battle.tracker.reboot.factory.CohortFactory;
import com.budwhite.studying.mass.battle.tracker.reboot.factory.LeaderFactory;
import com.budwhite.studying.mass.battle.tracker.reboot.model.dto.Army;
import com.budwhite.studying.mass.battle.tracker.reboot.model.entity.ArmyEntity;
import com.budwhite.studying.mass.battle.tracker.reboot.model.entity.BattleEntity;
import com.budwhite.studying.mass.battle.tracker.reboot.data.repository.BattleRepository;
import com.budwhite.studying.mass.battle.tracker.reboot.factory.BattleFactory;
import com.budwhite.studying.mass.battle.tracker.reboot.model.dto.Battle;
import com.budwhite.studying.mass.battle.tracker.reboot.model.dto.Battles;
import com.budwhite.studying.mass.battle.tracker.reboot.model.entity.LeaderEntity;
import com.budwhite.studying.mass.battle.tracker.reboot.model.entity.CohortEntity;
import org.jboss.logging.Logger;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;

@ApplicationScoped
public class BattleService {

    @Inject
    BattleFactory battleFactory;

    @Inject
    ArmyFactory armyFactory;

    @Inject
    CohortFactory cohortFactory;

    @Inject
    LeaderFactory leaderFactory;

    @Inject
    BattleRepository battleRepository;

    @Inject
    ArmyRepository armyRepository;

    @Inject
    CohortRepository cohortRepository;

    @Inject
    LeaderRepository leaderRepository;

    private static final Logger LOG = Logger.getLogger(BattleService.class);

    @Transactional
    public Battles getAllBattles() {
        LOG.debug("Reached getAllBattles");
        return battleFactory.getBattles(battleRepository.listAll());
    }

    @Transactional
    public Battle initializeBattle() {
        LOG.debug("Reached initializeBattle");
        BattleEntity battleEntity = new BattleEntity("", "", true);
        battleRepository.persistAndFlush(battleEntity);
        return battleFactory.getBattle(battleEntity);
    }

    @Transactional
    public Battle updateBattle(Battle battle) {
        LOG.debug("Reached updateBattle with battle "+battle.toString());
        updateBattleEntity(battle);
        return battleFactory.getBattle(battleRepository.findById(battle.getId()));
    }

    private void updateBattleEntity(Battle battle) {
        LOG.debug("Reached updateBattleEntity with battle "+battle.toString());
        BattleEntity battleEntity = battleRepository.findById(battle.getId());
        battleEntity.clone(battleFactory.toBattleEntity(battle));
        battleRepository.persistAndFlush(battleEntity);
        updateArmyEntity(battle);
    }
    private void updateArmyEntity(Battle battle){
        LOG.debug("Reached updateArmyEntity with battle "+battle.toString());
        battle.getInvolvedArmies()
                .forEach(army -> {
                    LOG.debug("Processing army '"+army.getName()+"'");
                    ArmyEntity armyEntity;
                    if(army.getId()!=null) {
                        LOG.debug("ArmyId is NOT null, searching for a match");
                        armyEntity = armyRepository.findById(army.getId());
                        if(armyEntity!=null) {
                            LOG.debug("Match found, cloning DTO");
                            armyEntity.clone(armyFactory.toArmyEntity(army));//
                        }
                        else {
                            LOG.debug("Match NOT found");
                            armyEntity = armyFactory.toArmyEntity(army);
                        }
                    }
                    else {
                        LOG.debug("ArmyId is null");
                        armyEntity = armyFactory.toArmyEntity(army);
                    }
                    LOG.debug("About to persist "+armyEntity.toString());
                    armyRepository.persistAndFlush(armyEntity);
                    LOG.debug("Persisted");
                    updateCohortEntities(army, armyEntity);
                    updateLeaderEntities(army, armyEntity);
                });
    }
    private void updateCohortEntities(Army army, ArmyEntity armyEntity){
        LOG.debug("Reached updateCohortEntities with army "+army.toString());
        army.getCohorts()
                .forEach(cohort -> {
                    CohortEntity cohortEntity;
                    if(cohort!=null && cohort.getId()!=null) {
                        cohortEntity = cohortRepository.findById(cohort.getId());
                        if(cohortEntity!=null) {
                            cohortEntity.clone(cohortFactory.toCohortEntity(cohort));
                        }
                        else {
                            cohortEntity = cohortFactory.toCohortEntity(cohort);
                        }
                        cohortRepository.persistAndFlush(cohortEntity);
                    }
                });
    }
    private void updateLeaderEntities(Army army, ArmyEntity armyEntity){
        LOG.debug("Reached updateLeaderEntities with army "+army.toString());

        // first, "promote" the leader to commander if necessary
        /*
        if(army.getCommanderId()!=null) {
            LeaderEntity commanderEntity = leaderRepository.findById(army.getCommanderId());
            if(!commanderEntity.isCommander()) {
                LOG.debug("Promoting "+commanderEntity.getName()+" to commander");
                commanderEntity.setCommander(true);
            }
            leaderRepository.persistAndFlush(commanderEntity);
        }
        */
        army.getLeaders().forEach(
                leader -> {
                    LeaderEntity leaderEntity;
                    if(leader.getId()!=null) {
                        leaderEntity = leaderRepository.findById(leader.getId());
                        if(leaderEntity!=null) {
                            leaderEntity.clone(leaderFactory.toLeaderEntity(leader));
                        }
                        else {
                            leaderEntity = leaderFactory.toLeaderEntity(leader);
                            leaderEntity.setArmyId(armyEntity.getId());
                        }
                    }
                    else {
                        leaderEntity = leaderFactory.toLeaderEntity(leader);
                        leaderEntity.setArmyId(armyEntity.getId());
                    }
                    LOG.debug("About to persist "+leaderEntity);
                    leaderRepository.persistAndFlush(leaderEntity);
                }
        );
    }
}
