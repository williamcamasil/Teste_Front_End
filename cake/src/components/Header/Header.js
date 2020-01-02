import React, {Component} from 'react';
import logo from '../../assets/img/logo.svg';
import usuario from '../../assets/img/usuario.svg';
import carrinho from '../../assets/img/carrinho.svg';

class Header extends Component{
  render(){
    return(
      <div>
        <div className="container">
          <header id="header_"> 
                <a href="/"><img src={logo} alt="Logo com um bolo amarelo, marrom e vermelho, com escrita Cake teste back" /></a> 
                
                <nav id="menuGeral">
                    <div id="menuWeb">
                        <ul id="menu">
                            <li><a href="/">Categoria 01</a></li>
                            <li><a href="/">Categoria 02</a></li>
                            <li><a href="/">Categoria 03</a></li>
                            <li><a href="/">Categoria 04</a></li>
                        </ul>
                        <a href="/"><img src={usuario} alt="Botão de usuário para acessar sua conta"/> Minha conta</a>   
                    </div>
                    
                    <div id="menuMobile">    
                        <div className="nav">
                            <label id="lblMenu" htmlFor="toggle">&#9776;</label>
                            <input type="checkbox" id="toggle"/>
                            <div className="menuHome">
                              <a href="/">Categoria 01</a>
                              <a href="/">Categoria 02</a>
                              <a href="/">Categoria 03</a>
                              <a href="/">Categoria 04</a>   
                              <a href="/">Minha conta</a>                                    
                            </div>
                        </div>
                    </div>              
                </nav>
                
                {/* <a href="#"><img src={usuario} alt="Botão de usuário para acessar sua conta"/> Minha conta</a>    */}

                <a href="/"><img src={carrinho} alt="Carrinho de compras realizadas"/></a>  
          </header>
        </div>
        <div id="line"></div>
      </div>
    );
  }
}

export default Header;