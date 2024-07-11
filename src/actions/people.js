import { Firebase } from "../firebase"


export const SquadActionsMock = () => {  
  const squadOne = (Squad) => {
    const squadOne = [
      { option: 'Alexandre Kumagae' },
      { option: 'Angelica C. B.' },
      { option: 'Danilo M. de Souza' },
      { option: 'Douglas Utzig' },
      { option: 'Eduardo Schmidt' },
      { option: 'Guilherme F.' },
      { option: 'Johnny Santos'},
      { option: 'Karla Daiany'},
      { option: 'Larissa Tolio'},
      { option: 'Lucas G. Medeiros' },
      { option: 'Milles Schroeder' },
    ]

    Squad.clearMembers()
    squadOne.forEach((member) => {
      Squad.addMember(member)
    })

    return squadOne
  }


const squadTwo = (Squad) => {
  const squadTwo = [
    { option: 'Angelica C. B.' },
    { option: 'Ascendino Junior' },
    { option: 'Guilherme F.' },
    { option: 'Dayan F.' },
    { option: 'Matheus F. Mazepa' },
    { option: 'Eduardo Schmidt' },
    { option: 'Éverton Gambeta' },
    { option: 'Grasiela Souza' },
    { option: 'Addson A. Coutinho' },
    { option: 'Jadson dos Santos' },
    { option: 'Josué da S. Freitas' },
    { option: 'Karla Daiany' },
    { option: 'Felipe S. Hansen' },
    { option: 'Milles D. Schroeder' },
    { option: 'Vinicius Coelho' },
    { option: 'Vinicius Lisboa' },
    { option: 'Larissa Tolio'},
  ]

  Squad.clearMembers()
  squadTwo.forEach((member) => {
    Squad.addMember(member)
  })

  return squadTwo
}
  
  return {
    squadOne: squadOne,
    squadTwo: squadTwo
  }
}


export const PeopleActions = () => {

  const fetchPeople = async () => {
    const peoples = await Firebase().loadPeople()

    return peoples
  }

  return {
    fetchPeople: fetchPeople
  }
}