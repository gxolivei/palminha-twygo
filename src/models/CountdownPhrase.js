
import { Phrase } from './Phrase'
import { DBPhrases } from './DBPhrases'
import { shuffle } from '../helpers'

export class CountdownPhrase {
  constructor() {
    this.box = []
    this.populate()
  }

  populate() {
    DBPhrases.CountdownPhrase.forEach((phrase) => {
      this.addPhrase(new Phrase(phrase))
    })
    this.box = shuffle(this.box)
  }

  addPhrase(phrase) {
    this.box.push(phrase)
  }

  raffle() {
    return this.box[Math.floor(Math.random() * this.box.length)].toString()
  }
}
