import { Controller } from 'stimulus'

export default class extends Controller {

  itemIsChanged(event) {
    if (!event.target.value) {
      event.target.parentNode.classList.add('field_with_errors')
    } else {
      event.target.parentNode.classList.remove('field_with_errors')
    }
  }

}