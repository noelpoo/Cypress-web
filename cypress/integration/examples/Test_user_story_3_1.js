// ETE automated test with cypress framework, using CSS selector as element locator

/// <reference types="Cypress" />

describe('Testing User Story 3', function() {
    it('Acceptance Criteria 1: read-only page after filling up all mandatory fields', function(){
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

        // filling up proposal page
        cy.get('#next-btn').click()
        cy.get('#react-project-title').type('abcde')
        cy.get('#react-project-start_date').type("10 Feb 2021")
        cy.get('#react-project-end_date').type("09 Mar 2021")
        cy.get('#react-project-description').type("test")
        cy.get('#react-select-project-activity--value > .Select-placeholder').type('FTA Consultancy{enter}')        
        cy.get('.Select-placeholder').type("Singapore{enter}")
        cy.get(':nth-child(1) > .radiobutton').click()
        cy.get('#next-btn').click()

        // filling up business impact page
        cy.get('#react-project_impact-fy_end_date_0').type("10 Feb 2021{enter}")
        cy.get('#react-project_impact-overseas_sales_0').type('10')
        cy.get('#react-project_impact-overseas_sales_1').type('10')
        cy.get('#react-project_impact-overseas_sales_2').type('10')
        cy.get('#react-project_impact-overseas_sales_3').type('10')

        cy.get('#react-project_impact-overseas_investments_0').type('10')
        cy.get('#react-project_impact-overseas_investments_1').type('10')
        cy.get('#react-project_impact-overseas_investments_2').type('10')
        cy.get('#react-project_impact-overseas_investments_3').type('10')

        cy.get('#react-project_impact-rationale_remarks').type('test test test')
        cy.get('#react-project_impact-benefits_remarks').type('test test test')
        cy.get('#next-btn').click()

        // filling up cost page
        cy.wait(1000)
        cy.get('#react-project_cost-salaries-accordion-header').click()
        cy.get('#react-project_cost-salaries-add-item').click()
        cy.get('#react-project_cost-salaries-0-name').type("Noel")
        cy.get('#react-project_cost-salaries-0-designation').type("engineer")
        cy.get('#react-project_cost-salaries-0-nric').type("s12345678z")
        cy.get('.Select-placeholder').type("Singaporean{enter}")
        cy.get('#react-project_cost-salaries-0-project_role').type("QA engineer")
        cy.get('#react-project_cost-salaries-0-involvement_months').type("1{enter}")
        cy.get('#react-project_cost-salaries-0-salary_in_billing_currency').type("7000")
        cy.get('#react-project_cost-salaries-add-item').click()
        cy.get('#react-project_cost-salaries-1-title > .row > :nth-child(1) > :nth-child(1) > .col-sm-1 > h5 > :nth-child(1) > a > .pull-right > .delete-icon').click()
        cy.get('.bgp-btn-modal-delete').click()
        cy.wait(2000)
        cy.get('#save-btn').click()
        cy.wait(2000)
        cy.get('#next-btn').click()

        // filling up declare & review page
        cy.get(':nth-child(1) > .form-group > .controls > :nth-child(1) > .radiobutton').click()
        cy.get(':nth-child(2) > .form-group > .controls > :nth-child(1) > .radiobutton').click()
        cy.get(':nth-child(3) > .form-group > .controls > :nth-child(1) > .radiobutton').click()
        cy.get(':nth-child(4) > .form-group > .controls > :nth-child(1) > .radiobutton').click()
        cy.get(':nth-child(5) > .form-group > .controls > :nth-child(1) > .radiobutton').click()
        cy.get(':nth-child(6) > .form-group > .controls > :nth-child(1) > .radiobutton').click()
        cy.get(':nth-child(7) > .form-group > .controls > :nth-child(1) > .radiobutton').click()
        cy.get(':nth-child(8) > .form-group > .controls > :nth-child(2) > .radiobutton').click()
        cy.get(':nth-child(9) > .form-group > .controls > :nth-child(2) > .radiobutton').click()
        cy.get('#react-declaration-consent_acknowledgement_check').click()

        cy.get('#review-btn').click()
        // Asserting that clicking review with mandatory fields filled directs user to read-only summary page
        cy.get('.main > :nth-child(1) > h3').should('contain', "Review Your Application")

    })

    it('Acceptance Criteria 2: Missing required info on contacts detail page', function(){
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

        // filling up contact details, missing info on "name" field
        cy.get('#react-contact_info-designation').type('engineer')
        cy.get('#react-contact_info-phone').type('99667788')
        cy.get('#react-contact_info-primary_email').type('Noel@engineer.com')

        cy.get('#react-contact_info-copied').click()

        cy.get('#react-contact_info-correspondence_address-copied').click()

        // filling up proposal page
        cy.get('#next-btn').click()
        cy.get('#react-project-title').type('abcde')
        cy.get('#react-project-start_date').type("10 Feb 2021")
        cy.get('#react-project-end_date').type("09 Mar 2021")
        cy.get('#react-project-description').type("test")
        cy.get('#react-select-project-activity--value > .Select-placeholder').type('FTA Consultancy{enter}')        
        cy.get('.Select-placeholder').type("Singapore{enter}")
        cy.get(':nth-child(1) > .radiobutton').click()
        cy.get('#next-btn').click()

        // filling up business impact page
        cy.get('#react-project_impact-fy_end_date_0').type("10 Feb 2021{enter}")
        cy.get('#react-project_impact-overseas_sales_0').type('10')
        cy.get('#react-project_impact-overseas_sales_1').type('10')
        cy.get('#react-project_impact-overseas_sales_2').type('10')
        cy.get('#react-project_impact-overseas_sales_3').type('10')

        cy.get('#react-project_impact-overseas_investments_0').type('10')
        cy.get('#react-project_impact-overseas_investments_1').type('10')
        cy.get('#react-project_impact-overseas_investments_2').type('10')
        cy.get('#react-project_impact-overseas_investments_3').type('10')

        cy.get('#react-project_impact-rationale_remarks').type('test test test')
        cy.get('#react-project_impact-benefits_remarks').type('test test test')
        cy.get('#next-btn').click()

        // filling up cost page
        cy.wait(1000)
        cy.get('#react-project_cost-salaries-accordion-header').click()
        cy.get('#react-project_cost-salaries-add-item').click()
        cy.get('#react-project_cost-salaries-0-name').type("Noel")
        cy.get('#react-project_cost-salaries-0-designation').type("engineer")
        cy.get('#react-project_cost-salaries-0-nric').type("s12345678z")
        cy.get('.Select-placeholder').type("Singaporean{enter}")
        cy.get('#react-project_cost-salaries-0-project_role').type("QA engineer")
        cy.get('#react-project_cost-salaries-0-involvement_months').type("1{enter}")
        cy.get('#react-project_cost-salaries-0-salary_in_billing_currency').type("7000")
        cy.get('#react-project_cost-salaries-add-item').click()
        cy.get('#react-project_cost-salaries-1-title > .row > :nth-child(1) > :nth-child(1) > .col-sm-1 > h5 > :nth-child(1) > a > .pull-right > .delete-icon').click()
        cy.get('.bgp-btn-modal-delete').click()
        cy.wait(2000)
        cy.get('#save-btn').click()
        cy.wait(2000)
        cy.get('#next-btn').click()

        // filling up declare & review page
        cy.get(':nth-child(1) > .form-group > .controls > :nth-child(1) > .radiobutton').click()
        cy.get(':nth-child(2) > .form-group > .controls > :nth-child(1) > .radiobutton').click()
        cy.get(':nth-child(3) > .form-group > .controls > :nth-child(1) > .radiobutton').click()
        cy.get(':nth-child(4) > .form-group > .controls > :nth-child(1) > .radiobutton').click()
        cy.get(':nth-child(5) > .form-group > .controls > :nth-child(1) > .radiobutton').click()
        cy.get(':nth-child(6) > .form-group > .controls > :nth-child(1) > .radiobutton').click()
        cy.get(':nth-child(7) > .form-group > .controls > :nth-child(1) > .radiobutton').click()
        cy.get(':nth-child(8) > .form-group > .controls > :nth-child(2) > .radiobutton').click()
        cy.get(':nth-child(9) > .form-group > .controls > :nth-child(2) > .radiobutton').click()
        cy.get('#react-declaration-consent_acknowledgement_check').click()

        cy.get('#review-btn').click()

        // asserting review brings user to contact info form that has missing info
        cy.url().should('contain', "/form/contact_info")
        cy.get('#react-contact_info-name-alert').should('exist')
    })

    it('Acceptance Criteria 2: Missing required field in proposal page', function(){
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

        // filling up proposal page, with "project title" field missing
        cy.get('#next-btn').click()
        cy.get('#react-project-start_date').type("10 Feb 2021")
        cy.get('#react-project-end_date').type("09 Mar 2021")
        cy.get('#react-project-description').type("test")
        cy.get('#react-select-project-activity--value > .Select-placeholder').type('FTA Consultancy{enter}')        
        cy.get('.Select-placeholder').type("Singapore{enter}")
        cy.get(':nth-child(1) > .radiobutton').click()
        cy.get('#next-btn').click()

        // filling up business impact page
        cy.get('#react-project_impact-fy_end_date_0').type("10 Feb 2021{enter}")
        cy.get('#react-project_impact-overseas_sales_0').type('10')
        cy.get('#react-project_impact-overseas_sales_1').type('10')
        cy.get('#react-project_impact-overseas_sales_2').type('10')
        cy.get('#react-project_impact-overseas_sales_3').type('10')

        cy.get('#react-project_impact-overseas_investments_0').type('10')
        cy.get('#react-project_impact-overseas_investments_1').type('10')
        cy.get('#react-project_impact-overseas_investments_2').type('10')
        cy.get('#react-project_impact-overseas_investments_3').type('10')

        cy.get('#react-project_impact-rationale_remarks').type('test test test')
        cy.get('#react-project_impact-benefits_remarks').type('test test test')
        cy.get('#next-btn').click()

        // filling up cost page
        cy.wait(1000)
        cy.get('#react-project_cost-salaries-accordion-header').click()
        cy.get('#react-project_cost-salaries-add-item').click()
        cy.get('#react-project_cost-salaries-0-name').type("Noel")
        cy.get('#react-project_cost-salaries-0-designation').type("engineer")
        cy.get('#react-project_cost-salaries-0-nric').type("s12345678z")
        cy.get('.Select-placeholder').type("Singaporean{enter}")
        cy.get('#react-project_cost-salaries-0-project_role').type("QA engineer")
        cy.get('#react-project_cost-salaries-0-involvement_months').type("1{enter}")
        cy.get('#react-project_cost-salaries-0-salary_in_billing_currency').type("7000")
        cy.get('#react-project_cost-salaries-add-item').click()
        cy.get('#react-project_cost-salaries-1-title > .row > :nth-child(1) > :nth-child(1) > .col-sm-1 > h5 > :nth-child(1) > a > .pull-right > .delete-icon').click()
        cy.get('.bgp-btn-modal-delete').click()
        cy.wait(2000)
        cy.get('#save-btn').click()
        cy.wait(2000)
        cy.get('#next-btn').click()

        // filling up declare & review page
        cy.get(':nth-child(1) > .form-group > .controls > :nth-child(1) > .radiobutton').click()
        cy.get(':nth-child(2) > .form-group > .controls > :nth-child(1) > .radiobutton').click()
        cy.get(':nth-child(3) > .form-group > .controls > :nth-child(1) > .radiobutton').click()
        cy.get(':nth-child(4) > .form-group > .controls > :nth-child(1) > .radiobutton').click()
        cy.get(':nth-child(5) > .form-group > .controls > :nth-child(1) > .radiobutton').click()
        cy.get(':nth-child(6) > .form-group > .controls > :nth-child(1) > .radiobutton').click()
        cy.get(':nth-child(7) > .form-group > .controls > :nth-child(1) > .radiobutton').click()
        cy.get(':nth-child(8) > .form-group > .controls > :nth-child(2) > .radiobutton').click()
        cy.get(':nth-child(9) > .form-group > .controls > :nth-child(2) > .radiobutton').click()
        cy.get('#react-declaration-consent_acknowledgement_check').click()

        cy.get('#review-btn').click()
        
        // Assert redirect user to proposal form page
        cy.url().should('contain', '/form/project')
        cy.get('#react-project-title-alert').should('exist')

    })

    it('Acceptance Criteria 2: Missing cost info', function(){
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

        // filling up proposal page
        cy.get('#next-btn').click()
        cy.get('#react-project-title').type('abcde')
        cy.get('#react-project-start_date').type("10 Feb 2021")
        cy.get('#react-project-end_date').type("09 Mar 2021")
        cy.get('#react-project-description').type("test")
        cy.get('#react-select-project-activity--value > .Select-placeholder').type('FTA Consultancy{enter}')        
        cy.get('.Select-placeholder').type("Singapore{enter}")
        cy.get(':nth-child(1) > .radiobutton').click()
        cy.get('#next-btn').click()

        // filling up business impact page
        cy.get('#react-project_impact-fy_end_date_0').type("10 Feb 2021{enter}")
        cy.get('#react-project_impact-overseas_sales_0').type('10')
        cy.get('#react-project_impact-overseas_sales_1').type('10')
        cy.get('#react-project_impact-overseas_sales_2').type('10')
        cy.get('#react-project_impact-overseas_sales_3').type('10')

        cy.get('#react-project_impact-overseas_investments_0').type('10')
        cy.get('#react-project_impact-overseas_investments_1').type('10')
        cy.get('#react-project_impact-overseas_investments_2').type('10')
        cy.get('#react-project_impact-overseas_investments_3').type('10')

        cy.get('#react-project_impact-rationale_remarks').type('test test test')
        cy.get('#react-project_impact-benefits_remarks').type('test test test')
        cy.get('#next-btn').click()

        // filling up cost page
        cy.wait(5000)
        cy.get('#next-btn').click()

        // filling up declare & review page
        cy.get(':nth-child(1) > .form-group > .controls > :nth-child(1) > .radiobutton').click()
        cy.get(':nth-child(2) > .form-group > .controls > :nth-child(1) > .radiobutton').click()
        cy.get(':nth-child(3) > .form-group > .controls > :nth-child(1) > .radiobutton').click()
        cy.get(':nth-child(4) > .form-group > .controls > :nth-child(1) > .radiobutton').click()
        cy.get(':nth-child(5) > .form-group > .controls > :nth-child(1) > .radiobutton').click()
        cy.get(':nth-child(6) > .form-group > .controls > :nth-child(1) > .radiobutton').click()
        cy.get(':nth-child(7) > .form-group > .controls > :nth-child(1) > .radiobutton').click()
        cy.get(':nth-child(8) > .form-group > .controls > :nth-child(2) > .radiobutton').click()
        cy.get(':nth-child(9) > .form-group > .controls > :nth-child(2) > .radiobutton').click()
        cy.get('#react-declaration-consent_acknowledgement_check').click()

        cy.get('#review-btn').click()
        
        // asserting that redirect brings user to project_cost page, where info is missing
        cy.url().should('contain', '/form/project_cost')

    })

    it('Acceptance Criteria 2: Missing info on Business-impact page', function(){
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

        // filling up proposal page
        cy.get('#next-btn').click()
        cy.get('#react-project-title').type('abcde')
        cy.get('#react-project-start_date').type("10 Feb 2021")
        cy.get('#react-project-end_date').type("09 Mar 2021")
        cy.get('#react-project-description').type("test")
        cy.get('#react-select-project-activity--value > .Select-placeholder').type('FTA Consultancy{enter}')        
        cy.get('.Select-placeholder').type("Singapore{enter}")
        cy.get(':nth-child(1) > .radiobutton').click()
        cy.get('#next-btn').click()

        // filling up business impact page, with "rational for projections" info missing
        cy.get('#react-project_impact-fy_end_date_0').type("10 Feb 2021{enter}")
        cy.get('#react-project_impact-overseas_sales_0').type('10')
        cy.get('#react-project_impact-overseas_sales_1').type('10')
        cy.get('#react-project_impact-overseas_sales_2').type('10')
        cy.get('#react-project_impact-overseas_sales_3').type('10')

        cy.get('#react-project_impact-overseas_investments_0').type('10')
        cy.get('#react-project_impact-overseas_investments_1').type('10')
        cy.get('#react-project_impact-overseas_investments_2').type('10')
        cy.get('#react-project_impact-overseas_investments_3').type('10')

        cy.get('#react-project_impact-benefits_remarks').type('test test test')
        cy.get('#next-btn').click()

        // filling up cost page
        cy.wait(1000)
        cy.get('#react-project_cost-salaries-accordion-header').click()
        cy.get('#react-project_cost-salaries-add-item').click()
        cy.get('#react-project_cost-salaries-0-name').type("Noel")
        cy.get('#react-project_cost-salaries-0-designation').type("engineer")
        cy.get('#react-project_cost-salaries-0-nric').type("s12345678z")
        cy.get('.Select-placeholder').type("Singaporean{enter}")
        cy.get('#react-project_cost-salaries-0-project_role').type("QA engineer")
        cy.get('#react-project_cost-salaries-0-involvement_months').type("1{enter}")
        cy.get('#react-project_cost-salaries-0-salary_in_billing_currency').type("7000")
        cy.get('#react-project_cost-salaries-add-item').click()
        cy.get('#react-project_cost-salaries-1-title > .row > :nth-child(1) > :nth-child(1) > .col-sm-1 > h5 > :nth-child(1) > a > .pull-right > .delete-icon').click()
        cy.get('.bgp-btn-modal-delete').click()
        cy.wait(2000)
        cy.get('#save-btn').click()
        cy.wait(2000)
        cy.get('#next-btn').click()

        // filling up declare & review page
        cy.get(':nth-child(1) > .form-group > .controls > :nth-child(1) > .radiobutton').click()
        cy.get(':nth-child(2) > .form-group > .controls > :nth-child(1) > .radiobutton').click()
        cy.get(':nth-child(3) > .form-group > .controls > :nth-child(1) > .radiobutton').click()
        cy.get(':nth-child(4) > .form-group > .controls > :nth-child(1) > .radiobutton').click()
        cy.get(':nth-child(5) > .form-group > .controls > :nth-child(1) > .radiobutton').click()
        cy.get(':nth-child(6) > .form-group > .controls > :nth-child(1) > .radiobutton').click()
        cy.get(':nth-child(7) > .form-group > .controls > :nth-child(1) > .radiobutton').click()
        cy.get(':nth-child(8) > .form-group > .controls > :nth-child(2) > .radiobutton').click()
        cy.get(':nth-child(9) > .form-group > .controls > :nth-child(2) > .radiobutton').click()
        cy.get('#react-declaration-consent_acknowledgement_check').click()

        cy.get('#review-btn').click()
        
        // assert that redirect users to business-impact page
        cy.url().should('contain', '/form/project_impact')
        cy.get('#react-project_impact-rationale_remarks-alert').should('exist')
    })

    
})