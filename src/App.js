import React, { useState, useEffect } from 'react';
import WheelComponent from './components/WheelComponent';
import BeginModal from './components/BeginModal';
import SquadList from './components/SquadList';
import BattleOfPalminha from './components/BattleOfPalminha';

import { shuffle } from './helpers';

import './App.css';

const squadOne = [
  { option: 'Angelica C. B.' },
  { option: 'Guilherme F.' },
  { option: 'Matheus F. Mazepa' },
  { option: 'Eduardo Schmidt' },
  { option: 'Éverton Gambeta' },
  { option: 'Grasiela Souza' },
  { option: 'Jadson dos Santos' },
  { option: 'Karla Daiany' },
  { option: 'Loren Helena' },
  { option: 'Addson A. Coutinho' },
  { option: 'Danilo M. de Souza' },
  { option: 'Dayan O. de Freitas' },
  { option: 'Gabriel Oliveira' },
  { option: 'Lucas G. Medeiros' },
];

const squadTwo = [
  { option: 'Angelica C. B.' },
  { option: 'Guilherme F.' },
  { option: 'Matheus F. Mazepa' },
  { option: 'Eduardo Schmidt' },
  { option: 'Éverton Gambeta' },
  { option: 'Grasiela Souza' },
  { option: 'Jadson dos Santos' },
  { option: 'Karla Daiany' },
  { option: 'Loren Helena' },
  { option: 'Adriane Ribeiro' },
  { option: 'Felipe S. Hansen' },
  { option: 'Mateus S. Zandonadi' },
  { option: 'Milles D. Schroeder' },
  { option: 'Vinicius Coelho' },
  { option: 'Vinicius Lisboa' },
  { option: 'Luís M. S. Amorim' },
];

function App() {
  const [beginModalIsOpen, setBeginModalIsOpen] = useState(true);
  const [data, setData] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [showBattleOfPalminha, setShowBattleOfPalminha] = useState(false);

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

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === 'i') {
        setShowBattleOfPalminha(true);
      }
      if (event.key === 'Escape') {
        setShowBattleOfPalminha(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="App">
      <h2 className="placeholder-app-name">Palminha do Twygo</h2>
      <header className="App-header">
        {console.log("@fata", data)}
        {data.length > 0 && !showBattleOfPalminha && (
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
        )}
        {showBattleOfPalminha && <BattleOfPalminha />}
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