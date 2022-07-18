package com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.feature.hello.rest;

import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.data.entity.Person;
import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.feature.hello.service.PeopleService;

import javax.inject.Inject;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import java.util.List;

@Path("/people")
public class PeopleResource {

    @Inject
    private PeopleService peopleService;

    @GET
    public List<Person> getAllPeople() {
        return peopleService.getAllPeople();
    }

    @POST
    @Consumes(value = MediaType.APPLICATION_JSON)
    @Produces(value = MediaType.TEXT_PLAIN)
    public String addPerson(Person person) {
        try {
            peopleService.addPerson(person.getName(), person.getAge());
            return "Ok";
        }
        catch (Exception e) {
            return e.getMessage();
        }
    }
}
