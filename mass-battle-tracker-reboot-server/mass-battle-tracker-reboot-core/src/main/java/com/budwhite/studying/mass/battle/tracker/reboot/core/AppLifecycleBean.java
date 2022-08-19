package com.budwhite.studying.mass.battle.tracker.reboot.core;

import io.quarkus.runtime.ApplicationLifecycleManager;
import io.quarkus.runtime.ShutdownEvent;
import io.quarkus.runtime.StartupEvent;
import io.quarkus.runtime.configuration.ProfileManager;
import org.eclipse.microprofile.config.inject.ConfigProperty;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.enterprise.context.ApplicationScoped;
import javax.enterprise.event.Observes;
import java.awt.*;
import java.net.URI;

@ApplicationScoped
public class AppLifecycleBean {

    @ConfigProperty(name="quarkus.http.port")
    private String applicationPort;

    @ConfigProperty(name="quarkus.http.root-path")
    private String applicationContextRoot;
    private static final Logger LOGGER = LoggerFactory.getLogger("ListenerBean");

    private static final int RETRY_TIME_MS = 1000;

    void onStart(@Observes StartupEvent ev) {
        final String applicationURL = String.format("http://localhost:%s%s/", applicationPort, applicationContextRoot);
        LOGGER.info("The application is starting at {}", applicationURL);
        if(!ProfileManager.getActiveProfile().equals("dev")) {
            new Thread(()->{
                for(int i=0;i<5;i++) {
                    if(ApplicationLifecycleManager.getCurrentApplication().isStarted()) {
                        try {
                            LOGGER.info("Attempting to auto-open the default browser");
                            if (Desktop.isDesktopSupported() && Desktop.getDesktop().isSupported(Desktop.Action.BROWSE)) {
                                Desktop.getDesktop().browse(new URI(applicationURL));
                            }
                        }
                        catch (Exception e) {
                            LOGGER.error("Could not open browser: {}", e.getMessage(), e);
                            LOGGER.info("Please manually open the app at {}", applicationURL);
                        }
                        break;
                    }
                    else {
                        LOGGER.info("Application isn't started yet, waiting {} ms", RETRY_TIME_MS);
                        try{
                            Thread.sleep(RETRY_TIME_MS);
                        }
                        catch (InterruptedException e) {
                            LOGGER.error("Interrupted while waiting, where are your manners?!");
                        }
                    }
                }
            }).start();
        }
    }

    void onStop(@Observes ShutdownEvent ev) {
        LOGGER.info("The application is stopping...");
    }

}
