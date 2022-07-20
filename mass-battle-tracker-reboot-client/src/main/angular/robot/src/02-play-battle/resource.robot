*** Settings ***
Documentation     A resource file with reusable keywords and variables.
...
...               The system specific keywords created here form our own
...               domain specific language. They utilize keywords provided
...               by the imported SeleniumLibrary.
Library           SeleniumLibrary

*** Variables ***

${BATTLE NAME}                Battle of the Osari Plains
${BATTLE DESCRIPTION}         The Lion Clan launches a ferocious offensive on the castle of Toshi Ranbo

${FIRST ARMY NAME}            Lion Attackers
${FIRST ARMY CLAN NAME}       Lion
${FIRST ARMY STRENGTH}        90
${FIRST ARMY DISCIPLINE}      100
${FIRST ARMY ATTR REDUX}      0

${FIRST ARMY L1 NAME}         Akodo Arasou
${FIRST ARMY L1 CLAN}         Lion
${FIRST ARMY L2 NAME}         Akodo Toturi
${FIRST ARMY L2 CLAN}         Lion

${SECOND ARMY NAME}           Crane Defenders
${SECOND ARMY CLAN NAME}      Crane
${SECOND ARMY STRENGTH}       100
${SECOND ARMY DISCIPLINE}     90
${SECOND ARMY ATTR REDUX}     1

${SECOND ARMY L1 NAME}        Doji Hotaru
${SECOND ARMY L1 CLAN}        Crane
${SECOND ARMY L2 NAME}        Daidoji Uji
${SECOND ARMY L2 CLAN}        Crane

${FIRST COMMANDER INITIATIVE}   3
${SECOND COMMANDER INITIATIVE}  2

*** Keywords ***

Select First Army Commander
    Click Element                        id=commander-selection-dropdown-0
    Wait Until Element Is Visible        id=0-0
    Click Element                        id=0-0

Select Second Army Commander
    Click Element                        id=commander-selection-dropdown-1
    Wait Until Element Is Visible        id=1-0
    Click Element                        id=1-0

Navigation to Initiative Recording Should Succeed
    Wait Until Element Is Enabled       id=commander-selection-next-button
    Click Button                        id=commander-selection-next-button
    Wait Until Page Contains Element    id=initiative-recording-main-card
    ${url}=   Get Location
    Should Match Regexp                 ${url}                              .*/initiative-recording

Insert Initiative of Commanders
    Input Text      id=initiative-recording-input-0            ${FIRST COMMANDER INITIATIVE}
    Input Text      id=initiative-recording-input-1            ${SECOND COMMANDER INITIATIVE}

Navigation to Leaders Selection Should Succeed
    Sleep           15s                                        Debug
    Wait Until Element Is Enabled       id=initiative-recording-next-button
    Click Button                        id=initiative-recording-next-button
    Wait Until Page Contains Element    id=leader-selection-main-card
    ${url}=   Get Location
    Should Match Regexp                 ${url}                              .*/leader-selection