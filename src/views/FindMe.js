import React from "react"
import SideBar from "../components/SideBar"
import Symptoms from "../components/FindMe/Symptoms"


class FindMe extends React.Component {

  constructor() {
    super()
    this.state = {
      progressIndex: 1,
      sidedata: []
    }
  }

  componentDidMount() {
    console.log("hit")
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
                onClick={() => {this.setState({progressIndex: 2})}}
              >Go to Preference</button>
            </> :
            <>
              <div className="col-6">
                <span>Next</span>
              </div>
            </>
          }
        </div>
      </>
    )
  }
}

export default FindMe