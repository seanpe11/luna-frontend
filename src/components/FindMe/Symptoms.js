import abdomen from "../../images/bodyparts/abdomen.png"
import chest from "../../images/bodyparts/chest.png" 
import legs from "../../images/bodyparts/legs.png" 
import head from "../../images/bodyparts/head.png" 
import larm from "../../images/bodyparts/l-arm.png" 
import rarm from "../../images/bodyparts/r-arm.png"
import React from "react"
import SymptomList from "../../data/body_locations_symptoms.json"

class Symptoms extends React.Component {

  constructor() {
    super()
    this.state = {
      bodySelected: "None", 
      symptomList: [], 
      frequencyList: ['Once a Day', 'Once a Week', 'Twice a Week', 'Consistent'], 
      hidden: true,
      tiptext: "First, click on the body part in the diagram where your symptoms are present; or select more general symptoms in the button below",
      symptomselect: "",
      frequencyselect: "",
      moredetails: "",
      inputedsymptoms: [],
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

    console.log(input)

    this.state.inputedsymptoms.push(input)

    this.setState({hidden: true})
  }

  bodyClicker(part) {
    switch(part) {
      case "head":
        this.setState({bodySelected: "Head, Throat, and Neck"})
        break
      case "chest":
        this.setState({bodySelected: "Chest and Back"})
        break
      case "arms":
        this.setState({bodySelected: "Arms and Shoulder"})
        break
      case "abdomen":
        this.setState({bodySelected: "Abdomen, Pelvis, and Buttocks"})
        break
      case "legs":
        this.setState({bodySelected: "Legs"})
        break
      case "general":
        this.setState({bodySelected: "Skin, Joints and General"})
        break
      default:
        break
    }
    this.setState({hidden: false})
    this.setState({symptomList: (SymptomList.filter(item => item.pid === part))[0].symptoms}, () => console.log(this.state.symptomList))
    this.setState({tiptext: "Now, select your symptoms from the list and add addditional information about your symptoms."})
  }

  render() {
    return(
      <>
        <div className="col-4 px-0">
          <div className="mb-3">
            <img className="mx-auto d-block" src={head} alt='head' onClick={() => {this.bodyClicker("head")}}/>
          </div>
          <div className="mb-3 row">
            <div className="col-4 p-0"><img className="float-end d-block" src={larm} alt='larm' onClick={() => {this.bodyClicker("arms")}}/></div>
            <div className="col-4 p-0">
              <img className="mb-3 mx-auto d-block" src={chest} alt='chest' onClick={() => {this.bodyClicker("chest")}}/>
              <img className="mb-3 mx-auto d-block" src={abdomen} alt='abdomen' onClick={() => {this.bodyClicker("abdomen")}}/>
              <img className="mb-3 mx-auto d-block" src={legs} alt='legs' onClick={() => {this.bodyClicker("legs")}}/>
            </div>
            <div className="col-4 p-0"><img className="float-start d-block" src={rarm} alt='rarm' onClick={() => {this.bodyClicker("arms")}}/></div>
          </div>
        </div>
        <div className="col-5 px-0">

          <div class="me-5 mt-5">
            <h1>Input your symptoms</h1>
            <p>{this.state.tiptext}</p>
          </div>

          <button type="button" class="btn btn-outline-secondary" onClick={() => {this.bodyClicker("general")}}>Skin, Joints and General Symptoms</button>

          <div class={this.state.hidden ? "card d-none" : "card mt-4 me-5"}>
            <div class="card-body">
              <div className="">
                <h5 class="card-title">{this.state.bodySelected}</h5>
              </div>
              <div class="card-body">
                <div class="form-floating mb-4">
                  <select class="form-select" id="symptomselect" aria-label="Floating label select example" onChange={evt => this.setState({symptomselect: evt.target.value})}>
                  <option selected> </option>
                    {
                      this.state.symptomList.map((item,index)=>{
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
                  <select class="form-select" id="frequencyselect" aria-label="Floating label select example" onChange={evt => this.setState({frequencyselect: evt.target.value})}>
                    <option selected> </option>
                    {
                      this.state.frequencyList.map((item,index)=>{
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
                  <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{height: "100px"}} onChange={evt => this.setState({moredetails: evt.target.value})}> </textarea>
                  <label for="floatingTextarea">More Details</label>
                </div>

                <button type="button" class="btn btn-primary" onClick={() => this.inputSymptom()}>Add Symptom</button>
                
              </div>
            </div>
          </div>
        </div>

        <div class="card position-absolute" style={{bottom: '30px', left: '30px', width: '250px'}}>
          <div class="card-body">
            <h5 class="card-title">Symptoms</h5>
            {
              this.state.inputedsymptoms.length > 0 ? this.state.inputedsymptoms.map((item,index)=>{
                  return (
                    <>
                      <span style={{fontWeight: 'bolder'}}>{item.symptom.Name}</span> <br/>
                      <span>{item.location}</span><br/>                    
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
      </>
    )
  }
}

export default Symptoms