import React from 'react';
import Botao from './Botao';

export default class Inicial extends React.Component{
    render(){
        return(
            this.props.listaDeProdutos.map(
                item => {
                    return  (
                        <section className="list__item" key={item.id}>
                            <div>
                                <input type="checkbox" />
                                <label className="item">{item.nome}, {item.id}</label>
                            </div>
                            <Botao  tipo="Excluir" id={item.id} excluirProduto={this.props.excluirProduto} />
                        </section>   
                    )
                }
            )
        )
    }
}