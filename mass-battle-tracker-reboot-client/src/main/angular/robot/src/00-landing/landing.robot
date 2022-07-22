*** Settings ***
Documentation     Suite testing the Landing module
...
...               It is supposed to run before any other suite
Resource          resource.robot

*** Test Cases ***

Prepare
    Register Keyword To Run On Failure  None

Land Correctly
    Open Browser To Landing Page

Navigate to New Battle
   Navigation to New Battle Page Should Succeed