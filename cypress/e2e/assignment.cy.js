
import HomePage from '../support/pageObjects/HomePage'

describe('QA Automation Technical task - Telus.com Search bar', () => {
const homePage = new HomePage()
let data;
  before(() =>{
    //Fixture file use for accessing data
        cy.fixture('example').then(function(fdata){
            data = fdata
        })
    })

    it('Automate search bar', () => {
    cy.visit(Cypress.env('url'))
    cy.wait(4000)
    homePage.getSearchIcon().click()
    homePage.getSearchInputField().type(data.SearchedValue)
    homePage.getSearchDropDown().eq(2).click()
  })

  it('Varify searched value', function(){
    homePage.getSearchField().invoke('val')
    .then(value => {
      homePage.getTitleField().should('include.text', value);
    });
  })

  it('Varify forum list', function(){
    homePage.getSearchedFourms().eq(1).within(()=>{
      homePage.getFourmListCount().should('have.length.at.least', 6)
       homePage.getFourmListElement().each(($li, i, $list)=>{
         cy.wrap($li).should('have.attr', 'href').and('include', data.DomainName);
       }) 
     })
  })

  it('Click on varified forum item',function(){
    homePage.getSearchedFourms().eq(2).within(()=>{
      homePage.getFourmListCount().eq(0).click()
    })
  })
  
})

