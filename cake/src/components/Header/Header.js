import React, {Component} from 'react';
import logo from '../../assets/img/logo.svg';
import usuario from '../../assets/img/usuario.svg';
import carrinho from '../../assets/img/carrinho.svg';
import ursinho from '../../assets/img/ursinho.svg';
import carrinhoBranco from '../../assets/img/carrinho_branco.svg';

import Dropdown, { MenuItem } from '@trendmicro/react-dropdown';

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
                        
                        {/* <a href="/"><img src={usuario} alt="Botão de usuário para acessar sua conta"/> Minha conta</a>    */}
                      
                        <div id="conta">
                                <div>
                                  <Dropdown onSelect={(eventKey) => {}}>
                                      <Dropdown.Toggle btnStyle="flat" id="maisInformacoes">
                                          <img src={usuario} alt="Botão de usuário para acessar sua conta"/> <span>Minha conta</span>
                                      </Dropdown.Toggle>
                                    <Dropdown.Menu>
                                    <div id="ultimaCompra">
                                        <MenuItem header id="usuario">Olá Willian</MenuItem>
                                        <MenuItem header>willian.lopes@corebiz.com.br</MenuItem>
                                        <MenuItem eventKey={1} id="sair">sair</MenuItem>
                                        <MenuItem divider />
                                        <MenuItem header id='"ult1'>Última compra</MenuItem>
                                        <MenuItem header id="ult2"><img id="imgUrsinho" src={ursinho} alt="Botão de usuário para acessar sua conta"/> <span id="desc">BOMBOM GLAMOUR 200G</span> <span  id="preco">R$ 1.99</span></MenuItem>                        
                                      </div>
                                    </Dropdown.Menu>
                                  </Dropdown>
                                </div>
                            </div>
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
                              {/* <a href="/">Minha conta</a>  */}
                              <Dropdown onSelect={(eventKey) => {}}>
                                  <Dropdown.Toggle btnStyle="flat" id="maisInformacoes">
                                      <span>Minha conta</span>
                                  </Dropdown.Toggle>
                                <Dropdown.Menu>
                                  <div id="ultimaCompra">
                                      <MenuItem header id="usuario">Olá Willian</MenuItem>
                                      <MenuItem header>willian.lopes@corebiz.com.br</MenuItem>
                                      <MenuItem eventKey={1} id="sair">sair</MenuItem>
                                      <MenuItem divider />
                                      <MenuItem header id='"ult1'>Última compra</MenuItem>
                                      <MenuItem header id="ult2"><img id="imgUrsinho" src={ursinho} alt="Botão de usuário para acessar sua conta"/> <span id="desc">BOMBOM GLAMOUR 200G</span> <span  id="preco">R$ 1.99</span></MenuItem>                        
                                    </div>
                                </Dropdown.Menu>
                              </Dropdown>

                            </div>
                        </div>
                    </div>              
                </nav>
                
                {/* <a href="#"><img src={usuario} alt="Botão de usuário para acessar sua conta"/> Minha conta</a>    */}

                {/* <a href="/"><img src={carrinho} alt="Carrinho de compras realizadas"/></a>   */}

                <Dropdown onSelect={(eventKey) => {}}>
                    <Dropdown.Toggle btnStyle="flat" id="maisInformacoes">
                        <p id="qtdPedidos">0</p><img src={carrinho} alt="Carrinho de compras realizadas"/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <MenuItem header id="areaItens"><span>MEU CARRINHO</span>  <span>03 item(s)</span></MenuItem>
                        <div id="itens">
                          <MenuItem header id="ult2"><img id="imgUrsinho" src={ursinho} alt="Botão de usuário para acessar sua conta"/> <span id="desc">BOMBOM GLAMOUR 200G</span> <span  id="preco">R$ 1.99</span></MenuItem>   
                          <MenuItem divider />
                          <MenuItem header id="totalItens">Total: R$80,19</MenuItem> 
                          <MenuItem header><a href="/" id="comprarItens">COMPRAR <img src={carrinhoBranco} alt="Carrinho de compras na cor branca" /></a></MenuItem> 
                          <MenuItem header><a href="/" id="limparItens">X Limpar carrinho</a></MenuItem>                         
                        </div>
                    </Dropdown.Menu>
                </Dropdown>
          </header>
        </div>
        <div id="line"></div>
      </div>
    );
  }
}

export default Header;