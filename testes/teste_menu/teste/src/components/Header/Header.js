import React, {Component} from 'react';
import logo from '../../assets/img/logo.svg';
import usuario from '../../assets/img/usuario.svg';
import carrinho from '../../assets/img/carrinho.svg';
import ursinho from '../../assets/img/ursinho.jpg';
import carrinhoBranco from '../../assets/img/carrinho_branco.svg';
import '../../App.css';
import '../../assets/css/style.css';

class Header extends Component {
    render() {
        return (
        <div>
            <input type="checkbox" id="bt_menu"/>
            <label for="bt_menu">&#9776;</label>
            
            <div className="container">
                <header id="header_"> 
                    <a href="/"><img src={logo} alt="Logo com um bolo amarelo, marrom e vermelho, com escrita Cake teste back" /></a> 
                    <nav className="menu">
                        <ul>
                            <li><a href="#">Categoria 01</a></li>
                            <li><a href="#">Categoria 02</a></li>
                            <li><a href="#">Categoria 03</a></li>
                            <li><a href="#">Categoria 04</a></li>
                            
                            <li id="menuInterativo">
                                <a href="#">Minha conta<img src={usuario} alt="Botão de usuário para acessar sua conta"/></a>
                                <ul>
                                    <li id="usuario">Olá Willian</li>
                                    <li>willian.lopes@corebiz.com.br</li>
                                    <li><a href="#" id="sair">sair</a></li>
                                    <li><div id="line"></div></li>
                                    <li id='"ult1'>Última compra</li>
                                    <li id="ult2">
                                        <img id="imgUrsinho" src={ursinho} alt="Botão de usuário para acessar sua conta"/> 
                                        <span id="desc">BOMBOM GLAMOUR 200G</span> 
                                        <span  id="preco">R$ 1.99</span>
                                    </li>

                                </ul>
                            </li>
                            
                            <li>
                                <a href="#"><p id="qtdPedidos">0</p><img src={carrinho} alt="Carrinho de compras realizadas"/></a>
                                <ul>
                                    <li id="areaItens"><span>MEU CARRINHO</span>  <span>03 item(s)</span></li> 
                                    <li id="ult2">
                                        <span>X</span>
                                        <img id="imgUrsinho" src={ursinho}  alt="Botão de usuário para acessar sua conta"/> 
                                        
                                        <div>
                                            <span id="desc">Bombom delicioso</span> 

                                            {/* <div className="def-number-input number-input">
                                                <button onClick={() => this.decrease()} className="minus"></button>
                                                <input className="quantity" name="quantity" value={this.state.qtdProduto[i]} type="number" />
                                                <button onClick={() => this.increase()} className="plus"></button>
                                            </div> */}
                                        </div>

                                        <span  id="preco">{1.99}</span>       
                                    </li> 
                                    <li id="totalItens">Total: R${0}</li> 
                                    <li><a href="/" id="comprarItens">COMPRAR <img src={carrinhoBranco} alt="Carrinho de compras na cor branca" /></a></li> 
                                    <li><a href="/" id="limparItens" onClick={() => this.deletarCompras()}>X Limpar carrinho</a></li> 
                                </ul>
                            </li>
                        </ul>

                    </nav>   
                </header>
            </div>
        <div id="line"></div>
        </div>
        );
    }
}

export default Header;
