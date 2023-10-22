import React, { useState, useEffect, useRef } from 'react'
import WheelComponent from './components/WheelComponent'
import BeginModal from './components/BeginModal'
import SquadList from './components/SquadList'
import BattleOfPalminha from './components/BattleOfPalminha'
import { shuffle } from './helpers'
import './App.css'
import { PeopleActions, SquadActionsMock } from './actions/people'

function App() {
  const [beginModalIsOpen, setBeginModalIsOpen] = useState(true)
  const [data, setData] = useState([])
  const [selectedMembers, setSelectedMembers] = useState([])
  const [showBattleOfPalminha, setShowBattleOfPalminha] = useState(false)
  
  const squadOne = useRef([])
  const squadTwo = useRef([])
  const useFirebase = false

  const handleSquadSelect = (squad) => {
    setData(squad === 'Squad 1' ? squadOne.current : squadTwo.current)
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
    const peoples = await PeopleActions().fetchPeople()

    if (useFirebase) {
      console.log('[FIREBASE]peoples', peoples)

      squadOne.current = peoples.map((people) => {
        return { option: people.Name }
      })

      squadTwo.current = peoples.map((people) => {
        return { option: people.Name }
      })
    }else{
      squadOne.current = SquadActionsMock().squadOne()
      squadTwo.current = SquadActionsMock().squadTwo()  
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