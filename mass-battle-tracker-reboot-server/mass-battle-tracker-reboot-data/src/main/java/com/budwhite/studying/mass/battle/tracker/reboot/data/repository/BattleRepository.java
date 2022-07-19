package com.budwhite.studying.mass.battle.tracker.reboot.data.repository;

import com.budwhite.studying.mass.battle.tracker.reboot.model.entity.BattleEntity;
import io.quarkus.hibernate.orm.panache.PanacheRepository;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class BattleRepository implements PanacheRepository<BattleEntity> {
}
