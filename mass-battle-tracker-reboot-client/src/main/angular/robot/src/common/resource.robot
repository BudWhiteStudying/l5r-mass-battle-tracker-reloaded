*** Settings ***
Documentation     A common resource file to be imported in all other scripts
Library           SeleniumLibrary

*** Variables ***
${SERVER}         localhost:4200
${BROWSER}        Chrome
${SELENIUM DELAY}          0.05s
${LANDING URL}    http://${SERVER}/

*** Keywords ***

Navigation to Page Should Succeed
    [Arguments]  ${navigation button id}  ${target page card id}  ${target page path}
    Click Button                        id=${navigation button id}
    Wait Until Page Contains Element    id=${target page card id}
    ${url}=   Get Location
    Should Match Regexp                 ${url}                              .*/${target page path}