import React, {Component} from 'react';
// import { MDBInput } from "mdbreact";

class Footer extends Component{
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

                        <div>
                            <input type="text" name="" className="txtField" placeholder="Seu nome"/>
                            <input type="text" name="" className="txtField" placeholder="Seu email"/>
                        </div>
                        
                        <div>
                            <input type="button" className="btnEnviar" value="ENVIAR"/>
                        </div>
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