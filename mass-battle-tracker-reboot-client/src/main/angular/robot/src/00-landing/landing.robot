*** Settings ***
Documentation     Suite testing the Landing module
...
...               It is supposed to run before any other suite
Resource          resource.robot

*** Test Cases ***
Land Correctly
    Open Browser To Landing Page

Navigate to New Battle
    Select New Battle
    Land on New Battle Page