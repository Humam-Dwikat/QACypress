describe('visit stackInfo', () => {
  it('choose two categories', () => {
    cy.visit('https://stacksinfo.web.app/');

    
    cy.get('.filter-button').should('exist').click();
    //choose Backend and Frontend
    cy.get('input.PrivateSwitchBase-input[type="checkbox"]').eq(0).check(); 
    cy.get('input.PrivateSwitchBase-input[type="checkbox"]').eq(4).check();

    }); 
  it('choose one category', ()=>{
    cy.visit('https://stacksinfo.web.app/');

    
    cy.get('.filter-button').should('exist').click();
    //choose Frontend
    cy.get('input.PrivateSwitchBase-input[type="checkbox"]').eq(4).check();
  });
  it('choose three categories', ()=>{
    cy.visit('https://stacksinfo.web.app/');

    
    cy.get('.filter-button').should('exist').click();
    //choose Backend, Frontend and Data Analytics
    cy.get('input.PrivateSwitchBase-input[type="checkbox"]').eq(0).check(); 
    cy.get('input.PrivateSwitchBase-input[type="checkbox"]').eq(4).check();
    cy.get('input.PrivateSwitchBase-input[type="checkbox"]').eq(2).check();
  });
  it('choose all categories', ()=>{
    cy.visit('https://stacksinfo.web.app/');

    
    cy.get('.filter-button').should('exist').click();
    //choose Backend, Frontend and Data Analytics
    cy.get('input.PrivateSwitchBase-input[type="checkbox"]').check(); 
  });
  it('choose one category and choose one type of', ()=>{
    cy.visit('https://stacksinfo.web.app/');

    
    cy.get('.filter-button').should('exist').click();
    //choose Backend, Frontend and Data Analytics
    cy.get('input.PrivateSwitchBase-input[type="checkbox"]').check(); 
  });
  
  
  });

