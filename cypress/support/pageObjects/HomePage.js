class HomePage{
    getSearchIcon(){
        return cy.get('#ge-search-input')
    }
    getSearchInputField(){
        return cy.get('#ge-search-input input')
    }
    getSearchDropDown(){
        return cy.get('li[data-test="searchResultItem"] a')
    }
    getSearchField(){
        return cy.get('.styles__SearchBarContainer-sc-bbum6i-0 input')
    }
    getTitleField(){
        return cy.get('.styles__SearchLabelContainer-sc-1uotvdz-0 div')
    }
    getSearchedFourms(){
        return cy.get('.styles__ResultInnerContainer-sc-1aohvhp-4.gCwgVm')
    }
    getFourmListCount(){
        return cy.get('li.fJHqiq')
    }
    getFourmListElement(){
        return cy.get('li.fJHqiq a')
    }
}
export default HomePage
