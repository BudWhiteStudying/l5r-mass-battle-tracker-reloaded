package com.budwhite.studying.mass.battle.tracker.reboot.feature.battle.rest;

import com.budwhite.studying.mass.battle.tracker.reboot.feature.battle.service.AdminService;
import com.budwhite.studying.mass.battle.tracker.reboot.model.dto.Armies;
import com.budwhite.studying.mass.battle.tracker.reboot.model.dto.Cohorts;
import com.budwhite.studying.mass.battle.tracker.reboot.model.dto.Leaders;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/api/admin")
public class AdminResource {

    @Inject
    private AdminService adminService;

    @GET
    @Path("/leaders")
    @Produces(value = MediaType.APPLICATION_JSON)
    public Leaders getLeaders() {
        return adminService.getLeaders();
    }

    @GET
    @Path("/cohorts")
    @Produces(value = MediaType.APPLICATION_JSON)
    public Cohorts getCohorts() {
        return adminService.getCohorts();
    }

    @GET
    @Path("/armies")
    @Produces(value = MediaType.APPLICATION_JSON)
    public Armies getArmies() {
        return adminService.getArmies();
    }
}
