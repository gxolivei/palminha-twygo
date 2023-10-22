import React, { useState, useEffect, useRef } from 'react'
import WheelComponent from './components/WheelComponent'
import BeginModal from './components/BeginModal'
import SquadList from './components/SquadList'
import BattleOfPalminha from './components/BattleOfPalminha'
import { shuffle } from './helpers'
import './App.css'
import { PeopleActions, SquadActionsMock } from './actions/people'
import { Squad } from './models/squad'

function App() {
  const [beginModalIsOpen, setBeginModalIsOpen] = useState(true)
  const [data, setData] = useState([])
  const [selectedMembers, setSelectedMembers] = useState([])
  const [showBattleOfPalminha, setShowBattleOfPalminha] = useState(false)
  
  const squadOne = new Squad({ id: 1, name: 'Squad 1', members: [] })
  const squadTwo = new Squad({ id: 2, name: 'Squad 2', members: [] })
  const useFirebase = false

  const handleSquadSelect = (squad) => {
    setData(squad === 'Squad 1' ? squadOne.members : squadTwo.members)
    setBeginModalIsOpen(false)
  }

  const toggleSelectedMember = (member) => {
    setSelectedMembers((prevSelectedMembers) => {
      if (prevSelectedMembers.includes(member)) {
        return prevSelectedMembers.filter((m) => m !== member)
      } else {
        return [...prevSelectedMembers, member]
      }
    })
  }

  const resetSelectedMembers = () => {
    setSelectedMembers([])
  }

  useEffect(() => {
    loadSquadAllPeople()

    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === 'i') {
        setShowBattleOfPalminha(true)
      }
      if (event.key === 'Escape') {
        setShowBattleOfPalminha(false)
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])


  const loadSquadAllPeople = async () => {
    if (useFirebase) {
      const peoples = await PeopleActions().fetchPeople()
      console.log('[FIREBASE]peoples', peoples)

      peoples.filter(p => p.squad.includes(1)).forEach((people) => {
        squadOne.addMember({ option: people.Name })
      })

      peoples.filter(p => p.squad.includes(2)).forEach((people) => {
        squadTwo.addMember({ option: people.Name })
      })
    }else{
      SquadActionsMock().squadOne(squadOne)
      SquadActionsMock().squadTwo(squadTwo)  
    }
  }

  return (
    <div className="App">
      <h2 className="placeholder-app-name">Palminha do Twygo</h2>
      <header className="App-header">
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
  )
}

export default App