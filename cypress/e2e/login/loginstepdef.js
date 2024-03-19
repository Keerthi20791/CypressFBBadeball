import { When,Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("user navigates to FB.com",()=>{
    cy.visit("https://en-gb.facebook.com")
})

When("user logs in using Username and Password", ()=>{
    cy.fixture('example').then((user)=>{
        var username=user.username;
        var password=user.pass;
    cy.get("#email").type(username);
            cy.wait(1000);
            cy.get("#pass").type(password);
            cy.wait(1000);
            //cy.xpath("//button[@value=1]").click();
            cy.contains("Log in").click();
})
})
Then("login should be successful", ()=>{
    cy.log("Login Successful");
})