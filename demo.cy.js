/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');

const testData = {
  username: faker.person.firstName(),
  country: faker.location.country(),
  password: faker.internet.password(),
  alertMessage: 'Product added'
};

describe('Demoblaze', () => {
  it('should provide an ability to register new account', () => {
    cy.visit('https://www.demoblaze.com/');
    cy.get('#signin2').click();
    cy.get('#sign-username').type(testData.username);
    cy.get('#sign-password').type(testData.password);
    cy.contains('button', 'Sign up').click();

    cy.get('#login2').click();
    cy.get('#loginusername').type(testData.username);
    cy.get('#loginpassword').type(testData.password);
    cy.contains('button', 'Log in').click();
    cy.get('#nameofuser').should('contain', `Welcome ${testData.username}`);


    cy.contains('Samsung galaxy s6').click();
    cy.contains('Add to cart').click();
    cy.on('window:alert', (alert) => {
      expect(alert).to.eq(alertMessage);
    });
  });
});