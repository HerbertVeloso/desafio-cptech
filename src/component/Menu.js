import React from 'react';
import Botao from './Botao';

export default class Inicial extends React.Component{
    render(){
        return(
            <header className="header">
                <h1 className="header__text">Lista de Compras</h1>
                <Botao  tipo={this.props.tipo} />
            </header>   
        )
    }
}