import React, { useState } from 'react';
import WheelComponent from './components/WheelComponent';
import BeginModal from './components/BeginModal';
import SquadList from './components/SquadList';

import { shuffle } from './helpers';

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
  const [selectedMembers, setSelectedMembers] = useState([]);

  const handleSquadSelect = (squad) => {
    setData(squad === 'Squad 1' ? squadOne : squadTwo);
    setBeginModalIsOpen(false);
  };

  const toggleSelectedMember = (member) => {
    setSelectedMembers((prevSelectedMembers) => {
      if (prevSelectedMembers.includes(member)) {
        return prevSelectedMembers.filter((m) => m !== member);
      } else {
        return [...prevSelectedMembers, member];
      }
    });
  };

  const resetSelectedMembers = () => {
    setSelectedMembers([]);
  };
  
  return (
    <div className="App">
      <h2 className="placeholder-app-name">Palminha do Twygo</h2>
      <header className="App-header">
        {console.log("@fata", data)}
        {data.length > 0 && (
          <>
            <WheelComponent
              data={shuffle(shuffle(data.filter(
                (member) => !selectedMembers.includes(member.option)
              )))}
              isEmpty={
                data.filter((member) => !selectedMembers.includes(member.option))
                  .length === 0
              }
              onReset={resetSelectedMembers}
            />
          </>
        )}
      </header>
      <div className="squad-container">
        <SquadList
          squad={data}
          onToggleMember={toggleSelectedMember}
          selectedMembers={selectedMembers}
        />
      </div>
      <BeginModal
        isOpen={beginModalIsOpen}
        onRequestClose={() => setBeginModalIsOpen(false)}
        onSelectSquad={handleSquadSelect}
      />
    </div>
  );
}

export default App;