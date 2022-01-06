import React from "react"
import SideBar from "../components/SideBar"
import Symptoms from "../components/FindMe/Symptoms"
import "../css/luna.css"


class FindMe extends React.Component {

  constructor() {
    super()
    this.state = {
      progressIndex: 1,
      preferenceIndex: 0,
      preferences: {
        location: "",
        age: "",
        price: 0,
        experience: 0,
        gender: "",
      },
      sidedata: []
    }
  }

  componentDidMount() {
    this.setState({sidedata: this.changeProgress()})
  }

  changeProgress() {
    switch(this.state.progressIndex) {  
      case 2:
        return(
          [
            {
                title: 'Symptoms',
                desc: 'Input the symptoms you are currently experiencing',
                progress: 'done',
            },
            {
                title: 'Preference',
                desc: 'List what types of doctors you prefer',
                progress: 'inprogress'
            },
            {
                title: 'Confirm Inputs',
                desc: 'Confirm your inputs to generate the most appropriate list of doctors to consult with',
                progress: 'notdone'
            }
          ]
        )
      case 3:
        return(
          [
            {
              title: 'Symptoms',
              desc: 'Input the symptoms you are currently experiencing',
              progress: 'done',
            },
            {
                title: 'Preference',
                desc: 'List what types of doctors you prefer',
                progress: 'done'
            },
            {
                title: 'Confirm Inputs',
                desc: 'Confirm your inputs to generate the most appropriate list of doctors to consult with',
                progress: 'inprogress'
            }
          ]
        )
      default:
        return(
          [
            {
              title: 'Symptoms',
              desc: 'Input the symptoms you are currently experiencing',
              progress: 'inprogress',
            },
            {
                title: 'Preference',
                desc: 'List what types of doctors you prefer',
                progress: 'notdone'
            },
            {
                title: 'Confirm Inputs',
                desc: 'Confirm your inputs to generate the most appropriate list of doctors to consult with',
                progress: 'notdone'
            }
          ]
        )
    }
  }

  onSelectChange = (param, e) => {
    var preferences = this.state.preferences
    var valueSelected
    switch(param){
      case "Price":
        valueSelected = parseInt(e.target.value)
        preferences.price = valueSelected;
        break;
      case "Location":
        valueSelected = (e.target.value)
        preferences.location = valueSelected;
        break;
      case "Age":
        valueSelected = parseInt(e.target.value)
        preferences.age = valueSelected;
        break;
      case "Experience":
        valueSelected = parseInt(e.target.value)
        preferences.experience = valueSelected;
        break;
      case "Gender":
        valueSelected = (e.target.value)
        preferences.gender = valueSelected;
      default:
        break;
    }    
    this.setState({preferences: preferences})
  }

  preferenceState() {
    switch(this.state.preferenceIndex){
      case 0: // location
          return (
            <div class="findMe-wrapper col-8">
                <h3><strong>Where would you prefer your doctor's clinic to be in?</strong></h3>
                <select class="findMe-select" multiple onChange={(e) => this.onSelectChange("Location", e)}>
                    <option class="findMe-option-thicc" value="Manila">Manila</option>
                    <option class="findMe-option-thicc" value="Marikina">Marikina</option>
                    <option class="findMe-option-thicc" value="Taguig">Taguig</option>
                    <option class="findMe-option-thicc" value="Quezon City">Quezon City</option>
                    <option class="findMe-option-thicc" value="Tawi-Tawi">Tawi-Tawi</option>
                    <option class="findMe-option-thicc" value="Dipolog">Dipolog</option>
                    <option class="findMe-option-thicc" value="Davao">Davao</option>
                    <option class="findMe-option-thicc" value="Zomboanga">Zomboanga</option>
                    <option class="findMe-option-thicc" value="Bacolod">Bacolod</option>
                    <option class="findMe-option-thicc" value="Cebu">Cebu</option>
                    <option class="findMe-option-thicc" value="Ilo-Ilo">Ilo-Ilo</option>
                    <option class="findMe-option-thicc" value="">No Preference</option>
                </select>

                <button 
                type="button" 
                class="btn btn-primary position-absolute" 
                style={{bottom: '30px', right: '30px', width: '200px'}}
                onClick={() => {this.setState({preferenceIndex: this.state.preferenceIndex + 1})}}
              >Next</button>
            </div>
          )
      case 1: // age
          return (
            <div class="findMe-wrapper col-8">
                <h3><strong>What age group do you prefer for your Doctor’s Age?</strong></h3>
                <select class="findMe-select" multiple onChange={(e) => this.onSelectChange("Age", e)}>
                    <option class="findMe-option-thicc" value="30">Younger than 30</option>
                    <option class="findMe-option-thicc" value="45">30 to 45 years old</option>
                    <option class="findMe-option-thicc" value="46">45 years or older</option>
                    <option class="findMe-option-thicc" value="-1">No Preference</option>
                </select>

                <button 
                type="button" 
                class="btn btn-primary position-absolute" 
                style={{bottom: '30px', right: '30px', width: '200px'}}
                onClick={() => {this.setState({preferenceIndex: this.state.preferenceIndex + 1})}}
              >Next</button>
            </div>
          )
      case 2: // experience
          return (
            <div class="findMe-wrapper col-8">
                <h3><strong>How much years of experience do you prefer with your doctors?</strong></h3>
                <select class="findMe-select" multiple onChange={(e) => this.onSelectChange("Experience", e)}>
                    <option class="findMe-option-thicc" value="0">Less than 10 years of experience</option>
                    <option class="findMe-option-thicc" value="10">10 or more years of experience</option>
                    <option class="findMe-option-thicc" value="20">20 or more years of experience</option>
                    <option class="findMe-option-thicc" value="-1">No Preference</option>
                </select>

                <button 
                type="button" 
                class="btn btn-primary position-absolute" 
                style={{bottom: '30px', right: '30px', width: '200px'}}
                onClick={() => {this.setState({preferenceIndex: this.state.preferenceIndex + 1})}}
              >Next</button>
            </div>
          )
      case 3: // price
          return (
            <div class="findMe-wrapper col-8">
                <h3><strong>How much can you budget for doctor consultations?</strong></h3>
                <select class="findMe-select" multiple onChange={(e) => this.onSelectChange("Price", e)}>
                    <option class="findMe-option-thicc" value="500">Less than PHP 500.00</option>
                    <option class="findMe-option-thicc" value="1000">PHP 500.00 to PHP 1,000.00</option>
                    <option class="findMe-option-thicc" value="2000">PHP 1,000 to PHP 2,000.00</option>
                    <option class="findMe-option-thicc" value="2001">More than PHP 2,000.00</option>
                    <option class="findMe-option-thicc" value="-1">No Preference</option>
                </select>

                <button 
                type="button" 
                class="btn btn-primary position-absolute" 
                style={{bottom: '30px', right: '30px', width: '200px'}}
                onClick={() => {this.setState({preferenceIndex: this.state.preferenceIndex + 1})}}
              >Next</button>
            </div>
          )
      case 4: // gender
          return (
            <div class="findMe-wrapper col-8">
                <h3><strong>What is your preferred sex in your doctors?</strong></h3>
                <select class="findMe-select" multiple onChange={(e) => this.onSelectChange("Gender", e)}>
                    <option class="findMe-option-thicc" value="male">Male</option>
                    <option class="findMe-option-thicc" value="female">Female</option>
                    <option class="findMe-option-thicc" value="none">No Preference</option>
                </select>

                <button 
                type="button" 
                class="btn btn-primary position-absolute" 
                style={{bottom: '30px', right: '30px', width: '200px'}}
                onClick={() => {this.setState({preferenceIndex: this.state.preferenceIndex + 1})}}
              >Next</button>
            </div>
          )

      
      default:
          return(
            <div>something broke</div>
          )
    }
      
  }

  render() {
    return(
      <>
        <div className="row h-100 mx-0">
          <SideBar sidedata={this.state.sidedata} />
          { this.state.progressIndex === 1 ?
            <>
              <Symptoms />
              <button 
                type="button" 
                class="btn btn-primary position-absolute" 
                style={{bottom: '30px', right: '30px', width: '200px'}}
                onClick={() => {this.setState({progressIndex: 2}, () => {this.componentDidMount()})}}
              >Go to Preference</button>
            </> :
            <>
            <div className="col-6">
              <div class="container">
                <h3>Doctor Preferences</h3>
                <span>Fill out the form below to identify your preferences in doctors</span>
                {this.preferenceState()}
              </div>
            </div>
              
            </>
          }
        </div>
      </>
    )
  }
}

export default FindMe