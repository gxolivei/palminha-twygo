
export class Squad {
  constructor(
    Squad
  ) {
    this.id = Squad.id
    this.name = Squad.name
    this.members = Squad.members
  }

  addMember(people) {
    this.members.push(people)
  }

  clearMembers() {
    this.members = []
  }
}