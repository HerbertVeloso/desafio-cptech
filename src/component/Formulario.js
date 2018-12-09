import React from 'react';
import Botao from './Botao';

export default class Formulario extends React.Component{
    render(){
        return(
            <section className="form">
                <h2 className="form__title">Adicionar Item</h2>
                <form className="form__box">
                    <label className="box__label">Produto: </label>
                    <input 
                        className="box__input" 
                        name="nome"
                        type="text"
                        value={this.props.produto.nome}
                        onChange={this.props.handlerChangeProduto} 
                    />
                    <Botao tipo="Cadastrar" acao={this.props.cadastrarProduto}/>
                </form>
            </section>   
        )
    }
}