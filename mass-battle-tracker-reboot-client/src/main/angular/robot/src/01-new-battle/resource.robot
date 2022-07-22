*** Settings ***
Documentation     A resource file with reusable keywords and variables.
...
...               The system specific keywords created here form our own
...               domain specific language. They utilize keywords provided
...               by the imported SeleniumLibrary.
Resource          ../common/resource.robot
Resource          additional_resource.robot

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
    Navigation to Page Should Succeed    name-description-next-button    involved-armies-main-card    involved-armies

Add First Army Leaders
    Add Leader    ${FIRST ARMY L1 NAME}    ${FIRST ARMY L1 CLAN}
    Add Leader    ${FIRST ARMY L2 NAME}    ${FIRST ARMY L2 CLAN}

Add Second Army Leaders
    Add Leader    ${SECOND ARMY L1 NAME}   ${SECOND ARMY L1 CLAN}
    Add Leader    ${SECOND ARMY L2 NAME}   ${SECOND ARMY L2 CLAN}

Add First Army
    Add Army    ${FIRST ARMY NAME}  ${FIRST ARMY CLAN NAME}  ${FIRST ARMY STRENGTH}  ${FIRST ARMY DISCIPLINE}  ${FIRST ARMY ATTR REDUX}
    Add First Army Leaders
    Click Button    id=involved-armies-add-army-button

Add Second Army
    Add Army    ${SECOND ARMY NAME}  ${SECOND ARMY CLAN NAME}  ${SECOND ARMY STRENGTH}  ${SECOND ARMY DISCIPLINE}  ${SECOND ARMY ATTR REDUX}
    Add Second Army Leaders
    Click Button    id=involved-armies-add-army-button

Navigation to Final Summary Should Succeed
    Navigation to Page Should Succeed    involved-armies-next-button    final-summary-main-card    final-summary

Navigation to Commander Selection Should Succeed
    Navigation to Page Should Succeed    final-summary-next-button  commander-selection-main-card  commander-selection
