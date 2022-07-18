package com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.feature.battle.service;

import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.data.entity.BattleEntity;
import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.factory.BattleFactory;
import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.factory.dto.Battle;
import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.factory.dto.Battles;

import javax.enterprise.context.ApplicationScoped;
import javax.inject.Inject;
import javax.transaction.Transactional;

@ApplicationScoped
public class BattleService {

    @Inject
    BattleFactory battleFactory;

    public Battles getAllBattles() {
        return battleFactory.getBattles(BattleEntity.listAll());
    }

    @Transactional
    public Battle initializeBattle() {
        BattleEntity battleEntity = new BattleEntity("", "", true);
        battleEntity.persistAndFlush();
        return battleFactory.getBattle(battleEntity);
    }

    @Transactional
    public Battle updateBattle(Battle battle) {
        BattleEntity persistedBattle = BattleEntity.findById(battle.getId());
        persistedBattle.clone(battleFactory.toBattle(battle));
        persistedBattle.persistAndFlush();
        return battle;
    }
}
