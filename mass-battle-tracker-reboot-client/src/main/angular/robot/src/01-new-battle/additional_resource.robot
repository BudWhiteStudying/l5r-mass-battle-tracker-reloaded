*** Settings ***
Documentation       An additional resource file specific to
...                 the New Battle module

Resource            ../common/resource.robot


*** Keywords ***
Add Leader
    [Arguments]    ${leader name}    ${leader clan}
    Click Button    id=involved-armies-new-leader-button
    Input Text    id=involved-armies-leader-name-input    ${leader name}
    Input Text    id=involved-armies-leader-clan-input    ${leader clan}
    Click Button    id=involved-armies-add-leader-button

Add Army
    [Arguments]    ${army name}    ${army clan}    ${army strength}    ${army discipline}
    Click Button    id=involved-armies-new-army-button
    Input Text    id=involved-armies-army-name-input    ${army name}
    Input Text    id=involved-armies-army-clan-input    ${army clan}
    Input Text    id=involved-armies-army-strength-input    ${army strength}
    Input Text    id=involved-armies-army-discipline-input    ${army discipline}
