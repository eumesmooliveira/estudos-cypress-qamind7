class Cart{
    validarProdutoPresenteNoCarrinho(name){
        cy.contains(name).should('be.visible')
        
        cy.screenshot('Produto adicionado')
    }
}

export default new Cart()