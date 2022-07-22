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

${FIRST ARMY FIRST LEADER ACTION NAME}         Assault
${FIRST ARMY FIRST LEADER ATTR CAUSED}         3
${FIRST ARMY FIRST LEADER PANIC CAUSED}        3
${FIRST ARMY FIRST LEADER PANIC REMOVED}       3

${SECOND ARMY FIRST LEADER ACTION NAME}        Assault
${SECOND ARMY FIRST LEADER ATTR CAUSED}        3
${SECOND ARMY FIRST LEADER PANIC CAUSED}       3
${SECOND ARMY FIRST LEADER PANIC REMOVED}      3

${SECOND ARMY SECOND LEADER ACTION NAME}       Assault
${SECOND ARMY SECOND LEADER ATTR CAUSED}       3
${SECOND ARMY SECOND LEADER PANIC CAUSED}      3
${SECOND ARMY SECOND LEADER PANIC REMOVED}     3

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
    Wait Until Element Is Visible   id=leader-selection-leaders-dropdown
    #Sleep  30s  Activate debugger in chrome
    Click Element                   id=leader-selection-leaders-dropdown
    #Sleep  20s  Debug
    Wait Until Element Is Visible   id=leader-selection-leader-option-0
    Click Element                   id=leader-selection-leader-option-0

Navigation to Leader Action Page Should Succeed
    Wait Until Element Is Enabled       id=leader-selection-next-button
    Click Button                        id=leader-selection-next-button
    Wait Until Page Contains Element    id=leader-action-main-card
    ${url}=   Get Location
    Should Match Regexp                 ${url}                              .*/leader-action

Register First Army First Leader Action
    Input Text                        id=leader-action-name-input                 ${FIRST ARMY FIRST LEADER ACTION NAME}
    Input Text                        id=leader-action-attrition-caused-input     ${FIRST ARMY FIRST LEADER ATTR CAUSED}
    Input Text                        id=leader-action-panic-caused-input         ${FIRST ARMY FIRST LEADER PANIC CAUSED}
    Input Text                        id=leader-action-panic-removed-input        ${FIRST ARMY FIRST LEADER PANIC REMOVED}
    Click Button                      id=leader-action-next-button

Register Second Army First Leader Action
    Input Text                        id=leader-action-name-input                 ${SECOND ARMY FIRST LEADER ACTION NAME}
    Input Text                        id=leader-action-attrition-caused-input     ${SECOND ARMY FIRST LEADER ATTR CAUSED}
    Input Text                        id=leader-action-panic-caused-input         ${SECOND ARMY FIRST LEADER PANIC CAUSED}
    Input Text                        id=leader-action-panic-removed-input        ${SECOND ARMY FIRST LEADER PANIC REMOVED}
    Click Button                      id=leader-action-next-button

Register Second Army Second Leader Action
    Input Text                        id=leader-action-name-input                 ${SECOND ARMY SECOND LEADER ACTION NAME}
    Input Text                        id=leader-action-attrition-caused-input     ${SECOND ARMY SECOND LEADER ATTR CAUSED}
    Input Text                        id=leader-action-panic-caused-input         ${SECOND ARMY SECOND LEADER PANIC CAUSED}
    Input Text                        id=leader-action-panic-removed-input        ${SECOND ARMY SECOND LEADER PANIC REMOVED}
    Click Button                      id=leader-action-next-button

Navigation to Totals Check Page Should Succeed
    Wait Until Page Contains Element    id=totals-check-main-card
    ${url}=   Get Location
    Should Match Regexp                 ${url}                              .*/totals-check

Navigation to Round Summary Page Should Succeed
    Wait Until Page Contains Element    id=totals-check-next-button
    Click Button                        id=totals-check-next-button
    Wait Until Page Contains Element    id=round-summary-main-card
    ${url}=   Get Location
    Should Match Regexp                 ${url}                              .*/round-summary