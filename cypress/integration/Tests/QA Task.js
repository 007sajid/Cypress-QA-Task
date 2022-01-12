
/// <reference types="cypress" />

describe('Acquco suite', () => {
  it('Single Product Verification',  async ()=> {

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
          //Array method to verify values present in tooltip equals total value. 
          var a =parseInt(values[1])+ parseInt(values[2])+ parseInt(values[3])+ parseInt(values[4])+ parseInt(values[5])
          expect(a).to.eq(parseInt(values[6]))
          
         })
  })

it('Data from all products',async()=> {

  
    cy.visit('https://sellerfusion-qa-test.vercel.app/')
      
    
    Cypress.on('uncaught:exception', () => false)
     
   

    var temp=new Map();
    let arr2=[];
    var i=-1;
    var a;
    const ArrayTest =() => {
       return new Cypress.Promise((resolve,reject)=>
       {
        cy.get(".MuiChip-root > .MuiChip-label").each((item) => {
          cy.wrap(item).click({force: true})

          cy.get("div[class*='MuiTooltip-tooltipArrow']>div>div").each(($e1)=>{
            
            var text1=$e1.find('div').text()
            
            if(i%2!=0){
        
              a=text1
              if(a=='Total')
              {
                a="Total"+i
              }
              
             }else{
              temp.set(a,$e1.text())
             }
             i++;
       
     }).then(()=>{
     
       var temp1 = new Map(temp);
        arr2.push(temp1)
        temp.clear()
     })
    
     
    }).then(()=>{
      return resolve(arr2)
    })
       })
        
  }
      const bussInfo =await ArrayTest();
      
      console.log(bussInfo)
      
  })  
 
    
})

