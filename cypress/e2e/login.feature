Feature: Login Functionality Feature
In order to ensure Login Functionality works,
I want to run the cucumber test to verify it is working

Background:
Given user navigates to FB.com

Scenario: Login Functionality
When user logs in using Username and Password
Then login should be successful
