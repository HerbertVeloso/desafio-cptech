import React from 'react';
import Menu from '../component/Menu'
import Lista from '../component/Lista'

export default class Inicial extends React.Component{
    render(){
        return(
            <main className="container">
                <Menu tipo="Adicionar" />
                <Lista listaDeProdutos={this.props.listaDeProdutos} excluirProduto={this.props.excluirProduto} />
            </main>   
        )
    }
}