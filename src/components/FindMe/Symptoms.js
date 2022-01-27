import abdomen from "../../images/bodyparts/abdomen.png"
import chest from "../../images/bodyparts/chest.png"
import legs from "../../images/bodyparts/legs.png"
import head from "../../images/bodyparts/head.png"
import larm from "../../images/bodyparts/l-arm.png"
import rarm from "../../images/bodyparts/r-arm.png"
import React from "react"
import SymptomList from "../../data/body_locations_symptoms.json"
import { OverlayTrigger, Tooltip } from "react-bootstrap"

class Symptoms extends React.Component {

  constructor() {
    super()
    this.state = {
      bodySelected: "None",
      symptomList: [],
      frequencyList: ['Once a Day', 'Once a Week', 'Twice a Week', 'Consistent'],
      hidden: true,
      tiptext: <>First, <b class='text-primary'>click on the body</b> part in the diagram where your symptoms are present; or select more <b class='text-primary'>general symptoms in the button below</b></>,
      symptomselect: "",
      frequencyselect: "",
      moredetails: "",
      symptomExistsError: false
    }
  }

  inputSymptom() {
    let input = {
      symptomid: this.state.symptomselect,
      frequency: this.state.frequencyselect,
      details: this.state.moredetails,
      symptom: this.state.symptomList.find(item => item.ID === parseInt(this.state.symptomselect)),
      location: this.state.bodySelected
    }

    if(this.props.inputtedsymptoms.length === 0)
    {
      this.props.pushSymptom(input)
      this.setState({ hidden: true })
      this.setState({symptomExistsError: false})

    } else {
      let exists = this.props.inputtedsymptoms.find(symptom => symptom.symptomid === input.symptomid)
      if(exists === undefined)
      {
        this.props.pushSymptom(input)
        this.setState({ hidden: true })
        this.setState({symptomExistsError: false})
        this.setState({ tiptext: <>First, <b class='text-primary'>click on the body</b> part in the diagram where your symptoms are present; or select more <b class='text-primary'>general symptoms in the button below</b></> })
      }
      else
      {
        this.setState({symptomExistsError: true})
      }
    }

    // this.props.inputedsymptoms.push(input)
  }

  addSymptomChecker(){
    if(this.state.symptomselect === "" || this.state.frequencyselect === ""){
      return (<button type="button" class="btn btn-primary" onClick={() => this.inputSymptom()} disabled>Add Symptom</button>)
    } else {
      return (<button type="button" class="btn btn-primary" onClick={() => this.inputSymptom()}>Add Symptom</button>)
    }
  }

  bodyClicker(part) {
    switch (part) {
      case "head":
        this.setState({ bodySelected: "Head, Throat, and Neck" })
        break
      case "chest":
        this.setState({ bodySelected: "Chest and Back" })
        break
      case "arms":
        this.setState({ bodySelected: "Arms and Shoulder" })
        break
      case "abdomen":
        this.setState({ bodySelected: "Abdomen, Pelvis, and Buttocks" })
        break
      case "legs":
        this.setState({ bodySelected: "Legs" })
        break
      case "general":
        this.setState({ bodySelected: "Skin, Joints and General" })
        break
      default:
        break
    }
    this.setState({ hidden: false })
    this.setState({frequencyselect: "", symptomselect: "", moredetails: ""})
    let partList = SymptomList
              .filter(item => item.pid === part)[0]
              .symptoms.sort( 
                (a, b) => 
                  a.Name.localeCompare(b.Name, 'fr', {ignorePunctuation: true})
              );
    this.setState({ symptomList: partList }, () => {
      console.log(this.state.symptomList)
      let symptomSelect = document.getElementById('symptomselect');
      symptomSelect.value = ""
      let frequencySelect = document.getElementById('frequencyselect');
      frequencySelect.value = ""
      let moreDetailsArea = document.getElementById('moredetails')
      moreDetailsArea.value = ""
    })
    this.setState({ tiptext: <>Now, select your symptoms from the list and add addditional information about your symptoms.</> })
  }

  render() {
    return (
      <>
        <div className="row">
          <div className="col-5 px-0">
            <div className="mb-3">
              <OverlayTrigger key="head" placement="bottom" overlay={
                <Tooltip>
                  Head, Throat, and Neck
                </Tooltip>
              }>
                <img className="mx-auto d-block cursor-pointer" src={head} alt='head' onClick={() => { this.bodyClicker("head") }} data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Head, Throat, and Neck" />
              </OverlayTrigger>
            </div>
            <div className="mb-3 row">
              <div className="col-4 p-0">
              <OverlayTrigger key="larm" placement="bottom" overlay={
                <Tooltip>
                  Arms and Shoulder
                </Tooltip>
              }>
                <img className="float-end d-block cursor-pointer" src={larm} alt='larm' onClick={() => { this.bodyClicker("arms") }} />
              </OverlayTrigger>
              </div>
              <div className="col-4 p-0">
                <OverlayTrigger key="chest" placement="bottom" overlay={
                  <Tooltip>
                    Chest and Back
                  </Tooltip>
                }>
                <img className="mb-3 mx-auto d-block cursor-pointer" src={chest} alt='chest' onClick={() => { this.bodyClicker("chest") }} />
                </OverlayTrigger>
                <OverlayTrigger key="abdomen" placement="bottom" overlay={
                    <Tooltip>
                      Abdomen, Pelvis, and Buttocks
                    </Tooltip>
                  }>
                  <img className="mb-3 mx-auto d-block cursor-pointer" src={abdomen} alt='abdomen' onClick={() => { this.bodyClicker("abdomen") }} />
                </OverlayTrigger>
                <OverlayTrigger key="legs" placement="bottom" overlay={
                  <Tooltip>
                    Legs
                  </Tooltip>
                }>
                <img className="mb-3 mx-auto d-block cursor-pointer" src={legs} alt='legs' onClick={() => { this.bodyClicker("legs") }} />
              </OverlayTrigger>
              </div>
              <div className="col-4 p-0">
                <OverlayTrigger key="rarms" placement="bottom" overlay={
                  <Tooltip>
                    Arms
                  </Tooltip>
                }>
                  <img className="float-start d-block cursor-pointer" src={rarm} alt='rarm' onClick={() => { this.bodyClicker("arms") }} />
                </OverlayTrigger>
              </div>
            </div>
          </div>
          <div className="col-7 px-0">
            <div class="me-5 mt-5">
              <h1>Input your symptoms</h1>
              <p>{this.state.tiptext}</p>
            </div>
            <button type="button" class="btn btn-primary" onClick={() => { this.bodyClicker("general") }}>Skin, Joints and General Symptoms</button>
            <div class={this.state.hidden ? "card d-none" : "card mt-4 me-5"}>
              <div class="card-body">
                <div className="">
                  <h5 class="card-title">{this.state.bodySelected}</h5>
                </div>
                <div class="card-body">
                  <div class="form-floating mb-4">
                    <select class="form-select" id="symptomselect" aria-label="Floating label select example" onChange={evt => this.setState({ symptomselect: evt.target.value })}>
                      {
                        this.state.symptomList.map((item, index) => {
                          if (index === 0)
                            return (
                              <>
                                <option value=""> </option>
                                <option value={item.ID}>{item.Name}</option>
                              </>
                            )
                          else
                            return (
                              <option value={item.ID}>{item.Name}</option>
                            )
                        }
                        )
                      }
                    </select>
                    <label for="floatingSelect">Symptom</label>
                  </div>
                  <div class="form-floating mb-4">
                    <select class="form-select" id="frequencyselect" aria-label="Floating label select example" onChange={evt => this.setState({ frequencyselect: evt.target.value })}>
                      {
                        this.state.frequencyList.map((item, index) => {
                          if (index === 0)
                            return (
                              <>
                                <option value=""> </option>
                                <option value={item}>{item}</option>
                              </>
                            )
                          else
                            return (
                              <option value={item}>{item}</option>
                            )
                        }
                        )
                      }
                    </select>
                    <label for="floatingSelect">Frequency</label>
                  </div>
                  <div class="form-floating mb-4">
                    <textarea id="moredetails" class="form-control" placeholder="Leave a comment here" style={{ height: "100px" }} onChange={evt => this.setState({ moredetails: evt.target.value })}> </textarea>
                    <label for="floatingTextarea">More Details</label>
                  </div>
                  {this.state.symptomExistsError &&
                    <div class="alert alert-danger" role="alert">
                      Symptom already inputted to the list. To make changes, remove the symptom from the list first!
                    </div>
                  }
                  {this.addSymptomChecker()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}

export default Symptoms