import { Controller } from 'stimulus'

export default class extends Controller {
  greet() {
    // console.log(`Hello, ${this.name}!`)
    this.your_name.innerHTML = `Your name is: <strong>${this.name}</strong>`
  }

  get name() {
    return this.targets.find('name').value
  }

  get your_name() {
    return this.targets.find('your_name')
  }

}

console.log('hello from hello controller')