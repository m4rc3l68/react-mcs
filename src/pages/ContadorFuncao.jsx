import React, { useState } from 'react';
import './../styles/geral.css';

export default function ContadorFuncao() {
  let [count, setCount] = useState(0);

  return (
    <div className="formatacaoGeral">
      <p className="numeroPrincipal">{count}</p>
      <div className="botoes">
        <button className="botao_cor1" onClick={() => setCount(count - 1)}>
          -
        </button>
        <button className="botao_cor2" onClick={() => setCount(0)}>
          0
        </button>
        <button className="botao_cor3" onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
    </div>
  );
}
