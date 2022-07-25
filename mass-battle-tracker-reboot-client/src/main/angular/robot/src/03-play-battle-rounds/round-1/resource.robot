*** Settings ***
Documentation     A resource file with reusable keywords and variables.
...
...               The system specific keywords created here form our own
...               domain specific language. They utilize keywords provided
...               by the imported SeleniumLibrary.
Resource          ../../common/resource.robot
Resource          ../resource.robot

*** Variables ***

${FIRST ARMY STRATEGIC OBJ}                Capture Position
${SECOND ARMY STRATEGIC OBJ}               Draw Them In

${FIRST ARMY FIRST LEADER ACTION NAME}         Assault
${FIRST ARMY FIRST LEADER ATTR CAUSED}         3
${FIRST ARMY FIRST LEADER PANIC CAUSED}        0
${FIRST ARMY FIRST LEADER PANIC REMOVED}       0

${SECOND ARMY FIRST LEADER ACTION NAME}        Challenge
${SECOND ARMY FIRST LEADER ATTR CAUSED}        0
${SECOND ARMY FIRST LEADER PANIC CAUSED}       3
${SECOND ARMY FIRST LEADER PANIC REMOVED}      0

${SECOND ARMY SECOND LEADER ACTION NAME}       Rally
${SECOND ARMY SECOND LEADER ATTR CAUSED}       0
${SECOND ARMY SECOND LEADER PANIC CAUSED}      0
${SECOND ARMY SECOND LEADER PANIC REMOVED}     3

*** Keywords ***

Select First Army Strategic Objective
    Input Text                        id=objective-selection-input-0     ${FIRST ARMY STRATEGIC OBJ}

Select Second Army Strategic Objective
    Input Text                        id=objective-selection-input-1     ${SECOND ARMY STRATEGIC OBJ}

Navigation to First Move Page Should Succeed
    Navigation to Page Should Succeed    objective-selection-next-button    first-move-main-card    first-move

Select Commander Acting First
    Click Element                   id=first-move-commanders-dropdown
    Wait Until Element Is Visible   id=first-move-commander-option-0
    Click Element                   id=first-move-commander-option-0

Navigation to Leader Selection Page Should Succeed
    Navigation to Page Should Succeed    first-move-next-button    leader-selection-main-card    leader-selection

Select Acting Leader
    Wait Until Element Is Visible   id=leader-selection-leaders-dropdown
    #Sleep  30s  Activate debugger in chrome
    Click Element                   id=leader-selection-leaders-dropdown
    #Sleep  20s  Debug
    Wait Until Element Is Visible   id=leader-selection-leader-option-0
    Click Element                   id=leader-selection-leader-option-0

Navigation to Leader Action Page Should Succeed
    Navigation to Page Should Succeed    leader-selection-next-button    leader-action-main-card    leader-action

Register First Army First Leader Action
    Register Leader Action  ${FIRST ARMY FIRST LEADER ACTION NAME}  ${FIRST ARMY FIRST LEADER ATTR CAUSED}  ${FIRST ARMY FIRST LEADER PANIC CAUSED}  ${FIRST ARMY FIRST LEADER PANIC REMOVED}

Register Second Army First Leader Action
    Register Leader Action  ${SECOND ARMY FIRST LEADER ACTION NAME}  ${SECOND ARMY FIRST LEADER ATTR CAUSED}  ${SECOND ARMY FIRST LEADER PANIC CAUSED}  ${SECOND ARMY FIRST LEADER PANIC REMOVED}

Register Second Army Second Leader Action
    Register Leader Action  ${SECOND ARMY SECOND LEADER ACTION NAME}  ${SECOND ARMY SECOND LEADER ATTR CAUSED}  ${SECOND ARMY SECOND LEADER PANIC CAUSED}  ${SECOND ARMY SECOND LEADER PANIC REMOVED}

# This can't leverage the Navigation to Page Should Succeed
# because no navigation element is clicked
Navigation to Totals Check Page Should Succeed
    Wait Until Page Contains Element    id=totals-check-main-card
    ${url}=   Get Location
    Should Match Regexp                 ${url}                              .*/totals-check

Navigation to Round Summary Page Should Succeed
    Navigation to Page Should Succeed    totals-check-next-button    round-summary-main-card    round-summary
    #Sleep    10s  Check results

Navigation to Next Round Page Should Succeed
    Navigation to Page Should Succeed    round-summary-next-button    objective-selection-main-card    objective-selection