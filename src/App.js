import {
  addDays,
  addMonths,
  addYears,
  closestTo,
  format,
  subDays,
} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';
import './App.css';

function App() {
  const [diaAtual, setDiaAtual] = useState(new Date());

  const one = format(diaAtual, 'dd', { locale: ptBR });
  const two = format(diaAtual, 'MMMM', { locale: ptBR });
  const three = format(diaAtual, 'yyyy', { locale: ptBR });
  const four = format(diaAtual, 'cccc', { locale: ptBR });
  const five = format(diaAtual, 'HH', { locale: ptBR });

  return (
    <div className="App">
      <header className="App-header">
        <p>{`Maceió-AL, ${four}, ${one} de ${two} de ${three} às ${five} horas`}</p>
      </header>
    </div>
  );
}

export default App;
