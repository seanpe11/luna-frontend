import React from "react"
import SideBar from "../components/SideBar"
import Symptoms from "../components/FindMe/Symptoms"
import Options from "../data/options.json"
import { Link } from "react-router-dom"
import logo from '../images/moon-full-moon-icon.png'
import "../css/luna.css"
import { Modal, Button} from "react-bootstrap"


class FindMe extends React.Component {

  constructor() {
    super()
    this.state = {
      progressIndex: 1,
      maxProgressIndex: 1,
      preferenceIndex: 0,
      preferences: {
        location: null,
        age: null,
        price: null,
        experience: null,
        gender: null,
      },
      thereIsSelection: false,
      sidedata: [],
      inputtedsymptoms: [],
      modalShow: true
    }
    this.childChangeProgress = this.childChangeProgress.bind(this)
    this.pushSymptom = this.pushSymptom.bind(this)
  }

  componentDidMount() {
    this.setState({sidedata: this.changeProgress()})
  }

  childChangeProgress(progress) {
    if(progress <= this.state.maxProgressIndex){
      this.setState({progressIndex: progress}, () => {this.componentDidMount()})
    }
  }

  pushSymptom(input) {
    var newArray = this.state.inputtedsymptoms.concat(input)
    this.setState({inputtedsymptoms: newArray})
    console.log(newArray)
  }

  deleteSymptom(delId){
    console.log(delId)
    var newArray = this.state.inputtedsymptoms.filter(item => {
      return item.symptomid !== delId
    })
    this.setState({inputtedsymptoms: newArray})
    console.log(newArray)
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

  highlightOption(param, value){
    switch(param){
      case "Location":
        if(this.state.preferences.location && this.state.preferences.location.val === value)
          return 'findMe-option-thicc option-selected'
        else
          return 'findMe-option-thicc'
      case "Price":
        if(this.state.preferences.price && this.state.preferences.price.val === value)
          return 'findMe-option-thicc option-selected'
        else
          return 'findMe-option-thicc'
      case "Age":
        if(this.state.preferences.age && this.state.preferences.age.val === value)
          return 'findMe-option-thicc option-selected'
        else
          return 'findMe-option-thicc'
      case "Experience":
        if(this.state.preferences.experience && this.state.preferences.experience.val === value)
          return 'findMe-option-thicc option-selected'
        else
          return 'findMe-option-thicc'
      case "Gender":
        if(this.state.preferences.gender && this.state.preferences.gender.val === value)
          return 'findMe-option-thicc option-selected'
        else
          return 'findMe-option-thicc'
      default:
        return 'findMe-option-thicc'
    }
  }

  onSelectChange = (param, value) => {
    var preferences = this.state.preferences
    var valueSelected
    switch(param){
      case "Price":
        valueSelected = (value)
        preferences.price = valueSelected;
        break;
      case "Location":
        valueSelected = (value)
        preferences.location = valueSelected;
        break;
      case "Age":
        // valueSelected = parseInt(value)
        valueSelected = value
        preferences.age = valueSelected;
        console.log(preferences.age)
        break;
      case "Experience":
        // valueSelected = parseInt(value)
        valueSelected = value
        preferences.experience = valueSelected;
        break;
      case "Gender":
        valueSelected = (value)
        preferences.gender = valueSelected;
        break
      default:
        break
    }    
    this.setState({preferences: preferences, thereIsSelection: true})
  }

  backHandler() {
    this.setState({thereIsSelection: true})
    if (this.state.progressIndex === 2){
      if (this.state.preferenceIndex > 0){
        this.setState({preferenceIndex: this.state.preferenceIndex - 1})
      } 
      else {
        this.setState({progressIndex: 1}, () => {this.componentDidMount()})
      }
    } else if (this.state.progressIndex === 3){
      this.setState({progressIndex: 2}, () => {this.componentDidMount()})
    }
  }

  preferenceState() {
    switch(this.state.preferenceIndex){
      case 0: // location
          let locationButtons = Options.locations.map((item, index) => {
            return <button 
                key = {index} 
                className={this.highlightOption("Location", item.val)} 
                onClick={(e) => 
                  this.onSelectChange("Location", {val: item.val, act: item.act}, e)
                }>
                  {item.act}
                </button>
          })
          console.log(locationButtons)
          return (
            <div class="findMe-wrapper">
                <h3><strong>Where would you prefer your doctor's clinic to be in?</strong></h3>
                  { locationButtons }
            </div>
          )
      case 1: // age
          let ageButtons = Options.ages.map((age, index) => {
            return <button 
              key = { index }
              className={this.highlightOption("Age", age.val)} 
              onClick={(e) => 
                this.onSelectChange("Age", {val: age.val, act: age.act}, e)
              }>
                { age.act }
              </button>
              
          })
          return (
            <div class="findMe-wrapper">
                <h3><strong>What age group do you prefer for your Doctor’s Age?</strong></h3>
                { ageButtons }
            </div>
          )
      case 2: // experience
          let experienceButtons = Options.experiences.map((experience, index) => {
            return <button 
              key = { index }
              className={this.highlightOption("Experience", experience.val)} 
              onClick={(e) => 
                this.onSelectChange("Experience", {val: experience.val, act: experience.act}, e)
              }>
                { experience.act }
              </button>
          })
          return (
            <div class="findMe-wrapper">
                <h3><strong>How much years of experience do you prefer with your doctors?</strong></h3>
                { experienceButtons }
            </div>
          )
      case 3: // price
          let priceButtons = Options.prices.map((price, index) => {
            return <button 
              key = { index }
              className={this.highlightOption("Price", price.val)} 
              onClick={(e) => 
                this.onSelectChange("Price", {val: price.val, act: price.act}, e)
              }>
                { price.act }
              </button>
          })
          return (
            <div class="findMe-wrapper">
                <h3><strong>How much can you budget for doctor consultations?</strong></h3>
                { priceButtons }
            </div>
          )
      case 4: // gender
          let genderButtons = Options.genders.map((gender, index) => {
            return <button 
              key = { index }
              className={this.highlightOption("Gender", gender.val)} 
              onClick={(e) => 
                this.onSelectChange("Gender", {val: gender.val, act: gender.act}, e)
              }>
                { gender.act }
              </button>
          })
          return (
            <div class="findMe-wrapper">
                <h3><strong>What is your preferred sex in your doctors?</strong></h3>
                { genderButtons }
            </div>
          )

      default:
          return(
            <div>something broke</div>
          )
    }
      
  }

  contentHandler() {
    switch(this.state.progressIndex){
      case 1:
        return (
          <>
            <Symptoms pushSymptom={this.pushSymptom} inputtedsymptoms={this.state.inputtedsymptoms}/>
          </>
        )
      case 2:
        return (
          <>
            <div className="m-0 p-0 d-flex flex-column">
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
        )
      case 3:
      //   symptomid: this.state.symptomselect,
      // frequency: this.state.frequencyselect,
      // details: this.state.moredetails,
      // symptom: this.state.symptomList.find(item => item.ID === parseInt(this.state.symptomselect)),
      // location: this.state.bodySelected
        return (
          <>
            <div className="pt-5 px-5">
              <h1>Confirm Input</h1>
              <span>Verify if the information below is correct</span>
              <div className="mt-5 rounded-3">
                <h3>Symptom List</h3>
                {
                  this.state.inputtedsymptoms.map((item, index) => {
                    return (
                      <>
                        <span style={{fontSize: '1.3rem'}}>{item.symptom.Name} - {item.frequency}</span> <br />
                        <span className="fst-italic">{item.location}</span> <br/>
                        <span className="text-secondary">{item.details === "" ? "No extra details inputted." : item.details}</span>
                        <br /> <br />
                      </>
                    )
                  })
                }
              </div>
              <div className="mt-5 rounded-3">
                <h3>Doctor Preferences</h3>
                {
                  <table class="table">
                    <col style={{width: "30%"}} />
	                  <col style={{width: "70%"}}  />
                    <tbody>
                      <tr>
                        <th>Doctor Location</th>
                        <td>{this.state.preferences.location.act}</td>
                      </tr>
                      <tr>
                        <th>Doctor Age</th>
                        <td>{this.state.preferences.age.act}</td>
                      </tr>
                      <tr>
                        <th>Doctor Experience</th>
                        <td>{this.state.preferences.experience.act}</td>
                      </tr>
                      <tr>
                        <th>Consultation Fee</th>
                        <td>{this.state.preferences.price.act}</td>
                      </tr>
                      <tr>
                        <th>Doctor Sex</th>
                        <td>{this.state.preferences.gender.act}</td>
                      </tr>
                    </tbody>
                  </table>
                }
              </div>
            </div>
          </>
        )
      default:
        return (
          <>
            Content Handler Error
          </>
        )
    }
  }

  nextButtonHandler() {
    if (this.state.progressIndex === 1 && this.state.inputtedsymptoms.length === 0){
      return <button 
                  type="button" 
                  class="btn btn-primary"
                  style={{width: '200px'}}
                  disabled
                  >Go to Preference</button>
    }
    else if (this.state.progressIndex === 2 && !this.state.thereIsSelection ){
      return <button 
                  type="button" 
                  class="btn btn-primary"
                  style={{width: '200px'}}
                  disabled>Next</button>
    }

    switch (this.state.progressIndex){
      case 1:
        return(
          <button
            type="button"
            class="btn btn-primary"
            style={{width: '200px'}}
            onClick={() => {this.setState({progressIndex: 2, maxProgressIndex: 2}, () => {this.componentDidMount()})}}
          >Go to Preference</button>
          )
      case 2:   
        if(this.state.preferenceIndex < 4) 
            return (<button 
              type="button" 
              class="btn btn-primary" 
              style={{width: '200px'}}
              onClick={() => {this.setState({preferenceIndex: this.state.preferenceIndex + 1, thereIsSelection: false})}}
              >Next</button>)
        else
            return(<button 
              type="button" 
              class="btn btn-primary" 
              style={{width: '200px'}}
              onClick={() => {this.setState({progressIndex: 3, maxProgressIndex: 3, thereIsSelection: false}, () => {this.componentDidMount()})}}
              >Review Inputs</button>)
      case 3:
        return(<Link
            type="button"
            class="btn btn-primary"
            style={{width: '200px'}}
            to="/doctors"
            state={{
              symptoms: this.state.inputtedsymptoms,
              preferences: this.state.preferences
              // boolean: true
            }}
          >Find me a Doctor!</Link>)
      default:
        break;
    }
  }

  render() {
    return(
      <>
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.modalShow}
        >
          <Modal.Header>
            <Modal.Title id="contained-modal-title-vcenter">
              Welcome to LUNA Find me a Doctor! 👋
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5 class='text-primary'>What is going to happen?</h5>
            <p>
              You will go through a 3-step process to find your doctor. We will be collecting your <b>Symptoms</b> and <b>Doctor Preferences.</b> After, we will serve you a list of doctors based on those two.
            </p>
            <p>
              <b class='text-primary'>1. Symptom Input:</b> You can <b>click any body part</b> that will be shown on the page and a list of symptoms will appear. You can <b>choose multiple symptoms</b> that may apply to them as well as the frequency of the symptom and additional information that can detail their symptoms more. You can also select symptoms from the <b>'Skins, Joints, and General Symptoms'</b> button for more general symptoms.
            </p>
            <p>
              <b class='text-primary'>2. Doctor Preferences:</b> You have multiple options to narrow down the doctor of their choice such as the <b>location of the doctor, age, years of experience, consultation fee, and gender</b> of the doctor. These options will match a doctor that is best suited for you.
            </p>
            <p>
              <b class='text-primary'>3. Doctor List:</b> After, you will be served with doctors that match all your preferences, doctors that match only your symptoms and locations, and doctors that match your symptoms only.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={() => {this.setState({modalShow: false})}}>Close</Button>
          </Modal.Footer>
        </Modal>
        <div className="row"></div>
        <div className="row min-vh-100 mx-0">
          <div className='min-vh-100 col-3 pt-5 ps-5' style={{backgroundColor: '#3B4AD0', color: 'white'}}>
            <div className='w-100 d-flex mb-4'>
                <img className='me-3' src={logo} alt='logo' width='75px'/>
                <span style={{fontSize: '40px', fontWeight: 'bolder'}}>LUNA</span>
            </div>
            <SideBar sidedata={this.state.sidedata} changeProgress={this.childChangeProgress}/>
            {
            this.state.progressIndex !== 3 && 
              <div class="card mt-4 text-black overflow-auto" style={{ width: '250px', maxHeight: '200px' }}>
                <div class="card-body">
                  <h5 class="card-title">Symptoms</h5>
                  {
                    this.state.inputtedsymptoms.length > 0 ? this.state.inputtedsymptoms.map((item, index) => {
                      return (
                        <>
                          <span style={{ fontWeight: 'bolder' }}>{item.symptom.Name}</span>
                          <span className="text-decoration-none fw-bold text-danger cursor-pointer ms-2"  onClick={() => {this.deleteSymptom(item.symptomid)}}>🗑️</span> <br />
                          <span>{item.location}</span><br />
                        </>
                      )
                    }
                    ) :
                      <p class="card-text text-secondary">
                        No symptoms inputted
                      </p>
                  }

                </div>
              </div>
            }
          </div>
          <div class='col-9'>
            { this.contentHandler() }
            <span className="row me-5 mb-3 float-end" style={{width: 'auto'}}> 
              { this.state.progressIndex > 1 && 
                <button
                  type="button"
                  class="btn btn-secondary me-3"
                  style={{width: '200px'}}
                  onClick={() => {this.backHandler()}}
                >Back</button>
              }

              { this.nextButtonHandler() }
            </span>
          </div>
        </div>
      </>
    )
  }
}

export default FindMe