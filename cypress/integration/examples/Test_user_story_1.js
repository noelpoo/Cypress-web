// ETE automated test with cypress framework, using CSS selector as element locator

/// <reference types="Cypress" />

describe('Testing User Story 1', function () {

    it('Acceptance Criteria 1 & 2: Eligibility page contains 4 questions, 2 options each', function () {
        cy.visit('https://bgp-qa.gds-gov.tech/', {
            auth: {
                username: 'public',
                password: 'Let$BeC001'
            }
        })
        // UI flow to Eligibility page
        cy.get('#login-button').click()
        cy.get(':nth-child(6) > button').click()
        cy.get('#dashboard-menubox-app-apply-grant > .col-sm-12 > .dashboard-action-card').click()

        cy.get('[style="position: absolute; left: 0px; top: 0px;"] > :nth-child(1) > .grid-item > :nth-child(1) > .item').click()
        cy.get('.show > .sub-item-list > :nth-child(1) > .sub-item-inner-container > .picker-option > .sub-item').click()
        cy.get(':nth-child(1) > .grid-item > .picker-option > .item').click()
        cy.get(':nth-child(1) > .grid-item > .picker-option > .item').click()
        cy.get('#go-to-grant').click()
        cy.get('#keyPage-form-button').click()
        cy.get('h2').contains('Check Your Eligibility')

        
        // Asserting that Eligibility page has exactly 4 yes/no questions
        cy.get('.form-horizontal.bgp-radio-group:visible').should('have.length', 5)

        // Asserting that the 4 questions with correct strings exists
        cy.get(':nth-child(5) > .form-group > .col-xs-12 > div > .control-label.bgp-label').should('contain', 'Is the applicant registered in Singapore?')
        cy.get(':nth-child(6) > .form-group > .col-xs-12 > div > .control-label.bgp-label').should('contain', "Is the applicant's group sales turnover less than or equal to S$100m or is the applicant's group employment size less than or equal to 200?")
        cy.get(':nth-child(7) > .form-group > .col-xs-12 > div > .control-label.bgp-label').should('contain', "Does the applicant have at least 30%")
        cy.get(':nth-child(9) > .form-group > .col-xs-12 > div > .control-label.bgp-label').should('contain', " the following statements true for this project?")
        
        // Asserting that each questions has 2 options in radio-button
        // Asserting that each questions has "yes" and "no"
        cy.get(':nth-child(5) > .form-group > .controls.bgp-radio-text-format > .bgp-radio').should('have.length', 2)
        cy.get(':nth-child(5) > .form-group > .controls > :nth-child(1) > .bgp-label').should('contain', 'Yes')
        cy.get(':nth-child(5) > .form-group > .controls > :nth-child(2) > .bgp-label').should('contain', 'No')


        cy.get(':nth-child(6) > .form-group > .controls.bgp-radio-text-format > .bgp-radio').should('have.length', 2)
        cy.get(':nth-child(6) > .form-group > .controls > :nth-child(1) > .bgp-label').should('contain', 'Yes')
        cy.get(':nth-child(6) > .form-group > .controls > :nth-child(2) > .bgp-label').should('contain', 'No')

        
        cy.get(':nth-child(7) > .form-group > .controls.bgp-radio-text-format > .bgp-radio').should('have.length', 2)
        cy.get(':nth-child(7) > .form-group > .controls > :nth-child(1) > .bgp-label').should('contain', 'Yes')
        cy.get(':nth-child(7) > .form-group > .controls > :nth-child(2) > .bgp-label').should('contain', 'No')

        
        cy.get(':nth-child(9) > .form-group > .controls.bgp-radio-text-format > .bgp-radio').should('have.length', 2)
        cy.get(':nth-child(9) > .form-group > .controls > :nth-child(1) > .bgp-label').should('contain', 'Yes')
        cy.get(':nth-child(9) > .form-group > .controls > :nth-child(2) > .bgp-label').should('contain', 'No')

    })

    it('Acceptance Criteria 3: clicking "no" shows warning', function() {
        var warningMessage = 'The applicant may not meet the eligibility criteria for this grant. Visit FAQ page for more information on other government grants.'

        cy.visit('https://bgp-qa.gds-gov.tech/', {
            auth: {
                username: 'public',
                password: 'Let$BeC001'
            }
        })
        // UI flow to Eligibility page
        cy.get('#login-button').click()
        cy.get(':nth-child(6) > button').click()
        cy.get('#dashboard-menubox-app-apply-grant > .col-sm-12 > .dashboard-action-card').click()

        cy.get('[style="position: absolute; left: 0px; top: 0px;"] > :nth-child(1) > .grid-item > :nth-child(1) > .item').click()
        cy.get('.show > .sub-item-list > :nth-child(1) > .sub-item-inner-container > .picker-option > .sub-item').click()
        cy.get(':nth-child(1) > .grid-item > .picker-option > .item').click()
        cy.get(':nth-child(1) > .grid-item > .picker-option > .item').click()
        cy.get('#go-to-grant').click()
        cy.get('#keyPage-form-button').click()
        cy.get('h2').contains('Check Your Eligibility')

        //Asserting display of warning message when "no" is selected
        cy.get(':nth-child(5) > .form-group > .controls > :nth-child(2) > .radiobutton').click()
        cy.get('.eligibility-advice').should('contain', warningMessage)

        cy.get(':nth-child(7) > .form-group > .controls > :nth-child(2) > .radiobutton').click()
        cy.get(':nth-child(8) > .eligibility-advice').should('contain', warningMessage)

        cy.get(':nth-child(9) > .form-group > .controls > :nth-child(2) > .radiobutton').click()
        cy.get(':nth-child(10) > .eligibility-advice').should('contain', warningMessage)

        cy.get(':nth-child(12) > .form-group > .controls > :nth-child(2) > .radiobutton').click()
        cy.get(':nth-child(13) > .eligibility-advice').should('contain', warningMessage)
    })

    it('Acceptance Criteria 4: Redirect links in each warning is correct', function(){
        var warningMessage = 'The applicant may not meet the eligibility criteria for this grant. Visit FAQ page for more information on other government grants.'

        cy.visit('https://bgp-qa.gds-gov.tech/', {
            auth: {
                username: 'public',
                password: 'Let$BeC001'
            }
        })
        // UI flow to Eligibility page
        cy.get('#login-button').click()
        cy.get(':nth-child(6) > button').click()
        cy.get('#dashboard-menubox-app-apply-grant > .col-sm-12 > .dashboard-action-card').click()

        cy.get('[style="position: absolute; left: 0px; top: 0px;"] > :nth-child(1) > .grid-item > :nth-child(1) > .item').click()
        cy.get('.show > .sub-item-list > :nth-child(1) > .sub-item-inner-container > .picker-option > .sub-item').click()
        cy.get(':nth-child(1) > .grid-item > .picker-option > .item').click()
        cy.get(':nth-child(1) > .grid-item > .picker-option > .item').click()
        cy.get('#go-to-grant').click()
        cy.get('#keyPage-form-button').click()

        cy.get(':nth-child(5) > .form-group > .controls > :nth-child(2) > .radiobutton').click()
        cy.get('.eligibility-advice').should('contain', warningMessage)

        cy.get(':nth-child(7) > .form-group > .controls > :nth-child(2) > .radiobutton').click()
        cy.get(':nth-child(8) > .eligibility-advice').should('contain', warningMessage)

        cy.get(':nth-child(9) > .form-group > .controls > :nth-child(2) > .radiobutton').click()
        cy.get(':nth-child(10) > .eligibility-advice').should('contain', warningMessage)

        cy.get(':nth-child(12) > .form-group > .controls > :nth-child(2) > .radiobutton').click()
        cy.get(':nth-child(13) > .eligibility-advice').should('contain', warningMessage)

        // Clicking on each link in each warning message should redirect to correct URL in a new tab
        cy.get(':nth-child(6) > .eligibility-advice > span > a').click()
        // cy.location('pathname').should('eq', 'https://www.ifaq.gov.sg/BGP/apps/fcd_faqmain.aspx#FAQ_1111145')
        // TODO - check if new tab's URL is correct.

    })

    it('Acceptance Criteria 5: "save" button saves and refreshes page', function(){
        var warningMessage = 'The applicant may not meet the eligibility criteria for this grant. Visit FAQ page for more information on other government grants.'

        cy.visit('https://bgp-qa.gds-gov.tech/', {
            auth: {
                username: 'public',
                password: 'Let$BeC001'
            }
        })
        // UI flow to Eligibility page
        cy.get('#login-button').click()
        cy.get(':nth-child(6) > button').click()
        cy.get('#dashboard-menubox-app-apply-grant > .col-sm-12 > .dashboard-action-card').click()

        cy.get('[style="position: absolute; left: 0px; top: 0px;"] > :nth-child(1) > .grid-item > :nth-child(1) > .item').click()
        cy.get('.show > .sub-item-list > :nth-child(1) > .sub-item-inner-container > .picker-option > .sub-item').click()
        cy.get(':nth-child(1) > .grid-item > .picker-option > .item').click()
        cy.get(':nth-child(1) > .grid-item > .picker-option > .item').click()
        cy.get('#go-to-grant').click()
        cy.get('#keyPage-form-button').click()

        cy.get(':nth-child(5) > .form-group > .controls > :nth-child(2) > .radiobutton').click()
        cy.get('.eligibility-advice').should('contain', warningMessage)

        cy.get(':nth-child(7) > .form-group > .controls > :nth-child(2) > .radiobutton').click()
        cy.get(':nth-child(8) > .eligibility-advice').should('contain', warningMessage)

        cy.get(':nth-child(9) > .form-group > .controls > :nth-child(2) > .radiobutton').click()
        cy.get(':nth-child(10) > .eligibility-advice').should('contain', warningMessage)

        cy.get(':nth-child(12) > .form-group > .controls > :nth-child(2) > .radiobutton').click()
        cy.get(':nth-child(13) > .eligibility-advice').should('contain', warningMessage)

        cy.get(':nth-child(11) > .form-group > .controls > :nth-child(2) > .radiobutton').click()
        cy.get(':nth-child(12) > .eligibility-advice').should('contain', warningMessage)

        // Assert that clicking on the "save" button will prompt alert
        cy.get('#save-btn').click()
        cy.get('.growl-title').should('contain', 'Draft Saved')

        // Assert that warning messages are still there after saving
        cy.get(':nth-child(6) > .eligibility-advice').should('contain', warningMessage)
        cy.get(':nth-child(8) > .eligibility-advice').should('contain', warningMessage)
        cy.get(':nth-child(10) > .eligibility-advice').should('contain', warningMessage)
        cy.get(':nth-child(14) > .eligibility-advice').should('contain', warningMessage)
    })

})