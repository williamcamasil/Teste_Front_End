# Teste_Front_End - React
> Teste frontend consumindo api com responsividade para tablet e smartphone, utilizando HTML, CSS, JavaScript e React

## Requisitos
> - Node Js
> - Visual Studio Code

## Criação do Ambiente
> Instalação global para acesso ao create-react-app

```bash
npm install -g create-react-app
```

## Criação do Projeto
> Criando projeto:
```bash
create-react-app cake
```
> Testando o projeto:
```bash
  cd cake
  npm start
```

## Recursos para Layout
> MDBBootstrap:
```bash
  npm install
  npm install --save mdbreact
```

> React.js Examples:
```bash
  npm install react-responsive-carousel –save
  npm install --save react @trendmicro/react-dropdown
```

## Recurso para automatização de tarefas
```bash
  npm install -g gulp
```
> Plugins Gulp: Minificar CSS / Renomear o arquivo
```bash
  npm install gulp-cssmin --save-dev
  npm install gulp-rename --save-dev
```

<br><br>

## Foi remodelado o padrão de pastas, seguindo a seguinte arquitetura:

> src
```bash
  assets                //Para armazenamento de imagens estilização por css
  components       //Componetização de elementos HTML
  pages                 //Para inserção de todas as páginas usados no projeto

```

## Desenvolvendo a aplicação
> Foi criado o arquivo Home.js:

```jsx
import React, {Component} from 'react';
import Header from '../../components/Header/Header';
import Produto from '../../components/Produto/Produto';
import Footer from '../../components/Footer/Footer';

class Home extends Component {
    render() {
        return (
        <div>
            <Header />    
            <main className="container">
              <div className="conteudo">
                <h1>Produtos em destaque</h1>
                <Produto />
              </div>
            </main>
            <Footer />
        </div>
        );
    }
}

export default Home;
```

> Foi Criado a seguinte estrutura: src -> pages -> Compra -> Compra.js  <br>

> Em *Compra.js* foi inserido a seguinte estrutura:
```jsx
/* eslint-disable react/no-direct-mutation-state */
import React, {Component} from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import carrinhoBranco from '../../assets/img/carrinho_branco.svg';
import { Carousel } from 'react-responsive-carousel';
import { MDBAlert } from "mdbreact";

class Compra extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaProduto: [],
            value: 0,

            nomeProduto: [],
            imagemProduto: [],
            precoProduto: [],
            qtdProduto: [],
            ids: [],

            productName: "",
            imageUrl: "",
            price: "",
            quantidade: 0,

            i: 0,
            a: 0,

            successMsg: '',
            erroMsg: ''
        }
    }

    componentDidMount() {
        this.getProduto();
    }

    getProduto = () => {
        let id = this.props.location.state.productId;
        fetch('https://desolate-brushlands-20405.herokuapp.com/api/v1/product/' + id)
        .then(response => response.json())
        .then(response => {
            console.log(response);
            this.setState({ listaProduto: response })
            this.setState({ productName: this.state.listaProduto[0].productName });
            this.setState({ imageUrl: this.state.listaProduto[0].imageUrl });
            this.setState({ price: this.state.listaProduto[0].price });
        })
        .catch(error => console.log(error))
    }

    decrease = () => {
        if (this.state.value > 0){
            this.setState({ value: this.state.value - 1 });
        }
    }

    increase = () => {
        if (this.state.value >= 0){
            this.setState({ value: this.state.value + 1 });
        }
    }

    //simulando compra
    comprarLocalStorage = () => {    
        if (localStorage.getItem ( "ids" )){
            this.setState({  ids : JSON.parse(localStorage.getItem( "ids" )) });
        }

        if ( localStorage.getItem( "nomeProduto" ) ){
            this.setState({  nomeProduto : JSON.parse(localStorage.getItem( "nomeProduto" )) });
        }

        if ( localStorage.getItem( "imagemProduto" ) ){
            this.setState({  imagemProduto : JSON.parse(localStorage.getItem( "imagemProduto" )) });
        }

        if ( localStorage.getItem( "precoProduto" ) ){
            this.setState({  precoProduto : JSON.parse(localStorage.getItem( "precoProduto" )) });
        }
        
        if ( localStorage.getItem( "qtdProduto" ) ){
            this.setState({  qtdProduto : JSON.parse(localStorage.getItem( "qtdProduto" )) });
        }

        if (localStorage.getItem ( "qtdids" )){
            this.setState({ a: localStorage.getItem( "qtdids"  ) });
        }
 
        if ( this.state.value !== 0){
            setTimeout(() => {
                    let m = false;
                    for(let l = 0; l <= this.state.i-1; l++){
                        if (this.state.ids[l] === this.props.location.state.productId ){
                            m = true; 
                        }
                    }
        
                    //verificando se item já foi comprado
                    if(m === false){
                        this.state.successMsg = "Item comprado com sucesso! Confira no carrinho."
                        let res = parseInt(this.state.a) + 1; 
                        this.setState({ i: res });
                        localStorage.setItem("qtdids", this.state.i);
                        
                        this.state.nomeProduto[this.state.i-1] = this.state.productName;
                        this.state.imagemProduto[this.state.i-1] = this.state.imageUrl;
                        this.state.precoProduto[this.state.i-1] = this.state.price;
                        this.state.qtdProduto[this.state.i-1] = this.state.value;
                        this.state.ids[this.state.i-1] = this.props.location.state.productId;
                
                        localStorage.setItem("nomeProduto" , JSON.stringify(this.state.nomeProduto));
                        localStorage.setItem("imagemProduto" , JSON.stringify(this.state.imagemProduto));
                        localStorage.setItem("precoProduto" , JSON.stringify(this.state.precoProduto));
                        localStorage.setItem("qtdProduto" , JSON.stringify(this.state.qtdProduto));
                        localStorage.setItem("ids" , JSON.stringify(this.state.ids));
                    }else{
                        this.state.successMsg = "Item já foi comprado confira no carrinho."
                    }
                    
                }, 50);
            }else{
                this.state.erroMsg = "Houve algum problema no sistema. A compra não foi processada."
            }

        setTimeout(() => {
            this.setState({ successMsg: "" });
            this.setState({ erroMsg: "" });
        }, 3500);
    }   

    render() {
        return (
        <div>
            <Header />   
            <main className="container">
                <div className="componentes">
                    <div id="carousel">
                        <Carousel>
                            <div>
                                <img src={this.state.imageUrl} className="imgBombom" alt="Imagem de um bombom" />
                            </div>
                            <div>
                                <img src={this.state.imageUrl} className="imgBombom" alt="Imagem de um bombom" />
                            </div>
                        </Carousel>
                    </div>
                    <div id="informacoesProduto">
                        <p id="nomeProdutoCompra">{this.state.productName}</p>
                        <p id="valorAnterior">R$ 3,00</p>
                        <p id="rs">
                            R$ <span id="valorNovo">{this.state.price}</span>
                        </p>

                        <div id="funcionalidade">
                            <div className="def-number-input number-input">
                                <button onClick={() => this.decrease()} className="minus"></button>
                                <input className="quantity" name="quantity" value={this.state.value} type="number" />
                                <button onClick={() => this.increase()} className="plus"></button>
                            </div>
                            
                            <div id="btnComprarProduto">
                                <button className="btnComprar" onClick={() => this.comprarLocalStorage()} >COMPRAR <img src={carrinhoBranco} alt="Carrinho de compras na cor branca" /></button>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="Mensagens">
                    {
                        this.state.erroMsg &&
                        <MDBAlert className="text-center" color="danger" >
                            {this.state.erroMsg && <div className="erroMensagem">{this.state.erroMsg}</div>}
                        </MDBAlert>
                    }

                    {
                        this.state.successMsg &&
                        <MDBAlert className="text-center" color="success" >
                            {this.state.successMsg && <div className="certoMensagem">{this.state.successMsg}</div>}
                        </MDBAlert>
                    }
                </div>
            </main>
            <Footer />
        </div>
        );
    }
}

export default Compra;
```

> Além disso foi inserido uma página simples de NotFound.js caso página não fosse encontrada:  <br>

```jsx
import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

function NotFound() {
  return (
    <div>
      <Header />
      <main className="container">
        <div id="notfound">
          <h1>Página não encontrada <br /> volte a página inicial</h1>
          <a href="/">Voltar</a>
        </div>
      </main>
      <Footer/> 
    </div>
  );
}

export default NotFound;
```

<br><br>


> Para realizar o acesso a diferentes rotas, é instalado o react-router:
```bash
npm install --save react-router-dom
```

> O *index.js* possui toda a parte de roteamento e configuração.  <br>
> Sendo acessado da seguinte forma:
- localhost:3000/
- localhost:3000/Compra
<br>

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/Home';
import * as serviceWorker from './serviceWorker';

import 'mdbreact/dist/css/mdb.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@trendmicro/react-buttons/dist/react-buttons.css';
import '@trendmicro/react-dropdown/dist/react-dropdown.css';

import './assets/css/style.css';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
import Compra from './pages/Compra/Compra';
import NotFound from './pages/NotFound/NotFound';

//Realizar a criação das rotas
const Rotas = (
    <Router> 
        <div>
            <Switch>
                {/* Rendereniza a url */}
                <Route exact path = "/" component ={Home}/>
                <Route path="/Compra" component = {Compra}/>
                <Route component = {NotFound}/>
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(Rotas, document.getElementById('root'));
serviceWorker.unregister();
```

## Componetização

> Como os componentes/páginas possuem o Cabeçalho e Rodapé, é criado um outro componente externo a fim de facilitar as futuras modificações e/ou alterações.
<br>

> Para isso é criado as seguintes estruturas: <br>
> - src -> components -> Header -> foi criado um arquivo Header.js. <br>

> Dentro deste arquivo é colocado a seguinte estrutura:
```jsx
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

    if(localStorage.getItem ( "nomeProduto" ))
        document.getElementById('ult2').style.display = 'flex';
    else
        document.getElementById('ult2').style.display = 'none';
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
```

> src -> components -> Footer -> foi criado um arquivo Footer.js.
> Dentro deste arquivo foi colocado a seguinte estrutura:
```jsx
import React, {Component} from 'react';
class Footer extends Component{
    postEmail = (event) => {
        event.preventDefault();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({"email":"cdd@corebiz.com.br"});

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://desolate-brushlands-20405.herokuapp.com/api/v1/user", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error))
    }

    render(){
        return(
            <div>
                <div id="footer_alto">
                    <div className="container"> 
                        <div  id="footer">
                            <div>
                                <p id="news">
                                    Newsletter
                                </p>    

                                <p id="promo">
                                    Receba novas promoções <br/>e novidades. Inscreva-se:
                                </p>
                            </div>
                            <form id="form" onSubmit={this.postEmail}>
                                <div>
                                    <input type="text" name="" className="txtField" placeholder="Seu nome"/>
                                    <input type="text" name="" className="txtField" placeholder="Seu email"/>
                                </div>
                                
                                <div>
                                    <button className="btnEnviar" type="submit" name="Enviar">ENVIAR</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div id="footer_baixo">
                    <p>Developed by Corebiz</p>
                </div>
            </div>
        );
    }
}

export default Footer;
```

> src -> components -> Produto -> foi criado um arquivo Produto.js. :
> Dentro deste arquivo foi colocado a seguinte estrutura:
```jsx
import React, {Component} from 'react';
import carrinhoBranco from '../../assets/img/carrinho_branco.svg';
import { Link } from "react-router-dom";

class Produto extends Component{
  constructor() {
    super();
    this.state = {
        listaProdutos: [],
        more: 4
    }
}

componentDidMount() {
    this.getProdutos();
}

getProdutos = () => {
    fetch('https://desolate-brushlands-20405.herokuapp.com/api/v1/products')
        .then(response => response.json())
        .then(response => {
            console.log(response);
            var redux = response.slice(0, this.state.more)
            this.setState({ listaProdutos: redux })
        })
        .catch(error => console.log(error))
}

maisProdutos = () => {
    this.setState({ more: this.state.more + 4 });
    this.getProdutos();
}

  render(){
    return(
        <div>
            <div className="produto">
                {
                this.state.listaProdutos.map(function (produto) {
                    return (
                        < >
                            <div className="card">
                                <img src={produto.imageUrl} className="imgBombom" alt="Imagem de um bombom" />
                                
                                <p id="nomeProdutoHome">
                                    {produto.productName}
                                </p>
                                
                                <p id="rs">
                                    R$ <span id="valor">{produto.price}</span>
                                </p>

                                <Link className="btnComprar" to={{ pathname: '/Compra', state: { productId: produto.productId } }} >COMPRAR    <img src={carrinhoBranco} alt="Carrinho de compras na cor branca" /></Link>
                            </div>                 
                        </>
                    );
                })
                }
            </div>
            
            <div id="mais">
                <i onClick={() => { this.maisProdutos() }} className="far fa-plus-square fa-2x"></i>
            </div>
        </div>
    );
  }
}

export default Produto;
```

> Feito a inserção dos códigos é rodado a aplicação e podemos verificar o resultado. <br>

<br><br><br>


# Ciclos de Vida

> Em Produto.js foi importado o Link do react-router-dom:
```jsx
import {Link} from 'react-router-dom';
```
> Em seguida, é colocado um Link para ir para a página de Compra, junto a ele o id do produto:
```jsx
<Link className="btnComprar" to={{ pathname: '/Compra', state: { productId: produto.productId } }} >COMPRAR    <img src={carrinhoBranco} alt="Carrinho de compras na cor branca" /></Link>
```

> Em Produto.js e Compra.js foi inserido o seguinte ciclo, para as requisições ao servidor:
```jsx
    componentDidMount() {
        this.getProduto();
    }
```
<br>

# Props e State
## Props
> Para passar uma Prop nas rotas , foi usado uma tag Link:
```jsx
<Link className="btnComprar" to={{ pathname: '/Compra', state: { productId: produto.productId } }} >COMPRAR    <img src={carrinhoBranco} alt="Carrinho de compras na cor branca" /></Link>
```

## State
> Foi Criado uma lista fixa de objeto para receber as informações, dentro de um método construtor, passada via state:
```jsx
    constructor(props) {
        super(props);
        this.state = {
            listaProduto: [],
            value: 0,

            nomeProduto: [],
            imagemProduto: [],
            precoProduto: [],
            qtdProduto: [],
            ids: [],

            productName: "",
            imageUrl: "",
            price: "",
            quantidade: 0,

            i: 0,
            a: 0,

            successMsg: '',
            erroMsg: ''
        }
    }

```

> Foi verificado as informações com map, dentro da lista:
```jsx
        {
            this.state.listaProdutos.map(function (produto) {
                return (
                        < >
                            <div className="card">
                                    <img src={produto.imageUrl} className="imgBombom" alt="Imagem de um bombom" />
                    
                                    <p id="nomeProdutoHome">
                                            {produto.productName}
                                    </p>
                    
                                    <p id="rs">
                                            R$ <span id="valor">{produto.price}</span>
                                    </p>

                                    <Link className="btnComprar" to={{ pathname: '/Compra', state: { productId: produto.productId } }} >COMPRAR    <img src={carrinhoBranco} alt="Carrinho de compras na cor branca" /></Link>
                            </div>                 
                        </>
                );
            })
        }
```

<br><br>

# Consumindo a API
# GET
> Chamadas das APIs utilizando fetch <br>
```jsx
getProdutos = () => {
    fetch('https://desolate-brushlands-20405.herokuapp.com/api/v1/products')
        .then(response => response.json())
        .then(response => {
            console.log(response);
            var redux = response.slice(0, this.state.more)
            this.setState({ listaProdutos: redux })
        })
        .catch(error => console.log(error))
}

getProduto = () => {
    let id = this.props.location.state.productId;
    fetch('https://desolate-brushlands-20405.herokuapp.com/api/v1/product/' + id)
    .then(response => response.json())
    .then(response => {
        console.log(response);
            this.setState({ listaProduto: response })
            this.setState({ productName: this.state.listaProduto[0].productName });
            this.setState({ imageUrl: this.state.listaProduto[0].imageUrl });
            this.setState({ price: this.state.listaProduto[0].price });
    })
    .catch(error => console.log(error))
}
```
# POST
```jsx
    postEmail = (event) => {
        event.preventDefault();

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({"email":"cdd@corebiz.com.br"});

        var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
        };

        fetch("https://desolate-brushlands-20405.herokuapp.com/api/v1/user", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error))
    }

```
> No Footer.js foi colocado o comando para chamar o evento da API POST:
```jsx
<form id="form" onSubmit={this.postEmail}>
```

## Biblioteca - Font-Awesome
> Foi inserido um botão com símbolo “+”, para trazer mais produtos na página Home, para isso foi usado o fontawesome para o botão mais em Produto.js.

## Mensagem de Erro e Sucesso
> Foi criado um state chamado erroMsg e outro successMsg, com conteúdo vazio, quando realizar a compra, informará para o cliente que o produto foi adquirido com sucesso, caso o contrário, mostrará uma mensagem de erro:
```jsx
    <div className="Mensagens">
        {
                this.state.erroMsg &&
                <MDBAlert className="text-center" color="danger" >
                        {this.state.erroMsg && <div className="erroMensagem">{this.state.erroMsg}</div>}
                </MDBAlert>
        }

        {
                this.state.successMsg &&
                <MDBAlert className="text-center" color="success" >
                        {this.state.successMsg && <div className="certoMensagem">{this.state.successMsg}</div>}
                </MDBAlert>
        }
    </div>

```

