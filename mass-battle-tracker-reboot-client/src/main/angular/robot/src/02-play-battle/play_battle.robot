*** Settings ***
Documentation     Suite testing the New Battle module
...
...               It is supposed to run after the Landing suite
Resource          resource.robot

*** Test Cases ***

Select Army Commanders
    Select First Army Commander
    Select Second Army Commander

Navigate to Initiative Recording
    Navigation to Initiative Recording Should Succeed

Insert Initiative of Commanders
    Insert Initiative of Commanders

Navigate to Leaders Selection Page
    Navigation to Leaders Selection Should Succeed

Form Cohorts
    Form First Army Cohorts
    Form Second Army Cohorts

Navigate to Objective Selection
    Navigation to Objective Selection Should Succeed
    [Teardown]    Close Browser