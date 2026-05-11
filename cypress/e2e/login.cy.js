import Login from '../pages/login'
import Inventory from '../pages/inventory'

describe('Login', () =>{

    beforeEach (() => {
        Login.visitarPagina()
    })
    it('Realizar login com sucesso', () =>{  
        // Act
        Login.preencherCredenciaisValidas()

        //Assert
        Inventory.validarAcessoAPagina()

    })

    it('Realizar o login informando as credenciais inválidas', () => {  
        // Act
        Login.preencherCredenciaisInvalidas()
        
        //Assert
        Login.validarErroCredenciaisInvalidas()
    })
})