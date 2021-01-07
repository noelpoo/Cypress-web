// ETE automated test with cypress framework, using CSS selector as element locator

/// <reference types="Cypress" />

describe('Testing User Story 2', function(){
    it('Acceptance Criteria 1: "main contact person" subsections should have correct inputs', function(){
        var warningMessage = 'The applicant may not meet the eligibility criteria for this grant. Visit FAQ page for more information on other government grants.'

        cy.visit('https://bgp-qa.gds-gov.tech/', {
            auth: {
                username: 'public',
                password: 'Let$BeC001'
            }
        })
        // UI flow to Contact Details page
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

        cy.get('#next-btn').click()
        // Asserting that UI flow lands on correct page
        cy.get('.grant-title').should('contain', 'Market Readiness Assistance (MRA)')

        // Asserting that every required input field exists
        cy.get('#react-contact_info-name-label').should('contain', 'Name')
        cy.get('#react-contact_info-name').should('exist')

        cy.get('#react-contact_info-designation-label').should('contain', 'Job Title')
        cy.get('#react-contact_info-designation').should('exist')

        cy.get('#react-contact_info-phone-label').should('contain', 'Contact No.')
        cy.get('#react-contact_info-phone').should('exist')

        cy.get('#react-contact_info-primary_email-label').should('contain', 'Email')
        cy.get('#react-contact_info-primary_email').should('exist')

        cy.get('#react-contact_info-secondary_email-label').should('contain', "Alternate Contact Person's Email")
        cy.get('#react-contact_info-secondary_email').should('exist')

        cy.get('b > div > .control-label.bgp-label').should('contain', 'Mailing Address')
    })

    it('Acceptance Criteria 2 & 3: Adress auto-fill', function(){
        var warningMessage = 'The applicant may not meet the eligibility criteria for this grant. Visit FAQ page for more information on other government grants.'

        cy.visit('https://bgp-qa.gds-gov.tech/', {
            auth: {
                username: 'public',
                password: 'Let$BeC001'
            }
        })
        // UI flow to Contact Details page
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

        cy.get('#next-btn').click()
        // Asserting that UI flow lands on correct page
        cy.get('.grant-title').should('contain', 'Market Readiness Assistance (MRA)')

        // Asserting auto-fill with a few postal codes
        cy.get('#react-contact_info-correspondence_address-postal').type('528692')
        cy.get('#react-contact_info-correspondence_address-block').should('have.value', "95")
        cy.get('#react-contact_info-correspondence_address-street').should('have.value', "TAMPINES AVENUE 1")
        
        // Asserting checkbox ‘Same as registered address in Company Profile’ auto-fill
        cy.get('#react-contact_info-correspondence_address-copied').click()
        cy.get('#react-contact_info-correspondence_address-postal').should('have.value', "650320")
        cy.get('#react-contact_info-correspondence_address-block').should('have.value', "320")
        cy.get('#react-contact_info-correspondence_address-street').should('have.value', "BUKIT BATOK STREET 33")
        cy.get('#react-contact_info-correspondence_address-level').should('have.value', "03")
        cy.get('#react-contact_info-correspondence_address-unit').should('have.value', "33")
    })

    it('Acceptance Criteria 4 & 5: ‘Letter of Offer Addressee’ subsection should have correct inputs', function(){
        var warningMessage = 'The applicant may not meet the eligibility criteria for this grant. Visit FAQ page for more information on other government grants.'

        cy.visit('https://bgp-qa.gds-gov.tech/', {
            auth: {
                username: 'public',
                password: 'Let$BeC001'
            }
        })
        // UI flow to Contact Details page
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

        cy.get('#next-btn').click()
        // Asserting that UI flow lands on correct page
        cy.get('.grant-title').should('contain', 'Market Readiness Assistance (MRA)')

        // Asserting "Letter Of Offer Addressee" exists and has the correct fields
        cy.get(':nth-child(3) > .subsection-title > h3').should('contain', "Letter Of Offer Addressee")
        cy.get('#react-contact_info-offeree_name-label').should('exist').should('contain', "Name")
        cy.get('#react-contact_info-offeree_name').should('exist')
        cy.get('#react-contact_info-offeree_designation-label').should('exist').should('contain', "Job Title")
        cy.get('#react-contact_info-offeree_designation').should('exist')
        cy.get('#react-contact_info-offeree_email-label').should('exist').should('contain', "Email")
        cy.get('#react-contact_info-offeree_email').should('exist')

        // Filling inputs in AC1 and asserting autofil for this sub-section
        cy.get('#react-contact_info-name').type('Noel')
        cy.get('#react-contact_info-designation').type('engineer')
        cy.get('#react-contact_info-phone').type('99667788')
        cy.get('#react-contact_info-primary_email').type('Noel@engineer.com')

        cy.get('#react-contact_info-copied').click()
        cy.get('#react-contact_info-offeree_name').should('have.value', "Noel")
        cy.get('#react-contact_info-offeree_designation').should('have.value', "engineer")
        cy.get('#react-contact_info-offeree_email').should('have.value', 'Noel@engineer.com')
    })

    it('Acceptance Criteria 6: Saving', function(){
        var warningMessage = 'The applicant may not meet the eligibility criteria for this grant. Visit FAQ page for more information on other government grants.'

        cy.visit('https://bgp-qa.gds-gov.tech/', {
            auth: {
                username: 'public',
                password: 'Let$BeC001'
            }
        })
        // UI flow to Contact Details page
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

        cy.get('#next-btn').click()
        // Asserting that UI flow lands on correct page
        cy.get('.grant-title').should('contain', 'Market Readiness Assistance (MRA)')

        // filling up contact details
        cy.get('#react-contact_info-name').type('Noel')
        cy.get('#react-contact_info-designation').type('engineer')
        cy.get('#react-contact_info-phone').type('99667788')
        cy.get('#react-contact_info-primary_email').type('Noel@engineer.com')

        cy.get('#react-contact_info-copied').click()

        cy.get('#react-contact_info-correspondence_address-copied').click()

        // clicking save, asserting "draft saved" alert appears
        cy.get('#save-btn').click()
        cy.get('.growl-title').should('contain', "Draft Saved")

        // Asserting that page reloads saved values
        cy.get('#react-contact_info-name').should('have.value', "Noel")
        cy.get('#react-contact_info-designation').should('have.value', "engineer")
        cy.get('#react-contact_info-phone').should('have.value', "99667788")
        cy.get('#react-contact_info-primary_email').should('have.value', "Noel@engineer.com")

        cy.get('#react-contact_info-correspondence_address-postal').should('have.value', "650320")
        cy.get('#react-contact_info-correspondence_address-block').should('have.value', "320")
        cy.get('#react-contact_info-correspondence_address-street').should('have.value', "BUKIT BATOK STREET 33")
        cy.get('#react-contact_info-correspondence_address-level').should('have.value', "03")
        cy.get('#react-contact_info-correspondence_address-unit').should('have.value', "33")

        cy.get('#react-contact_info-offeree_name').should('have.value', "Noel")
        cy.get('#react-contact_info-offeree_designation').should('have.value', "engineer")
        cy.get('#react-contact_info-offeree_email').should('have.value', "Noel@engineer.com")

    })
})