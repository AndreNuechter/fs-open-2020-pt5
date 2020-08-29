const testUser = { username: 'testing', password: '123abc' };

describe('Blog app', function() {
    beforeEach(function() {
        cy.request('POST', 'http://localhost:3001/api/testing/reset');
        cy.request('POST', 'http://localhost:3001/api/users', testUser);
        cy.visit('http://localhost:3000');
    });

    it('Login form is shown', function() {
        cy.get('.login-form');
        cy.contains('Login');
    });

    it('Faulty login displays error message that disappears', function() {
        cy.get('[name="username"]').type('foo');
        cy.get('[name="password"]').type('bar');
        cy.get('.login-form__submit-btn').click();
        cy.get('.error').should('have.css', 'background-color', 'rgba(255, 0, 0, 0.8)');
        cy.get('.error', { timeout: 5000 }).should('not.be.visible');
    });

    it('Correct login displays success message that disappears, hides login form and displays blogs list', function() {
        cy.get('[name="username"]').type(testUser.username);
        cy.get('[name="password"]').type(testUser.password);
        cy.get('.login-form__submit-btn').click();
        cy.get('.success');
        cy.get('.success', { timeout: 5000 }).should('not.be.visible');
        cy.get('.login-form').should('not.be.visible');
        cy.get('.blogs-list');
    });
});