package com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.feature.hello.service;

import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.data.entity.Person;
import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.model.dto.Greeting;

import javax.enterprise.context.ApplicationScoped;
import java.util.List;

@ApplicationScoped
public class GreetingService {

    public String getGreeting() {
        final List<Person> people = Person.listAll();
        return new Greeting(people.isEmpty() ? new Person() : people.get(0)).toString();
    }
}
