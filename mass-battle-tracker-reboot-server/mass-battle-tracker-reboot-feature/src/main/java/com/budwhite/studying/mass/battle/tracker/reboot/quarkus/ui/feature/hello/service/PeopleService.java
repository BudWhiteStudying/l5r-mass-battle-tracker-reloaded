package com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.feature.hello.service;

import com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.data.entity.Person;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;
import java.util.List;
@ApplicationScoped
public class PeopleService {

    @Transactional
    public void addPerson(String name, int age) {
        new Person(name, age).persist();
    }

    public List<Person> getAllPeople() {
        return Person.listAll();
    }
}
