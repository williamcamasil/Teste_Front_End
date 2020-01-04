/* eslint-disable react/no-direct-mutation-state */
import React, {Component} from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import '../../assets/css/style.css';
import { Carousel } from 'react-responsive-carousel';


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
            this.setState({ listaProduto: response })
            this.setState({ productName: this.state.listaProduto[0].productName });
            this.setState({ imageUrl: this.state.listaProduto[0].imageUrl });
            this.setState({ price: this.state.listaProduto[0].price });
        })
    }

    decrease = () => {
        this.setState({ value: this.state.value - 1 });
    }

    increase = () => {
        this.setState({ value: this.state.value + 1 });
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

        
        setTimeout(() => {
            if ( this.state.value !== 0){
                let m = false;
                for(let l = 0; l <= this.state.i-1; l++){
                    if (this.state.ids[l] === this.props.location.state.productId ){
                        m = true; //item já foi comprado - Permitir mudar somente a quantidade
                    }
                }
    
                //verificando se item já foi comprado
                if(m === false){
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
                }
            }else{
                console.log('Não foi possível realizar a compra')
            }
            
        }, 50);
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
                        <p id="valorAnterior">R$ 30,00</p>
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
                                {/* <a  href="/" className="btnComprar">COMPRAR <img src={carrinhoBranco} alt="Carrinho de compras na cor branca" /></a> */}
                                <button className="btnComprar" onClick={() => this.comprarLocalStorage()} >COMPRAR</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
        );
    }
}

export default Compra;
