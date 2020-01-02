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