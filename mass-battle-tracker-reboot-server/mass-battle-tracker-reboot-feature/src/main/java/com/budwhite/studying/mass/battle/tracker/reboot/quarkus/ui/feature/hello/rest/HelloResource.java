package com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.feature.hello.rest;

import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.feature.hello.service.GreetingService;

import javax.inject.Inject;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/hello")
public class HelloResource {

    @Inject
    private GreetingService greetingService;

    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String hello() {
        return greetingService.getGreeting();
    }
}