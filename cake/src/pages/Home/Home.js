import React, {Component} from 'react';
import Header from '../../components/Header/Header';
import Produto from '../../components/Produto/Produto';
import Footer from '../../components/Footer/Footer';
import '../../assets/css/style.css';

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
