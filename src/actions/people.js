import { Firebase } from "../firebase"


export const SquadActionsMock = () => {  
  const squadOne = () => {
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
      { option: 'Danilo M. de Souza' },
      { option: 'Dayan O. de Freitas' },
      { option: 'Gabriel Oliveira' },
      { option: 'Lucas G. Medeiros' },
      { option: 'Larissa Tolio'},
    ]
  
    return squadOne
  }


const squadTwo = () => {
  const squadTwo = [
    { option: 'Angelica C. B.' },
    { option: 'Guilherme F.' },
    { option: 'Matheus F. Mazepa' },
    { option: 'Eduardo Schmidt' },
    { option: 'Éverton Gambeta' },
    { option: 'Grasiela Souza' },
    { option: 'Addson A. Coutinho' },
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
    { option: 'Larissa Tolio'},
  ]

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