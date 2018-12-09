import React from 'react';
import Menu from '../component/Menu'
import Formulario from '../component/Formulario'

export default class Inicial extends React.Component{
    render(){
        return(
            <main>
                <Menu tipo="Voltar" />
                <Formulario produto={this.props.produto.nome} handlerChangeProduto={this.props.handlerChangeProduto} cadastrarProduto={this.props.cadastrarProduto} />
            </main>   
        )
    }
}