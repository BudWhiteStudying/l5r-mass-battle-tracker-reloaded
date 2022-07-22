*** Settings ***
Documentation     A resource file with reusable keywords and variables.
...
...               The system specific keywords created here form our own
...               domain specific language. They utilize keywords provided
...               by the imported SeleniumLibrary.
Resource          ../common/resource.robot
*** Variables ***

${BATTLE NAME}            Battle of the Osari Plains
${BATTLE DESCRIPTION}     The Lion Clan launches a ferocious offensive on the castle of Toshi Ranbo

*** Keywords ***
Open Browser To Landing Page
    Open Browser                ${LANDING URL}    ${BROWSER}
    Maximize Browser Window
    Set Selenium Speed          ${SELENIUM DELAY}
    Landing Page Should Be Open

Landing Page Should Be Open
    Page Should Contain Element    id=new-battle-button
    Page Should Contain Element    id=resume-battle-button

Navigation to New Battle Page Should Succeed
    Navigation to Page Should Succeed    new-battle-button    name-description-main-card    name-description
