*** Settings ***
Documentation     Suite testing the Rounds section
...               of the Play Battle module
...               It is supposed to run after the Initiative suite
...               This suite simulates Round 1
Resource          resource.robot

*** Test Cases ***

Select Strategic Objectives
    Select First Army Strategic Objective
    Select Second Army Strategic Objective


Navigate to First Move Page
    Navigation to First Move Page Should Succeed

Determine First Move
    Select Commander Acting First

Navigate to Leader Selection Page
    Navigation to Leader Selection Page Should Succeed

Select Acting Leader for First Army
    Select Acting Leader

Navigate to Leader Action Page
    Navigation to Leader Action Page Should Succeed
    Sleep  10s
    [Teardown]    Close Browser

Register Leader Action for First Army

Select Acting Leader for Second Army

Register Leader Action for Second Army

Select Last Acting Leader for Second Army

Register Last Leader Action for Second Army

Display Round Summary

Display Total Checks