*** Settings ***
Documentation  An additional resource file specific to
...            the Play Battle Round 1 module
Resource          ../common/resource.robot

*** Keywords ***
Register Leader Action
    [Arguments]  ${leader-action-name}  ${leader-action-attrition-caused}  ${leader-action-panic-caused-input}  ${leader-action-panic-removed-input}
    Input Text                        id=leader-action-name-input                 ${leader-action-name}
    Input Text                        id=leader-action-attrition-caused-input     ${leader-action-attrition-caused}
    Input Text                        id=leader-action-panic-caused-input         ${leader-action-panic-caused-input}
    Input Text                        id=leader-action-panic-removed-input        ${leader-action-panic-removed-input}
    Click Button                      id=leader-action-next-button