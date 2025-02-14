package com.budwhite.studying.mass.battle.tracker.reboot.feature.battle.rest;

import com.budwhite.studying.mass.battle.tracker.reboot.model.dto.Battle;
import com.budwhite.studying.mass.battle.tracker.reboot.model.dto.Battles;
import com.budwhite.studying.mass.battle.tracker.reboot.feature.battle.service.BattleService;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;

@Path("/api/battle")
public class BattleResource {

    @Inject
    private BattleService battleService;

    @GET
    @Path("/all")
    @Produces(value = MediaType.APPLICATION_JSON)
    public Battles getBattles() {
        return battleService.getAllBattles();
    }

    @GET
    @Path("/unfinished")
    @Produces(value = MediaType.APPLICATION_JSON)
    public Battles getUnfinishedBattles() {
        return battleService.getUnfinishedBattles();
    }

    @GET
    @Path("/completed")
    @Produces(value = MediaType.APPLICATION_JSON)
    public Battles getCompletedBattles() {
        return battleService.getCompletedBattles();
    }

    @POST
    @Produces(value = MediaType.APPLICATION_JSON)
    public Battle getBattle() {
        return battleService.initializeBattle();
    }

    @PUT
    @Consumes(value = MediaType.APPLICATION_JSON)
    @Produces(value = MediaType.APPLICATION_JSON)
    public Battle updateBattle(Battle battle) {
        return battleService.updateBattle(battle);
    }
}
