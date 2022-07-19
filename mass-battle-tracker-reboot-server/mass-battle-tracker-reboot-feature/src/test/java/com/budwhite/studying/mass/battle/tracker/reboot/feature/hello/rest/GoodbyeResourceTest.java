package com.budwhite.studying.mass.battle.tracker.reboot.feature.hello.rest;

import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;

@QuarkusTest
public class GoodbyeResourceTest {

    @Test
    public void testGoodbyeEndpoint() {
        given()
          .when().get("/goodbye")
          .then()
             .statusCode(200)
             .body(is("Goodbye from RESTEasy Reactive"));
    }

}