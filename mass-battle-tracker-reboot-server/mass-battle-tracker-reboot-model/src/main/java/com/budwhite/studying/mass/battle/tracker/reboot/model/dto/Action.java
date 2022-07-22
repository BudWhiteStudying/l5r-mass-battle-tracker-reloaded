package com.budwhite.studying.mass.battle.tracker.reboot.model.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Data
@ToString
//OLD
public class Action implements Serializable {
    private String description;
}
