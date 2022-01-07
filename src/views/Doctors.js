import React, {Component} from 'react'
import Header from '../components/Header.js'
import DoctorMale from '../images/doctor_pic_male.png'
import DoctorFemale from '../images/doctor_pic_female.jpeg'
import DoctorList from "../data/doctors.json"


class Doctors extends Component {
  constructor(){
    super()
    this.state = {
      doctors: []
    }
  }

  componentDidMount() {
    this.setState({doctors: DoctorList}, () => console.log(this.state.doctors))
  }

  queryDoctors(query) {
    
  }

  render() {
    return (
      <>
        <Header />
        <div className="container mt-3">
          <div className="row">
            <div className="col-6">
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                <label for="floatingInput">Search</label>
              </div>
            </div>
            <div className="col-6">
              <button type="button" class="btn btn-outline-secondary">Location</button>
              <button type="button" class="btn btn-outline-secondary">Alphabetically (A-Z)</button>
              <button type="button" class="btn btn-outline-secondary">Alphabetically (Z-A)</button>
              <span style={{fontWeight: 'bolder'}}>Sort Results by</span>
            </div>
          </div>
          <div id="doctor-container" className='mt-2'>
            {
              // SAMPLE DOCTOR
              // clinic_address: "Manila City"
              // clinic_location: "Manila Doctors Hospital"
              // med_school: "UERM"
              // name: "Giovanni Bocanegra"
              // price_range: "100-500"
              // sex: "Male"
              // specialization: "Cardiology"
              this.state.doctors.map((doctor) => {
                return(
                  <>
                    <div className="row mb-2">
                      <div className="col-1">
                        <img src={doctor.sex === "Male" ? DoctorMale : DoctorFemale} alt="doctor_pic" style={{width: '50px'}}/>
                      </div>
                      <div className='col-4 ps-4'><span className="d-flex h-100 align-items-center">{doctor.name}</span></div>
                      <div className='col-3'><span className="d-flex h-100 align-items-center">{doctor.specialization}</span></div>
                      <div className='col-4'><span className="d-flex h-100 align-items-center float-end">{doctor.clinic_address}</span></div>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </>
    )
  }
}

export default Doctors