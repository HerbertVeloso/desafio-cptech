import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Adicionar from './view/Adicionar';
import Inicial from './view/Inicial';

let valor = 0

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      produto: {
          id: 0,
          nome: ''
        },
        listaDeProdutos: [
          {
            id: 9959,
            nome: 'Macarrão'
          },
          {
            id: 9960,
            nome: 'Arroz'
          }
        ],
        contID: 1
    };
    this.handlerChangeProduto = this.handlerChangeProduto.bind(this);
    this.cadastrarProduto = this.cadastrarProduto.bind(this);
    this.excluirProduto = this.excluirProduto.bind(this);
  };

  handlerChangeProduto(event){
    const target = event.target;
    const name = target.name;

    this.setState({
      produto: { ...this.state.produto,[name]: target.value }
    });
  };

  cadastrarProduto(event){
    event.preventDefault()
    valor++
    
    this.setState({
      produto: { ...this.state.produto,["id"]: valor }
    });

    const tempListaDeProdutos = this.state.listaDeProdutos;
    tempListaDeProdutos.push(this.state.produto);
    this.setState({ listaDeProdutos: tempListaDeProdutos });
  }
  excluirProduto(id){
    console.log("Isso")
    console.log(id)
      return this.state.listaDeProdutos.filter(function(item) { 
        return item.id !== id; 
      });
    
  }

  render() {
    return (
      <Switch>
        <Route 
          path="/add" 
          render={(props) => {
            return (
              <Adicionar 
                produto={this.state.produto} 
                handlerChangeProduto={this.handlerChangeProduto} 
                cadastrarProduto={this.cadastrarProduto} 
              />
            )
          }}
        />
        <Route path="/" render={(props) => <Inicial listaDeProdutos={this.state.listaDeProdutos} excluirProduto={this.excluirProduto} />} />
      </Switch>
    );
  }
}

export default App;