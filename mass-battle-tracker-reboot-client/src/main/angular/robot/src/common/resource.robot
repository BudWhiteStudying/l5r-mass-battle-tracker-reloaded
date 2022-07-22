*** Settings ***
Documentation     A common resource file to be imported in all other scripts
Library           SeleniumLibrary

*** Variables ***
${SERVER}         localhost:4200
${BROWSER}        Chrome
${SELENIUM DELAY}          0
${LANDING URL}    http://${SERVER}/

*** Keywords ***

Navigation to Page Should Succeed
    [Arguments]  ${navigation element id}  ${target page card id}  ${target page path}
    Click Element                       id=${navigation element id}
    Wait Until Page Contains Element    id=${target page card id}
    ${url}=   Get Location
    Should Match Regexp                 ${url}                              .*/${target page path}