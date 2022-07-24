*** Settings ***
Documentation     Suite testing the Rounds section
...               of the Play Battle module
...               It is supposed to run after the Initiative suite
...               This suite simulates Round 2
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

Register First Army First Leader Action
    Register First Army First Leader Action

Select Acting Leader for Second Army
    Select Acting Leader

Return to Leader Action Page
    Navigation to Leader Action Page Should Succeed

Register Second Army First Leader Action
    Register Second Army First Leader Action

Select Last Acting Leader for Second Army
    Select Acting Leader

Return to Leader Action Page Again
    Navigation to Leader Action Page Should Succeed

Register Second Army Last Leader Action
    Register Second Army Second Leader Action

Navigate to Totals Check Page
    Navigation to Totals Check Page Should Succeed

Navigate to Round Summary Page
    Navigation to Round Summary Page Should Succeed

Proceed to Next Round
    Navigation to Next Round Page Should Succeed