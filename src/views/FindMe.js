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
      sidedata: [],
      inputedsymptoms: []
    }
    this.childChangeProgress = this.childChangeProgress.bind(this)
    this.pushSymptom = this.pushSymptom.bind(this)
  }

  componentDidMount() {
    this.setState({sidedata: this.changeProgress()})
  }

  childChangeProgress(progress) {
    this.setState({progressIndex: progress})
    // this.componentDidMount()
  }

  pushSymptom(input) {
    var newArray = this.state.inputedsymptoms.concat(input)
    this.setState({inputedsymptoms: newArray})
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
        break
      default:
        break
    }    
    this.setState({preferences: preferences})
  }

  backHandler() {
    if (this.state.progressIndex === 2){
      if (this.state.preferenceIndex > 0){
        this.setState({preferenceIndex: this.state.preferenceIndex - 1})
      } 
      else {
        this.setState({progressIndex: 1}, () => {this.componentDidMount()})
      }
    }
  }

  preferenceState() {
    switch(this.state.preferenceIndex){
      case 0: // location
          return (
            <div class="findMe-wrapper">
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
          <SideBar sidedata={this.state.sidedata} changeProgress={this.childChangeProgress}/>
          { this.state.progressIndex === 1 ?
            <>
              <Symptoms pushSymptom={this.pushSymptom}/>
            </> :
            <>
            <div className="col-9 m-0 p-0 d-flex flex-column h-100">
              <div className="mt-5 ms-5">
                <h1>Doctor Preferences</h1>
                <span>Fill out the form below to identify your preferences in doctors</span>
              </div>
              <div class="mt-5 ms-5">
                <div>
                  {this.preferenceState()}
                </div>
              </div>
            </div>
              
            </>
          }
          <span className="position-absolute" style={{bottom: '30px', right: '30px', width: 'auto'}}> 
            { this.state.progressIndex > 1 && 
              <button
                type="button"
                class="btn btn-secondary me-3"
                style={{width: '200px'}}
                onClick={() => {this.backHandler()}}
              >Back</button>
            }
            {this.state.progressIndex === 2 ?
              <button 
              type="button" 
              class="btn btn-primary" 
              style={{width: '200px'}}
              onClick={() => {this.setState({preferenceIndex: this.state.preferenceIndex + 1})}}
              >Next</button> : 
              <button
                type="button"
                class="btn btn-primary"
                style={{width: '200px'}}
                onClick={() => {this.setState({progressIndex: 2}, () => {this.componentDidMount()})}}
              >Go to Preference</button>
            }
          </span>

          <div class="card position-absolute" style={{ bottom: '30px', left: '30px', width: '250px' }}>
            <div class="card-body">
              <h5 class="card-title">Symptoms</h5>
              {
                this.state.inputedsymptoms.length > 0 ? this.state.inputedsymptoms.map((item, index) => {
                  return (
                    <>
                      <span style={{ fontWeight: 'bolder' }}>{item.symptom.Name}</span> <br />
                      <span>{item.location}</span><br />
                    </>
                  )
                }
                ) :
                  <p class="card-text text-secondary">
                    No symptoms inputed
                  </p>
              }

            </div>
          </div>
        </div>
      </>
    )
  }
}

export default FindMe