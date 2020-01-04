import React, {Component} from 'react';
import '../../App.css';

class Header extends Component {
    render() {
        return (
        <div>
            <input type="checkbox" id="bt_menu"/>
            <label for="bt_menu">&#9776;</label>
            
            <nav className="menu">
                <ul>
                <li><a href="#">Home</a></li>
                <li>
                    <a href="#">Serviços</a>
                    <ul>
                    <li><a href="#">Criação de sites</a></li> 
                    <li><a href="#">Arte visual</a></li> 
                    </ul>
                </li>
                <li>
                    <a href="#">Cursos</a>
                    <ul>
                    <li><a href="#">Java</a></li> 
                    <li><a href="#">HTML/CSS</a></li> 
                    </ul>
                </li>
                <li><a href="#">Contato</a></li>
                </ul>

            </nav>   
        </div>
        );
    }
}

export default Header;
