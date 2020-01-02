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