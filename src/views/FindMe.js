import React from "react"
import SideBar from "../components/SideBar"
import Symptoms from "../components/FindMe/Symptoms"
import { Link } from "react-router-dom"
import "../css/luna.css"


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
          return (
            <div class="findMe-wrapper">
                <h3><strong>Where would you prefer your doctor's clinic to be in?</strong></h3>
                  <button class={this.highlightOption("Location", "Manila City")} onClick={(e) => this.onSelectChange("Location", {val: "Manila City", act: "Manila City"}, e)}>Manila</button>
                  {/* <button class={this.highlightOption("Location", "Marikina")} onClick={(e) => this.onSelectChange("Location", "Marikina", e)}>Marikina</button> */}
                  {/* <button class={this.highlightOption("Location", "Taguig")} onClick={(e) => this.onSelectChange("Location", "Taguig", e)}>Taguig</button> */}
                  <button class={this.highlightOption("Location", "Quezon City")} onClick={(e) => this.onSelectChange("Location", {val:"Quezon City", act:"Quezon City"}, e)}>Quezon City</button>
                  {/* <button class={this.highlightOption("Location", "Tawi-Tawi")} onClick={(e) => this.onSelectChange("Location", "Tawi-Tawi", e)}>Tawi-Tawi</button>
                  <button class={this.highlightOption("Location", "Dipolog")} onClick={(e) => this.onSelectChange("Location", "Dipolog", e)}>Dipolog</button> */}
                  <button class={this.highlightOption("Location", "Davao City")} onClick={(e) => this.onSelectChange("Location", {val:"Davao City", act:"Davao City"}, e)}>Davao</button>
                  <button class={this.highlightOption("Location", "Zamboanga City")} onClick={(e) => this.onSelectChange("Location", {val:"Zamboanga City",act:"Zamboanga City"}, e)}>Zambaonga</button>
                  {/* <button class={this.highlightOption("Location", "Bacolod")} onClick={(e) => this.onSelectChange("Location", "Bacolod", e)}>Bacolod</button>
                  <button cest match"
Enter
Jolo
￼
made some changes na to doctors page
￼
Enter
Write to thesis


Aa
￼
￼
￼
thesis
Customize chat
Change chat name
Change photo
Change theme
￼
Change emoji
Edit nicknames
Search in conversation
Chat members
Jolo Cansana
Group creator
lass={this.highlightOption("Location", "Cebu")} onClick={(e) => this.onSelectChange("Location", "Cebu", e)}>Cebu</button>
                  <button class={this.highlightOption("Location", "Ilo-Ilo")} onClick={(e) => this.onSelectChange("Location", "Ilo-Ilo", e)}>Ilo-Ilo</button> */}
                  <button class={this.highlightOption("Location", "")} onClick={(e) => this.onSelectChange("Location", {val:"",act:"No Preference"}, e)}>No Preference</button>
            </div>
          )
      case 1: // age
          return (
            <div class="findMe-wrapper col-8">
                <h3><strong>What age group do you prefer for your Doctor’s Age?</strong></h3>
                <button class={this.highlightOption("Age", 30)} onClick={(e) => this.onSelectChange("Age", {val:30,act: "Younger than 30"}, e)}>Younger than 30</button>
                <button class={this.highlightOption("Age", 45)} onClick={(e) => this.onSelectChange("Age", {val:45,act: "30 to 45 years old"}, e)}>30 to 45 years old</button>
                <button class={this.highlightOption("Age", 46)} onClick={(e) => this.onSelectChange("Age", {val:46,act: "45 years or older"}, e)}>45 years or older</button>
                <button class={this.highlightOption("Age", -1)} onClick={(e) => this.onSelectChange("Age", {val:-1,act: "No Preference"}, e)}>No Preference</button>
            </div>
          )
      case 2: // experience
          return (
            <div class="findMe-wrapper col-8">
                <h3><strong>How much years of experience do you prefer with your doctors?</strong></h3>
                <button class={this.highlightOption("Experience", 0)} onClick={(e) => this.onSelectChange("Experience", {val:0, act: "Less than 10 years of experience"}, e)}>Less than 10 years of experience</button>
                <button class={this.highlightOption("Experience", 10)} onClick={(e) => this.onSelectChange("Experience", {val:10, act: "10 of more years of experience"}, e)}>10 or more years of experience</button>
                <button class={this.highlightOption("Experience", 20)} onClick={(e) => this.onSelectChange("Experience", {val:20, act: "20 or more years of experience"}, e)}>20 or more years of experience</button>
                <button class={this.highlightOption("Experience", -1)} onClick={(e) => this.onSelectChange("Experience", {val:-1, act: "No Preference"}, e)}>No Preferece</button>

            </div>
          )
      case 3: // price
          return (
            <div class="findMe-wrapper col-8">
                <h3><strong>How much can you budget for doctor consultations?</strong></h3>
                <button class={this.highlightOption("Price", "100-500")} onClick={(e) => this.onSelectChange("Price", {val: "100-500", act: "Less than PHP 500.00"}, e)}>Less than PHP 500.00</button>
                <button class={this.highlightOption("Price", "501-1000")} onClick={(e) => this.onSelectChange("Price", {val: "501-1000", act: "PHP 500.00 to PHP 1,000.00"}, e)}>PHP 500.00 to PHP 1,000.00</button>
                <button class={this.highlightOption("Price", "1001-2000")} onClick={(e) => this.onSelectChange("Price", {val: "1001-2000", act: "PHP 1,000.00 to PHP 2,000.00"}, e)}>PHP 1,000.00 to PHP 2,000.00</button>
                <button class={this.highlightOption("Price", "2000+")} onClick={(e) => this.onSelectChange("Price", {val: "2000+", act: "More than PHP 2,000.00"}, e)}>More than PHP 2,000.00</button>
                <button class={this.highlightOption("Price", "-1")} onClick={(e) => this.onSelectChange("Price", {val: "-1", act: "No preference"}, e)}>No preference</button>
            </div>
          )
      case 4: // gender
          return (
            <div class="findMe-wrapper col-8">
                <h3><strong>What is your preferred sex in your doctors?</strong></h3>

                <button class={this.highlightOption("Gender", "Male")} onClick={(e) => this.onSelectChange("Gender", {val: "Male", act: "Male"}, e)}>Male</button>
                <button class={this.highlightOption("Gender", "Female")} onClick={(e) => this.onSelectChange("Gender", {val: "Female", act: "Female"}, e)}>Female</button>
                <button class={this.highlightOption("Gender", "none")} onClick={(e) => this.onSelectChange("Gender", {val: "none", act: "No Preference"}, e)}>No Preference</button>
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
        )
      case 3:
      //   symptomid: this.state.symptomselect,
      // frequency: this.state.frequencyselect,
      // details: this.state.moredetails,
      // symptom: this.state.symptomList.find(item => item.ID === parseInt(this.state.symptomselect)),
      // location: this.state.bodySelected
        return (
          <>
            <div className="col-9 pt-5 px-5">
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
                        <span className="text-secondary">{item.details}</span>
                        <br />
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
        <div className="row h-100 mx-0">
          <SideBar sidedata={this.state.sidedata} changeProgress={this.childChangeProgress}/>
          { this.contentHandler() }
          <span className="position-absolute" style={{bottom: '30px', right: '30px', width: 'auto'}}> 

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

          {
            this.state.progressIndex !== 3 && 
            <div class="card position-absolute" style={{ bottom: '30px', left: '30px', width: '250px' }}>
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
      </>
    )
  }
}

export default FindMe