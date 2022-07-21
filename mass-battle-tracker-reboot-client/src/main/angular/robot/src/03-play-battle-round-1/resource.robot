*** Settings ***
Documentation     A resource file with reusable keywords and variables.
...
...               The system specific keywords created here form our own
...               domain specific language. They utilize keywords provided
...               by the imported SeleniumLibrary.
Library           SeleniumLibrary

*** Variables ***

${FIRST ARMY STRATEGIC OBJ}                Assault
${SECOND ARMY STRATEGIC OBJ}               Fortify

*** Keywords ***

Select First Army Strategic Objective
    Input Text                        id=objective-selection-input-0     ${FIRST ARMY STRATEGIC OBJ}

Select Second Army Strategic Objective
    Input Text                        id=objective-selection-input-1     ${SECOND ARMY STRATEGIC OBJ}

Navigation to First Move Page Should Succeed
    Wait Until Element Is Enabled       id=objective-selection-next-button
    Click Button                        id=objective-selection-next-button
    Wait Until Page Contains Element    id=first-move-main-card
    ${url}=   Get Location
    Should Match Regexp                 ${url}                              .*/first-move

Select Commander Acting First
    Click Element                   id=first-move-commanders-dropdown
    Wait Until Element Is Visible   id=first-move-commander-option-0
    Click Element                   id=first-move-commander-option-0

Navigation to Leader Selection Page Should Succeed
    Wait Until Element Is Enabled       id=first-move-next-button
    Click Button                        id=first-move-next-button
    Wait Until Page Contains Element    id=leader-selection-main-card
    ${url}=   Get Location
    Should Match Regexp                 ${url}                              .*/leader-selection

Select Acting Leader
    Click Element                   id=leader-selection-leaders-dropdown
    Wait Until Element Is Visible   id=leader-selection-leader-option-0
    Click Element                   id=leader-selection-leader-option-0

Navigation to Leader Action Page Should Succeed
    Wait Until Element Is Enabled       id=leader-selection-next-button
    Click Button                        id=leader-selection-next-button
    Wait Until Page Contains Element    id=leader-action-main-card
    ${url}=   Get Location
    Should Match Regexp                 ${url}                              .*/leader-action
