import React, {Component} from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
// import ursinho from '../../assets/img/ursinho.jpg';
import carrinhoBranco from '../../assets/img/carrinho_branco.svg';
import '../../assets/css/style.css';
import { MDBBtn } from "mdbreact";
import { Carousel } from 'react-responsive-carousel';


class Compra extends Component {
    // state = {
    //     value: 0
    // }
    constructor(props) {
        super(props);
        this.state = {
            listaProduto: [],
            value: 0
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
            // console.log('infos ', response)
        })
        
        console.log('id: ', id)
    }

    decrease = () => {
        this.setState({ value: this.state.value - 1 });
    }

    increase = () => {
        this.setState({ value: this.state.value + 1 });
    }

    render() {
        return (
        <div>
            <Header />            
            <main className="container">
                <div className="componentes">

                {
                    this.state.listaProduto.map(function (produto) {
                        return (
                            <>   
                                <div id="carousel">
                                    <Carousel>
                                        <div>
                                            <img src={produto.imageUrl} className="imgBombom" alt="Imagem de um bombom" />
                                        </div>
                                        <div>
                                            <img src={produto.imageUrl} className="imgBombom" alt="Imagem de um bombom" />
                                        </div>
                                    </Carousel>
                                </div>
                                <div id="informacoesProduto">
                                    <p id="nomeProdutoCompra">{produto.productName}</p>
                                    <p id="valorAnterior">R$ 30,00</p>
                                    <p id="rs">
                                        R$ <span id="valorNovo">{produto.price}</span>
                                    </p>

                                    <div id="funcionalidade">
                                        <div className="def-number-input number-input">
                                            <button onClick={() => this.decrease()} className="minus"></button>
                                            {/* <input className="quantity" name="quantity" value={this.state.value} onChange={()=> console.log('change')} type="number" /> */}
                                            <input className="quantity" name="quantity" value={0} onChange={()=> console.log('change')} type="number" />
                                            <button onClick={() => this.increase()} className="plus"></button>
                                        </div>
                                        <div id="btnComprarProduto">
                                            {/* <MDBBtn color="deep-orange">Comprar  <img src={carrinhoBranco} alt="Carrinho de compras na cor branca" /></MDBBtn> */}
                                            <a href="/Compra" className="btnComprar">COMPRAR</a>
                                        </div>
                                    </div>
                                </div>

                
                            </>
                            );
                        })
                }
                </div>
            </main>
            <Footer />
        </div>
        );
    }
}

export default Compra;
