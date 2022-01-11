
/// <reference types="cypress" />
it('QA task',  async ()=> {

  var values=[];
  cy.visit('https://sellerfusion-qa-test.vercel.app/')
  //Wait for site to load properly
  cy.wait(3000)
  //Go to First FBA tooltip
  cy.get(".MuiChip-root > .MuiChip-label").contains('FBA').first().click()
  
  //Take required values and verify
  cy.get("div[class^='MuiTooltip-popper']>div[class*='MuiTooltip-tooltip']>div[class*='MuiGrid-root']>div>div>b").each(($el) => {
      
      values.push($el.text());

       }) .then(() => {
         
        var a =parseInt(values[1])+ parseInt(values[2])+ parseInt(values[3])+ parseInt(values[4])+ parseInt(values[5])
        expect(a).to.eq(parseInt(values[6]))
        
       })
})
