*** Settings ***
Documentation     Suite testing the Rounds section
...               of the Play Battle module
...               It is supposed to run after the Initiative suite
...               This suite simulates Round 1
Resource          ../common/resource.robot

*** Test Cases ***
Wrap Up
    Pass Execution    We are done
    [Teardown]    Close Browser
