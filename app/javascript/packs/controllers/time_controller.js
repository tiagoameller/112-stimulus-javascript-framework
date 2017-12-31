import { Controller } from 'stimulus'

export default class extends Controller{
  initialize(){
    var that = this
    this.setTimeZone = this.time_zone
    setInterval(function(){
      that.render()
    }, 1000)
    
  }

  render(){
    console.log(this.time_zone)
    this.display_time.innerHTML = moment().tz(this.time_zone).format('MMMM Do YYYY, h:mm:ss a')
    this.display_time_zone.innerHTML = this.time_zone
  }

  changed_zone(){
    this.setPreviousTimeZone = this.data.get('time_zone')
    this.setTimeZone = this.time_zone
    this.render()
  }
  
  set_previous_time_zone(){
    this.select_time_zone.value = this.data.get('previous_time_zone')
    this.render()
  }

  get select_time_zone(){
    return this.targets.find('time_zone')
  }

  get time_zone(){
    return this.targets.find('time_zone').value
  }
  
  get display_time(){
    return this.targets.find('display_time')
  }
  
  get display_time_zone(){
    return this.targets.find('display_time_zone')
  }

  set setTimeZone(value){
    this.data.set('time_zone', value)
  }

  set setPreviousTimeZone(value){
    this.data.set('previous_time_zone', value)
  }

}