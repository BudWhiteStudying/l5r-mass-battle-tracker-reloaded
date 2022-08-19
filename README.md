L5R Mass Battle Tracker
===

The purpose of this project is to assist the Game Master of a
[Legend of the Five Rings 5e](https://www.fantasyflightgames.com/en/legend-of-the-five-rings-roleplaying-game/)
game in managing the many variables they have to keep track of, when orchestrating a Conflict of type Mass Battle.

Summary
--

- [Brief technical description](#brief-technical-description)
- [Requirements](#requirements)
- [Running the application](#running-the-application)
- [A note about copyright](#a-note-about-copyright)

Brief technical description
--
This project is a Java webapp, packaged in a runnable `.jar` file. After successfully starting the application by
running the `.jar` file, the user interface of the web application will be available from any browser that is able to
connect to the local host. The application relies on a file-based database, i.e. it reads and writes data on an external
file, so that even if the application is stopped it will be able to resume the previous state at the following start.

Requirements
--
- Java 11 or newer

**How to download and install Java 11?**

1. Get the `.zip` package from the
[Oracle Archive website](https://www.oracle.com/uk/java/technologies/javase/jdk11-archive-downloads.html) (pick
the package type matching your operating system as indicated in the *name* of the package);
2. Unzip the package, and copy the unzipped directory (which will be named like `jdk-11.0.10.jdk`) in the location
where you keep other Java installations (e.g. it could be `/Library/Java/JavaVirtualMachines/` on a Mac);
3. If you're on a Mac, update the `JAVA_HOME` environment variable to the location of `Home` subdirectory within
the directory you just moved e.g. `/Library/Java/JavaVirtualMachines/jdk-11.0.10.jdk/Contents/Home`; if you're
on Windows edit the `Path` environment variable by adding a new record *at the top of the list* containing the
location of the `Home` subdirectory within the directory you just moved;
4. Open a new Terminal window and issue the `java -version` command, it should tell you that you're using Java 11

Running the application
--

1. download the `.jar` file of the latest release (use the Releases function here on GitHub)
2. open a `Terminal window` (MacOS) or a `cmd` window (Windows)
3. navigate to the location of the `.jar` file
4. execute the command `java -jar mass-battle-tracker-runnable.jar`
5. a quick startup operation will be executed, wait 3-5s for the application to start up
6. the application will attempt to open the default browser defined by your OS, to the URL
where the application is locally exposed; if this operation fails (it could, depending on
your OS), you will have to execute it manually, thus opening a web browser, and navigating
to the address
[http://localhost:8080/mass-battle-tracker-reboot/](http://localhost:8080/mass-battle-tracker-reboot/);
if you're on Windows pay specific attention to the trailing `/` character, since the web page will not load without it
7. the application is ready to be used, click the `New Battle` button in order to start orchestrating a brand new
battle, or click the `Resume Battle` button in order to list past, unfinished battles, and eventually resume one
of those into play again; finally you can click on the `Battle History` button in order to list past, completed battles.

> The application will generate a database file in the home directory of the OS running it, more specifically
> database files are saved in a subdirectory, in the home directory of the user running the JAR i.e. they are saved in
> `~/l5r-mbt/database`.

A note about copyright
--
This project is an "empty shell", i.e. it contains basically no explicit information coming from the L5R rulebooks.
For example the user doesn't get to *select* an action type to perform during a round, as that would require the
application to be aware of the different action types that are described on the rulebooks, instead the user is
required to *type* the action name in a plain input field.

The only concepts that can be traced back to the rulebook are that of *Army*, *Clan*, *Leader*, etc; but those should
be generic enough not to stir any trouble in terms of IP and copyright.
