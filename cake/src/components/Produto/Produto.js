import React, {Component} from 'react';
import '../../assets/css/style.css';
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
            var redux = response.slice(0, this.state.more)
            this.setState({ listaProdutos: redux })
        })
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