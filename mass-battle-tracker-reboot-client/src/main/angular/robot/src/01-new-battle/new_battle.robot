*** Settings ***
Documentation       Suite testing the Play Battle module
...
...                 It is supposed to run after the New Battle suite

Resource            resource.robot


*** Test Cases ***
Select Commander for First Army
    Insert Battle Description
    Navigation Should Fail

Insert Name and Manage to Proceed
    Insert Battle Name
    Navigation to Involved Armies Page Should Succeed

Insert Armies
    Add First Army
    Add Second Army

Navigate to Final Summary
    Navigation to Final Summary Should Succeed

Navigate to Commander Selection
    Navigation to Commander Selection Should Succeed
