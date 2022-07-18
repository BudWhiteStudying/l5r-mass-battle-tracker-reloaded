QuarkusUi Project
===

This project uses Quarkus, the Supersonic Subatomic Java Framework.

If you want to learn more about Quarkus, please visit its website: [https://quarkus.io](https://quarkus.io).

Notes about transitioning from Spring boot to Quarkus
--

Data sources
---
- the equivalent of Spring JPA is Panache entities (see the `data` module)
- basically there is no need for DAO objects anymore, since JPA repo capabilities are included
within the entity objects that extend the `PanacheEntity` class
- apart from that, connection to a data source is pretty much the same (see `application.properties`
in the `core` module)

Unit testing
---
- looks the same as the JUnit/Jupiter kind of thing you do with Spring Boot, but I still need to
get my hands dirty with mocking

Dependency injection
---
- whereas in Spring you would annotate e.g. a service class with the `@Service` annotation, and then
declare it in another class with the `@Autowired` annotation, in Quarkus you annotate the service class
with the `@ApplicationScope` annotation, and then declare it with the `@Inject` annotation in another class
- Quarkus actually offers backwards compatibility with Spring DI through the `quarkus-spring-di` feature,
but I think it makes sense to do things in a "quarky" way, rather than trying to replicate the patterns
of a different framework

Packaging
---
- There is no way to build a `.war` file from Quarkus, get over it
- Quarkus is made for packaging containerized applications

Running the application in dev mode
--

You can run your application in dev mode that enables live coding using:
```shell script
./mvnw compile quarkus:dev
```

> **_NOTE:_**  Quarkus now ships with a Dev UI, which is available in dev mode only at http://localhost:8080/q/dev/.

Packaging and running the application
--

The application can be packaged using:
```shell script
./mvnw package
```
It produces the `quarkus-run.jar` file in the `target/quarkus-app/` directory.
Be aware that it’s not an _über-jar_ as the dependencies are copied into the `target/quarkus-app/lib/` directory.

The application is now runnable using `java -jar target/quarkus-app/quarkus-run.jar`.

If you want to build an _über-jar_, execute the following command:
```shell script
./mvnw package -Dquarkus.package.type=uber-jar
```

The application, packaged as an _über-jar_, is now runnable using `java -jar target/*-runner.jar`.

Creating a native executable
--

You can create a native executable using: 
```shell script
./mvnw package -Pnative
```

Or, if you don't have GraalVM installed, you can run the native executable build in a container using: 
```shell script
./mvnw package -Pnative -Dquarkus.native.container-build=true
```

You can then execute your native executable with: `./target/enterprise-application-1.0.0-SNAPSHOT-runner`

If you want to learn more about building native executables, please consult https://quarkus.io/guides/maven-tooling.

Provided Code
--

RESTEasy Reactive

Easily start your Reactive RESTful Web Services

[Related guide section...](https://quarkus.io/guides/getting-started-reactive#reactive-jax-rs-resources)
