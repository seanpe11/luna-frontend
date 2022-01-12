// import React, {Component} from 'react'
import Header from '../components/Header.js'
import DoctorMale from '../images/doctor_pic_male.png'
import DoctorFemale from '../images/doctor_pic_female.jpeg'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
// import DoctorList from "../data/doctors.json"

function queryDoctors (preferences, symptoms) {
  console.log(preferences, symptoms)
  var symptomString = ""
  var symptomCount = 0
  for(var symptom of symptoms){
    console.log(symptom.symptomid)
    symptomString = symptomString + symptom.symptomid
    if (symptomCount !== symptoms.length-1)
      symptomString += ","
    symptomCount++
  }

  console.log(preferences)
  let body = {
    "querySymptoms": symptomString,
    "usersex": "Male",
    "useryearbirth": 1950,
    "location": preferences.location,
    "age": preferences.age,
    "experience": preferences.experience,
    "price": preferences.price,
    "sex": preferences.gender
  }

  console.log(body)

  return axios.post(
    'https://luna-backend-thesis.herokuapp.com/findMe',
    {
      ...body
    }
  ).then((res) => {
    return res.data
  }).catch(e => {
    console.log('Error lol')
  })
}


function Doctors () {

  const location = useLocation()
  const {preferences, symptoms} = location.state
  var [doctors, setDoctors] = useState([])
  var [specDoctors, setSpecDoctors] = useState([])
  // var [diagnosis, setDiagnosis] = useState([])
  var [specialization, setSpecialization] = useState("")

  useEffect(() => {
    queryDoctors(preferences, symptoms).then(res => {
      console.log(res)
      if(res.firstRecommendations.length > 0)
        setDoctors(res.firstRecommendations)
      else
        setDoctors(res.secondRecommendations)
      console.log('yo')
      setSpecDoctors(res.specRecommendations)
      // setDiagnosis(res.diagnosis)
      setSpecialization(res.diagnosis[0].Specialisation[0].Name)
    })}
    // eslint-disable-next-line
    , [])
  
  return (
    <>
      <Header />
      <div className="row">
        <div className="col-3">
          <div className="container rounded-3 p-3 m-3 text-white" style={{backgroundColor: "#3B4AD0"}}>
            <h5>Symptoms</h5>
            {specialization !== "" && 
            <div>
              Based on your Symptoms, the best specialization to contact is: <span className="fw-bold">{specialization}</span>
            </div>}
            {symptoms.map((symptom) => {
              return (
                <>
                  <div className='mt-3 fw-bold'>{symptom.symptom.Name}</div>
                  <div>{symptom.location}</div>
                </>
              )
            })}
          </div>
          <div className="container rounded-3 p-3 m-3 text-white" style={{backgroundColor: "#3B4AD0"}}>
            <h5>Preferences</h5>
            {
                  <table class="table table-borderless text-white">
                    <col style={{width: "30%"}} />
	                  <col style={{width: "70%"}}  />
                    <tbody>
                      <tr>
                        <th>Doctor Location</th>
                        <td>{preferences.location}</td>
                      </tr>
                      <tr>
                        <th>Doctor Age</th>
                        <td>{preferences.age}</td>
                      </tr>
                      <tr>
                        <th>Doctor Experience</th>
                        <td>{preferences.experience}</td>
                      </tr>
                      <tr>
                        <th>Consultation Fee</th>
                        <td>{preferences.price}</td>
                      </tr>
                      <tr>
                        <th>Doctor Sex</th>
                        <td>{preferences.gender}</td>
                      </tr>
                    </tbody>
                  </table>
                }
          </div>
        </div>
        <div className="col-9">
          <div className="container mt-3">
            <div className="row">
              <div className="col-6 d-flex align-items-center">
                <input type="text" class="form-control" placeholder="Search Doctors" aria-label="doctors"/>
              </div>
              <div className="col-6 d-flex justify-content-around align-items-center">
                <button type="button" class="btn btn-outline-secondary" style={{maxHeight: '40px'}}>Location</button>
                <button type="button" class="btn btn-outline-secondary" style={{maxHeight: '40px'}}>Alphabetically (A-Z)</button>
                {/* <button type="button" class="btn btn-outline-secondary">Alphabetically (Z-A)</button> */}
                <span className='' style={{fontWeight: 'bolder'}}>Sort Results by</span>
              </div>
            </div>
            <div id="doctor-container" className='mt-4'>
              <h3 className='mb-3'>Doctors based on your preferences</h3>
              {
                // SAMPLE DOCTOR
                // clinic_address: "Manila City"
                // clinic_location: "Manila Doctors Hospital"
                // med_school: "UERM"
                // name: "Giovanni Bocanegra"
                // price_range: "100-500"
                // sex: "Male"
                // specialization: "Cardiology"
                doctors.map((doctor) => {
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
            <div id="doctor-container" className='mt-4'>
              <h3 className='mb-3'>Doctors based on your symptoms</h3>
              {
                // SAMPLE DOCTOR
                // clinic_address: "Manila City"
                // clinic_location: "Manila Doctors Hospital"
                // med_school: "UERM"
                // name: "Giovanni Bocanegra"
                // price_range: "100-500"
                // sex: "Male"
                // specialization: "Cardiology"
                specDoctors.map((doctor) => {
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
        </div>
      </div>
    </>
  )
}

export default Doctors