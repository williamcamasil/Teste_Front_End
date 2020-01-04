/* eslint-disable react/no-direct-mutation-state */
import React, {Component} from 'react';
import logo from '../../assets/img/logo.svg';
import usuario from '../../assets/img/usuario.svg';
import carrinho from '../../assets/img/carrinho.svg';
import carrinhoBranco from '../../assets/img/carrinho_branco.svg';

import Dropdown, { MenuItem } from '@trendmicro/react-dropdown';

class Header extends Component{
  constructor() {
    super();
    this.state = {
        nomeProduto: [],
        imagemProduto: [],
        precoProduto: [],
        qtdProduto: [],
        ids: [],

        valorItem: [],
        valorTotal: 0
    }
  }

  //Método que mostra os produtos adquiridos no carrinho
  mostrarLocalStorage = () => {
    if (localStorage.getItem ( "qtdids" )){
        this.setState({ i: localStorage.getItem( "qtdids"  ) });
    }

    if (localStorage.getItem ( "nomeProduto" )){
      this.setState({  nomeProduto : JSON.parse(localStorage.getItem( "nomeProduto" )) });
    }

    if (localStorage.getItem ( "imagemProduto" )){
        this.setState({  imagemProduto : JSON.parse(localStorage.getItem( "imagemProduto" )) });
    }

    if (localStorage.getItem ( "precoProduto" )){
        this.setState({  precoProduto : JSON.parse(localStorage.getItem( "precoProduto" )) });
    }

    if (localStorage.getItem ( "qtdProduto" )){
        this.setState({  qtdProduto : JSON.parse(localStorage.getItem( "qtdProduto" )) });
    }

    //SOMANDO O VALOR TOTAL
    setTimeout(() => {
      let res = 0
      for(let v = 0; v <= this.state.i-1; v++){
          this.state.valorItem[v] = this.state.qtdProduto[v] * this.state.precoProduto[v]
          res += this.state.valorItem[v]
      }

      this.setState({  valorTotal : res });      
    }, 100);
  }

  decrease = () => {
    this.setState({ value: this.state.value - 1 });
  }

  increase = () => {
      this.setState({ value: this.state.value + 1 });
  }

  limparCompra = () => {
    localStorage.removeItem( "qtdids" )
    localStorage.removeItem( "nomeProduto" )
    localStorage.removeItem( "imagemProduto" )
    localStorage.removeItem( "precoProduto" )
    localStorage.removeItem( "qtdProduto" )
    localStorage.removeItem( "ids" )
  }

  render(){
    let produtos = []
    for(let i=0; i<this.state.i; i++){
      produtos.push(
      <MenuItem header id="ult2">
        <span>X</span>
        <img id="imgProduto" src={this.state.imagemProduto[i]}  alt="Botão de usuário para acessar sua conta"/> 
        
        <div id="nqp">
          <span id="desc">{this.state.nomeProduto[i]}</span> 
          <div className="def-number-input number-input">
              <button onClick={() => this.decrease()} className="minus"></button>
              <input className="quantity" name="quantity" value={this.state.qtdProduto[i]} type="number" />
              <button onClick={() => this.increase()} className="plus"></button>
          </div>
        </div>

        {/* <span  id="preco">R$ {this.state.qtdProduto[i] * this.state.precoProduto[i]}</span> */}
        <span  id="preco">R$ {this.state.valorItem[i] }</span>
      </MenuItem>)
    }

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
                        
                        <div id="conta">
                                <div>
                                  <Dropdown onSelect={(eventKey) => {}} id="dropMenu">
                                      <Dropdown.Toggle btnStyle="flat" id="maisInformacoes" onClick={() => this.mostrarLocalStorage()}>
                                          <img src={usuario} alt="Botão de usuário para acessar sua conta"/> <span>Minha conta</span>
                                      </Dropdown.Toggle>
                                    <Dropdown.Menu id="menuPrincipal">
                                    <div id="ultimaCompra">
                                        <MenuItem header id="usuario">Olá Willian</MenuItem>
                                        <MenuItem header>willian.lopes@corebiz.com.br</MenuItem>
                                        <MenuItem eventKey={1} id="sair">sair</MenuItem>
                                        <MenuItem divider />
                                        <MenuItem header id='"ult1'>Última compra</MenuItem>
                                        <MenuItem header id="ult2">
                                            <img id="imgProduto" src={this.state.imagemProduto[this.state.i-1]} alt="Imagem do produto comprado"/> 
                                            <span id="desc">{this.state.nomeProduto[this.state.i-1]}</span> 
                                            <span  id="preco">R$ {this.state.precoProduto[this.state.i-1]}</span>
                                        </MenuItem>                        
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

                              <Dropdown onSelect={(eventKey) => {}}>
                                  <Dropdown.Toggle btnStyle="flat" id="maisInformacoes" onClick={() => this.mostrarLocalStorage()}>
                                      <span>Minha conta</span>
                                  </Dropdown.Toggle>
                                <Dropdown.Menu id="menuPrincipal">
                                  <div id="ultimaCompra">
                                      <MenuItem header id="usuario">Olá Willian</MenuItem>
                                      <MenuItem header>willian.lopes@corebiz.com.br</MenuItem>
                                      <MenuItem eventKey={1} id="sair">sair</MenuItem>
                                      <MenuItem divider />
                                      <MenuItem header id='"ult1'>Última compra</MenuItem>
                                      <MenuItem header id="ult2">
                                          <img id="imgProduto" src={this.state.imagemProduto[this.state.i-1]} alt="Imagem do produto comprado"/> 
                                          <span id="desc">{this.state.nomeProduto[this.state.i-1]}</span> 
                                          <span  id="preco">R$ {this.state.precoProduto[this.state.i-1]}</span>
                                      </MenuItem>                      
                                    </div>
                                </Dropdown.Menu>
                              </Dropdown>

                            </div>
                        </div>
                    </div>              
                </nav>
              
                <Dropdown onSelect={(eventKey) => {}}>
                    <Dropdown.Toggle btnStyle="flat" id="maisInformacoes" onClick={() => this.mostrarLocalStorage()}>
                        <p id="qtdPedidos">{this.state.i}</p><img src={carrinho} alt="Carrinho de compras realizadas"/>
                    </Dropdown.Toggle>
                    <Dropdown.Menu id="menuPrincipal">
                        <MenuItem header id="areaItens">
                            <span>MEU CARRINHO</span>  
                            <span>{this.state.i} item(s)</span>
                        </MenuItem>
                        <div id="itens">
                          {produtos}
                          <MenuItem divider />
                          <MenuItem header id="totalItens">Total: R${this.state.valorTotal.toFixed(2)}</MenuItem> 
                          <MenuItem header>
                              <a href="/" id="comprarItens">
                                COMPRAR <img src={carrinhoBranco} alt="Carrinho de compras na cor branca" />
                              </a>
                          </MenuItem> 
                          <MenuItem header>
                              <a href="/" id="limparItens" onClick={() => this.limparCompra()}>
                                  X Limpar carrinho
                              </a>
                          </MenuItem>                         
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