import React, { useState } from 'react';
import WheelComponent from './components/WheelComponent';
import BeginModal from './components/BeginModal';

import './App.css';

const squadOne = [
  { option: 'Angelica C. B.' },
  { option: 'Guilherme F.' },
  { option: 'Matheus F. Mazepa' },
  { option: 'Eduardo Schmidt' },
  { option: 'Eric Vinicius' },
  { option: 'Éverton Gambeta' },
  { option: 'Grasiela Souza' },
  { option: 'Jadson dos Santos' },
  { option: 'Karla Daiany' },
  { option: 'Loren Helena' },
  { option: 'Tiago Zomignan' },
  { option: 'Addson A. Coutinho' },
  { option: 'Danilo M. de Souza' },
  { option: 'Dayan O. de Freitas' },
  { option: 'Gabriel Oliveira' },
  { option: 'Luís M. S. Amorim' },
];

const squadTwo = [
  { option: 'Angelica C. B.' },
  { option: 'Guilherme F.' },
  { option: 'Matheus F. Mazepa' },
  { option: 'Eduardo Schmidt' },
  { option: 'Eric Vinicius' },
  { option: 'Éverton Gambeta' },
  { option: 'Grasiela Souza' },
  { option: 'Jadson dos Santos' },
  { option: 'Karla Daiany' },
  { option: 'Loren Helena' },
  { option: 'Tiago Zomignan' },
  { option: 'Adriane Ribeiro' },
  { option: 'Eduardo L. da Silva' },
  { option: 'Felipe S. Hansen' },
  { option: 'Lucas G. Medeiros' },
  { option: 'Mateus S. Zandonadi' },
  { option: 'Milles D. Schroeder' },
  { option: 'Vinicius Coelho' },
  { option: 'Vinicius Lisboa' },
];

function App() {
  const [beginModalIsOpen, setBeginModalIsOpen] = useState(true);
  const [data, setData] = useState([]);
  
  const handleSquadSelect = (squad) => {
    setData(squad === 'Squad 1' ? squadOne : squadTwo);
    setBeginModalIsOpen(false);
  };

  return (
    <div className="App">
      <h2 className="placeholder-app-name">Palminha do Twygo</h2>
      <header className="App-header">
        {data.length > 0 && (
          <>
            <WheelComponent data={data} />
          </>
        )}
      </header>
      <BeginModal
        isOpen={beginModalIsOpen}
        onRequestClose={() => setBeginModalIsOpen(false)}
        onSelectSquad={handleSquadSelect}
      />
    </div>
  );
}  

export default App;