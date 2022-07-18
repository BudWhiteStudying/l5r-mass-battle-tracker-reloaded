package com.budwhite.studying.mass.battle.tracker.reboot.quarkus.ui.data.enumeration;

public enum CharacterType {
    CHARACTER(Values.CHARACTER),
    LEADER(Values.LEADER),
    COMMANDER(Values.COMMANDER);

    CharacterType(String typeName) {}

    public static class Values {
        private Values(){}

        public static final String CHARACTER = "CHARACTER";
        public static final String LEADER = "LEADER";
        public static final String COMMANDER = "COMMANDER";
    }
}
