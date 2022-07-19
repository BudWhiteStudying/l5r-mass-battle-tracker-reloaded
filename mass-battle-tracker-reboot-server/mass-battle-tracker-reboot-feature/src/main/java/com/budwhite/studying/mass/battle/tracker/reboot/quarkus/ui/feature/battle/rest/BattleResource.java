package com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.feature.battle.rest;

import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.model.dto.Battle;
import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.model.dto.Battles;
import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.feature.battle.service.BattleService;

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
