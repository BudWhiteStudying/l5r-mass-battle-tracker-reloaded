package com.budwhite.studying.mass.battle.tracker.reboot.factory;

import com.budwhite.studying.mass.battle.tracker.reboot.model.entity.LeaderEntity;
import com.budwhite.studying.mass.battle.tracker.reboot.model.dto.Leader;

import javax.enterprise.context.ApplicationScoped;

@ApplicationScoped
public class LeaderFactory {

    public Leader getLeader(LeaderEntity leaderEntity) {
        return leaderEntity!=null ?
                Leader.builder()
                .id(leaderEntity.getId())
                .armyId(leaderEntity.getArmyId())
                .clan(leaderEntity.getClan())
                .commander(leaderEntity.isCommander())
                .cohortId(leaderEntity.getCohortId())
                .name(leaderEntity.getName())
                .initiative(leaderEntity.getInitiative()) // could be null if it's not a commander
                .build()
                : null;
    }

    public LeaderEntity toLeaderEntity(Leader leader) {
        return new LeaderEntity(
                leader.getId(),
                leader.getName(),
                leader.getClan(),
                leader.getArmyId(),
                leader.getCohortId(),
                leader.getInitiative(),
                leader.isCommander()
        );
    }
}
