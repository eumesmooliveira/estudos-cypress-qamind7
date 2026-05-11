import Login from '../pages/login'
import inventory from '../pages/inventory'
import Header from '../pages/header'
import Cart from '../pages/cart'
import header from '../pages/header'

describe('Carrinho', () => {
    beforeEach(() => {

        Login.visitarPagina()
        Login.preencherCredenciaisValidas()
        })

    it('Adicionar produto ao carrinho com sucesso', () => {
        const qtdItensAdicionados = 1
        inventory.adicionarProduto('Sauce Labs Backpack')

        //Assert        
        Header.validarQueCarrinhoPossuiItems(qtdItensAdicionados)
        Header.navegarParaCarrinho()
        Cart.validarProdutoPresenteNoCarrinho('Sauce Labs Backpack')

        
    })

    it('Remover produto do carrinho com sucesso', () => {
        inventory.adicionarProduto('Sauce Labs Backpack')
        inventory.removerProduto('Sauce Labs Backpack')
        header.validarQueCarrinhoNaoPossuiItems()
        
        
    })
})