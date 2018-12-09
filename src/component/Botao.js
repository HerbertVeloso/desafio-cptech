import React from 'react';
import { Link } from 'react-router-dom';

export default class Botao extends React.Component{
    render() {
        const Esse = () => {
            if (this.props.tipo === "Adicionar") {
               return <Link className='button button--add' to='/add'>{this.props.tipo}</Link>
            } else if (this.props.tipo === "Voltar") {
                return <Link className='button button--back' to='/'>{this.props.tipo}</Link>
            } else if (this.props.tipo === "Excluir") {
                return <div className='button button--delete' onClick={this.props.excluirProduto(this.props.id)} >{this.props.tipo}</div>
            } else if (this.props.tipo === "Cadastrar") {
                return <button className='button button--cad' onClick={this.props.acao}>Adicionar</button>
            } else {
                return <Link className='button' to='/'>Home</Link>
            }
        }
        return (
            <Esse />
        )
    }
}