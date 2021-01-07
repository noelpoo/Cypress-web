// ETE automated test with cypress framework, using CSS selector as element locator

/// <reference types="Cypress" />


describe('Tesing User Story 3.2', function(){
    it('Acceptance Criteria 3, 4 & 5: read only summary page should correctly contain previously filled details', function(){
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


        // assert contact details in summary page are correct
        cy.get(':nth-child(4) > a > .menu-text').click()
        cy.get('#react-contact_info-name').should('contain', "Noel")
        cy.get('#react-contact_info-designation').should('contain', "engineer")
        cy.get('#react-contact_info-phone').should('contain', "99667788")
        cy.get('#react-contact_info-primary_email').should('contain', 'Noel@engineer.com')
        cy.get('#react-contact_info-correspondence_address').should('contain', '320 BUKIT BATOK STREET 33,')

        cy.get('#react-contact_info-offeree_name').should('contain', 'Noel')
        cy.get('#react-contact_info-offeree_designation').should('contain', 'engineer')
        cy.get('#react-contact_info-offeree_email').should('contain', 'Noel@engineer.com')

        // assert proposal details in summary page are correct
        cy.get(':nth-child(5) > a > .menu-text')
        cy.get('#react-project-title').should('contain', 'abcde')
        cy.get('#react-project-start_date').should('contain', '10 Feb 2021')
        cy.get('#react-project-end_date').should('contain', '09 Mar 2021')
        cy.get('#react-project-project_duration_months').should('contain', '1 month')
        cy.get('#react-project-description').should('contain', 'test')
        cy.get('#react-project-primary_market').should('contain', 'Singapore')

        // assert business impact details in summary page are correct
        cy.get(':nth-child(6) > a > .menu-text').click()
        cy.get('#react-project_impact-fy_end_date_0').should('contain', '10 Feb 2021')
        cy.get('#react-project_impact-fy_end_date_3').should('contain', '10 Feb 2024')

        cy.get('#react-project_impact-overseas_sales_0').should('contain', '10.00')
        cy.get('#react-project_impact-overseas_sales_1').should('contain', '10.00')
        cy.get('#react-project_impact-overseas_sales_2').should('contain', '10.00')
        cy.get('#react-project_impact-overseas_sales_3').should('contain', '10.00')

        cy.get('#react-project_impact-overseas_investments_0').should('contain', '10.00')
        cy.get('#react-project_impact-overseas_investments_1').should('contain', '10.00')
        cy.get('#react-project_impact-overseas_investments_2').should('contain', '10.00')
        cy.get('#react-project_impact-overseas_investments_3').should('contain', '10.00')

        cy.get('#react-project_impact-rationale_remarks').should('contain', 'test test test')
        cy.get('#react-project_impact-benefits_remarks').should('contain', 'test test test')

        // assert cost details in summary page are correct
        cy.get(':nth-child(7) > a > .menu-text').click()
        cy.get('#react-project_cost-salaries-accordion-header > .row > .col-md-5').should('contain', 'SGD 7,000.00')
        cy.get('#react-project_cost-salaries-0-name').should('contain', 'Noel')
        cy.get('#react-project_cost-salaries-0-designation').should('contain', 'engineer')
        cy.get('#react-project_cost-salaries-0-nationality').should('contain', 'Singaporean')
        cy.get('#react-project_cost-salaries-0-involvement_months').should('contain', '1.0 months')
        cy.get('#react-project_cost-salaries-0-monthly_salary').should('contain', 'SGD 7,000.00')

        // assert ‘Consent and Acknowledgement’ checkbox
        cy.get(':nth-child(8) > a > .menu-text').click()
        cy.get('.bgp-checkboxlabel').should('contain', 'We, the Applicant, declare that the facts stated in this application and the accompanying information are true and correct to the best of our knowledge and that we have not withheld/distort any material facts. We understand that we have a continuing obligation to promptly notify the Agency if there is any change affecting the information set out in this application form and declaration.')
        cy.get('#react-declaration-info_truthfulness_check').click()
        cy.wait(1000)
        cy.get('#submit-btn').click()

        // AC 5: assert success message box, that Ref ID & "Enterprise Singapore" exists
        cy.url().should('contain', '/view')
        cy.get('.card > :nth-child(2) > :nth-child(1) > h3').should('contain', 'Your application has been submitted.')
        cy.get(':nth-child(2) > .key-status-section > tbody > :nth-child(1) > :nth-child(1)').should('contain', 'Ref ID:')
        cy.get('.value > :nth-child(1)').should('contain', 'Enterprise Singapore')

        // cy.get(':nth-child(2) > .key-status-section > tbody > :nth-child(1) > .value').as('ref_id')
        // var ref_id = cy.get('ref_id').text()

        // AC 6: My Grants’ dashboard should show the Application under the ‘Processing’ tab.
        cy.get('.is-active').click()
        cy.get('#grants > :nth-child(3) > .dashboard-tab-container > .nav > :nth-child(3) > a').click()
        // cy.get('#db-apps-processing > .tab-content > :nth-child(1) > :nth-child(1)').should('contain', ref_id)
        cy.get('#db-apps-processing > .tab-content > :nth-child(1) > .project-title > a > .title-div').should('contain', 'abcde')
        
    })
})