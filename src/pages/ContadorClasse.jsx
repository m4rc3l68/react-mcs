import React from 'react';
import './../styles/geral.css';

export default class contadorClasse extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="formatacaoGeral">
        <p className="numeroPrincipal">{this.state.count}</p>
        <div className="botoes">
          <button
            className="botao cor1"
            onClick={() => this.setState({ count: this.state.count - 1 })}
          >
            -
          </button>
          <button
            className="botao cor2"
            onClick={() => this.setState({ count: 0 })}
          >
            0
          </button>
          <button
            className="botao cor3"
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            +
          </button>
        </div>
      </div>
    );
  }
}
