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
