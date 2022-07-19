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

*** Keywords ***

Insert Battle Name
    Input Text    id=battle-name-input    ${BATTLE NAME}

Insert Battle Description
    Input Text    id=battle-description-input    ${BATTLE DESCRIPTION}

Navigation Should Fail
    Click Button    id=name-description-next-button
    ${url}=   Get Location
    Should Match Regexp  ${url}  .*/name-description

Navigation to Involved Armies Page Should Succeed
    Click Button    id=name-description-next-button
    ${url}=   Get Location
    Should Match Regexp  ${url}  .*/involved-armies

Add First Army Leaders
    Click Button    id=involved-armies-new-leader-button
    Input Text      id=involved-armies-leader-name-input          ${FIRST ARMY L1 NAME}
    Input Text      id=involved-armies-leader-clan-input          ${FIRST ARMY L1 CLAN}
    Click Button    id=involved-armies-add-leader-button
    Click Button    id=involved-armies-new-leader-button
    Input Text      id=involved-armies-leader-name-input          ${FIRST ARMY L2 NAME}
    Input Text      id=involved-armies-leader-clan-input          ${FIRST ARMY L2 CLAN}
    Click Button    id=involved-armies-add-leader-button

Add Second Army Leaders
    Click Button    id=involved-armies-new-leader-button
    Input Text      id=involved-armies-leader-name-input          ${SECOND ARMY L1 NAME}
    Input Text      id=involved-armies-leader-clan-input          ${SECOND ARMY L1 CLAN}
    Click Button    id=involved-armies-add-leader-button
    Click Button    id=involved-armies-new-leader-button
    Input Text      id=involved-armies-leader-name-input          ${SECOND ARMY L2 NAME}
    Input Text      id=involved-armies-leader-clan-input          ${SECOND ARMY L2 CLAN}
    Click Button    id=involved-armies-add-leader-button

Add First Army
    Click Button    id=involved-armies-new-army-button
    Input Text      id=involved-armies-army-name-input            ${FIRST ARMY NAME}
    Input Text      id=involved-armies-army-clan-input            ${FIRST ARMY CLAN NAME}
    Input Text      id=involved-armies-army-strength-input        ${FIRST ARMY STRENGTH}
    Input Text      id=involved-armies-army-discipline-input      ${FIRST ARMY DISCIPLINE}
    Input Text      id=involved-armies-army-attr-reduction-input  ${FIRST ARMY ATTR REDUX}
    Add First Army Leaders
    Click Button    id=involved-armies-add-army-button

Add Second Army
    Click Button    id=involved-armies-new-army-button
    Input Text      id=involved-armies-army-name-input            ${SECOND ARMY NAME}
    Input Text      id=involved-armies-army-clan-input            ${SECOND ARMY CLAN NAME}
    Input Text      id=involved-armies-army-strength-input        ${SECOND ARMY STRENGTH}
    Input Text      id=involved-armies-army-discipline-input      ${SECOND ARMY DISCIPLINE}
    Input Text      id=involved-armies-army-attr-reduction-input  ${SECOND ARMY ATTR REDUX}
    Add Second Army Leaders
    Click Button    id=involved-armies-add-army-button

Navigation to Final Summary Should Succeed
    Click Button                        id=involved-armies-next-button
    Wait Until Page Contains Element    id=final-summary-main-card
    ${url}=   Get Location
    Should Match Regexp                 ${url}                              .*/final-summary

Navigation to Commander Selection Should Succeed
    Sleep    2s    Briefly look at the summary
    Click Button                        id=final-summary-next-button
    Wait Until Page Contains Element    id=commander-selection-main-card
    ${url}=   Get Location
    Should Match Regexp                 ${url}                              .*/commander-selection
