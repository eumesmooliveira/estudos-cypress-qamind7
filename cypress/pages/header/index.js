import { elements as el } from "./elements"

class Header{
    validarQueCarrinhoPossuiItems(quantidade){
        cy.get(el.cartBadge)
        .should('be.visible')
        .and('have.text', quantidade.toString())
    }

    navegarParaCarrinho(){
        cy.get(el.cartContainer).click()
    }

    validarQueCarrinhoNaoPossuiItems(){
        cy.get(el.cartBadge)
        .should('not.exist')
        
        cy.screenshot('produto removido')
    }
}

export default new Header()