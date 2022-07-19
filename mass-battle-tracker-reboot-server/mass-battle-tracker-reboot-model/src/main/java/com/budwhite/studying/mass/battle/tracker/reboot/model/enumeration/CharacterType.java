package com.budwhite.studying.mass.battle.tracker.reboot.model.enumeration;

public enum CharacterType {
    LEADER(Values.LEADER),
    COMMANDER(Values.COMMANDER);

    CharacterType(String typeName) {}

    public static class Values {
        private Values(){}
        public static final String LEADER = "LEADER";
        public static final String COMMANDER = "COMMANDER";
    }
}
