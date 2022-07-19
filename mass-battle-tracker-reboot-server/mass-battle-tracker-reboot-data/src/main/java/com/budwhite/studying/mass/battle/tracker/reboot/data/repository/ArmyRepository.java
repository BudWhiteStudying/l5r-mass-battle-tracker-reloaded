package com.budwhite.studying.mass.battle.tracker.reboot.data.repository;

import com.budwhite.studying.mass.battle.tracker.reboot.model.entity.ArmyEntity;
import io.quarkus.hibernate.orm.panache.PanacheRepository;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class ArmyRepository implements PanacheRepository<ArmyEntity> {
}
