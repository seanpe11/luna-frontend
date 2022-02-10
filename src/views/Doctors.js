// import React, {Component} from 'react'
import Header from '../components/Header.js'
import DoctorMale from '../images/doctor_pic_male.png'
import DoctorFemale from '../images/doctor_pic_female.jpeg'
import { useLocation } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { Rings } from 'react-loader-spinner';
import { Modal, ModalBody } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import "../css/luna.css"
import Options from "../data/options.json"
// import DoctorList from "../data/doctors.json"

function queryDoctors (preferences, symptoms) {

  const {sex, birthDate} = JSON.parse(sessionStorage.getItem("userData"))

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
    "usersex": sex,
    "useryearbirth": new Date(birthDate).getFullYear(),
    "location": preferences.location.val,
    "age": preferences.age.val,
    "experience": preferences.experience.val,
    "price": preferences.price.val,
    "sex": preferences.gender.val
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
  var [editMode, setEditMode] = useState(false);
  var [editPreferences, setEditPreferences] = useState(preferences)
  var [noDoctors, setNoDoctors] = useState(false)
  // var [editMode, setEditMode] = useState(false);
  // var [editPreferences, setEditPreferences] = useState(preferences)
  var [doctors1, setDoctors1] = useState([])
  var [doctors2, setDoctors2] = useState([])
  var [loaded, setLoaded] = useState([]) 
  var [specDoctors, setSpecDoctors] = useState([])
  // var [diagnosis, setDiagnosis] = useState([])
  var [specialization, setSpecialization] = useState("")
  var [selectedSort, setSelectedSort] = useState("")
  var [modalShow, setModalShow] = useState(false); 
  var [activeDoctor, setActiveDoctor] = useState({});
  var [showMore, setShowMore] = useState(false)

  

  useEffect(() => {
      loadDoctors(preferences, symptoms)
  }
    // eslint-disable-next-line
    , [preferences])

  function loadDoctors(preferences, symptoms){
    setLoaded(false)
      var firstRecom, secondRecom = []
      queryDoctors(preferences, symptoms).then(res => {

        console.log(res)
        
        if(res.firstRecommendations.length > 0)
        {
          firstRecom = res.firstRecommendations.map(e => ({...e, isFirst: true}))
        }
        if(res.secondRecommendations.length > 0)
        {
          secondRecom = res.secondRecommendations.map(e => ({...e, isFirst: false}))
          
        }
        setDoctors1(firstRecom)
        setDoctors2(secondRecom)
        setSpecDoctors(res.specRecommendations)
        setNoDoctors(res.firstRecommendations.length + res.secondRecommendations.length > 0)
        // setDiagnosis(res.diagnosis)
        setSpecialization(res.diagnosis[0].Specialisation[0].Name)
        console.log(res.diagnosis)
        setLoaded(true)
      })
  }

  function showDoctorInfo (props) {
    console.log(props)
    setActiveDoctor(props)
    setModalShow(true)
  }

  function sortLastname(a, b) {
    var aLast = a.name.split(' ')
    var bLast = b.name.split(' ')
    aLast = aLast[aLast.length - 1]
    bLast = bLast[bLast.length - 1]
    return aLast.localeCompare(bLast)
  }

  function sortAlphabetically() {
    setDoctors1([...doctors1].sort(sortLastname))
    setDoctors2([...doctors2].sort(sortLastname))
    setSpecDoctors([...specDoctors].sort(sortLastname))
    console.log(specDoctors)
    setSelectedSort("Alphabetically")
  }

  function sortLocationally() {
    var toSort = [...specDoctors]
    toSort.sort((a, b) => a.clinic_address.localeCompare(b.clinic_address))
    setSpecDoctors(toSort)
    console.log(specDoctors)
    setSelectedSort("Location")
  }

  function onSelectChange(e) {
    let updated = editPreferences
    switch(e.target.id){
      case "location":
        updated.location = {
          val: e.target.value
        };
        break;
      case "age":
        updated.age = {
          val: e.target.value
        };
        break;
      case "experience":
        updated.experience = {
          val: e.target.value
        };
        break;
      case "price":
        updated.price = {
          val: e.target.value
        };
        break;
      case "gender":
        updated.gender = {
          val: e.target.value
        };
        break;
      default:
        break;
    }
    setEditPreferences(updated);
  }

  function getNewDoctors(){
    loadDoctors(editPreferences, symptoms)
  }

  function selectSort(value) {
    if(selectedSort === value)
      return 'btn btn-outline-secondary option-selected'
    else
      return 'btn btn-outline-secondary'
  }
  
  return (
    <>
      <Header />

      {/* // SAMPLE DOCTOR
      // clinic_address: "Manila City"
      // clinic_location: "Manila Doctors Hospital"
      // med_school: "UERM"
      // name: "Giovanni Bocanegra"
      // price_range: "100-500"
      // sex: "Male"
      // specialization: "Cardiology" */}
      <Modal centered show={modalShow} onHide={() => setModalShow(false)}>
        <ModalBody>
          <div className="row">
            <div className="col-4">
              <img src={activeDoctor.sex === "Male" ? DoctorMale : DoctorFemale} alt="doctor_pic" style={{width: '100px'}}/>
            </div>
            <div className="col-8">
              <div className="d-flex row">
                <h3>{activeDoctor.name}</h3>
                <span>{activeDoctor.specialization}</span>
              </div>
            </div>
          </div>
          <div className="mt-3 row">
            <span className="fw-bold">Doctor Information</span>
            <span><span className="fw-bold">Med School:</span> {activeDoctor.med_school}</span>
            <span><span className="fw-bold">Consultation Fee Range:</span> {activeDoctor.price_range}</span>
          </div>
          <div className="mt-3 row">
            <span className="fw-bold">Clinic Location</span>
            <span>{activeDoctor.clinic_location}, {activeDoctor.clinic_address}</span>
          </div>
          <div className="mt-3 row">
            <span className="fw-bold">Contact Information</span>
            <span><FontAwesomeIcon icon={faPhoneAlt} /> +63-123-4567</span>
            <span><FontAwesomeIcon icon={faEnvelope} /> email@gmail.com</span>
          </div>
        </ModalBody>
      </Modal>
      
      <div className="row m-0 p-0">
        <div className="col-3 m-0 p-0">
          <div className="sticky-top">
            <div className="container rounded-3 p-3 m-3 text-white" style={{backgroundColor: "#3B4AD0"}}>
              <h5>Symptoms</h5>
              {specialization !== "" &&
              <div>
                Based on your Symptoms, the best specialization to contact is: <span className="fw-bold">{specialization}</span>
              </div>}
              {symptoms.map((symptom, index) => {
                return (
                  <>
                    <div key={index} className='mt-3 fw-bold'>{symptom.symptom.Name}</div>
                    <div>{symptom.location}</div>
                  </>
                )
              })}
            </div>
            <div className="container rounded-3 p-3 m-3 text-white" style={{backgroundColor: "#3B4AD0"}}>
              <h5>Preferences</h5>
              { !editMode ? 
                    <table className="table table-borderless text-white">
                      
                      <tbody>
                        <tr>
                          <th>Doctor Location</th>
                          <td>{preferences.location.act}</td>
                        </tr>
                        <tr>
                          <th>Doctor Age</th>
                          <td>{preferences.age.act}</td>
                        </tr>
                        <tr>
                          <th>Doctor Experience</th>
                          <td>{preferences.experience.act}</td>
                        </tr>
                        <tr>
                          <th>Consultation Fee</th>
                          <td>{preferences.price.act}</td>
                        </tr>
                        <tr>
                          <th>Doctor Sex</th>
                          <td>{preferences.gender.act}</td>
                        </tr>
                      </tbody>
                    </table> 
                    :
                    <table className="table table-borderless text-white">
                      <tbody>
                        <tr>
                          <th>Doctor Location</th>
                          <td>
                            <select className="form-select" onChange={onSelectChange} id="location">
                              {
                                Options.locations.map((obj) => {
                                  return (
                                    <option value={obj.val}>{obj.act}</option>
                                  )
                                })
                              }
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <th>Doctor Age</th>
                          <td>
                            <select className="form-select" onChange={onSelectChange} id="age">
                              {
                                Options.ages.map((obj) => {
                                  return (
                                    <option value={obj.val}>{obj.act}</option>
                                  )
                                })
                              }
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <th>Doctor Experience</th>
                          <td>
                            <select className="form-select" onChange={onSelectChange} id="experience">
                              {
                                Options.experiences.map((obj) => {
                                  return (
                                    <option value={obj.val}>{obj.act}</option>
                                  )
                                })
                              }
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <th>Doctor Fee</th>
                          <td>
                            <select className="form-select" onChange={onSelectChange} id="price">
                              {
                                Options.prices.map((obj) => {
                                  return (
                                    <option value={obj.val}>{obj.act}</option>
                                  )
                                })
                              }
                            </select>
                          </td>
                        </tr>
                        <tr>
                          <th>Doctor Sex</th>
                          <td>
                            <select className="form-select" onChange={onSelectChange} id="gender">
                              {
                                Options.genders.map((obj) => {
                                  return (
                                    <option value={obj.val}>{obj.act}</option>
                                  )
                                })
                              }
                            </select>
                          </td>
                        </tr>
                      </tbody>
                    </table> 
                }
              { !editMode ? 
                <div class="d-flex flex-row-reverse bd-highlight">
                  <button className="btn btn-secondary" onClick={() => {setEditMode(!editMode)}}>Edit</button>
                </div>
                :
                <div class="d-flex flex-row-reverse bd-highlight">
                  <button className="btn btn-secondary mx-1" onClick={() => {setEditMode(!editMode)}}>Cancel</button>
                  <button className="btn btn-secondary mx-1" onClick={getNewDoctors}>Save</button>
                </div>
              }
              
            </div>
          </div>
        </div>
        {loaded ? 
        <div className="col-9 m-0 p-0">
          { noDoctors ? 
          <div className="container mt-3">
            <div className="row">
              <div className="col-6 d-flex align-items-center">
                <input type="text" className="form-control" placeholder="Search Doctors" aria-label="doctors"/>
              </div>
              <div className="col-6 d-flex justify-content-around align-items-center">
                <button type="button" className={selectSort("Location")} style={{maxHeight: '40px'}} onClick={sortLocationally}>Location</button>
                <button type="button" className={selectSort("Alphabetically")} style={{maxHeight: '40px'}} onClick={sortAlphabetically}>Alphabetically (A-Z)</button>
                {/* <button type="button" class="btn btn-outline-secondary">Alphabetically (Z-A)</button> */}
                <span className='' style={{fontWeight: 'bolder'}}>Sort Results by</span>
              </div>
            </div>

            <div className="d-flex align-items-center mt-3">
              <span>
                <h5 className='me-3'>Legend</h5>
              </span>
              <span className='me-3'><span class="badge bg-primary">1st</span> - All preferences and best specialization match</span>
              <span className='me-3'><span class="badge bg-primary">2nd</span> - Only specialization and location preference matched</span>
            </div>
            

            <div id="doctor-container" className='mt-4'>
              <h3 className='mb-3'>Doctors that matches all your preferences and best specialization</h3>
              {
                // SAMPLE DOCTOR
                // clinic_address: "Manila City"
                // clinic_location: "Manila Doctors Hospital"
                // med_school: "UERM"
                // name: "Giovanni Bocanegra"
                // price_range: "100-500"
                // sex: "Male"
                // specialization: "Cardiology"
                doctors1.map((doctor, index) => {
                  return(
                    <div className="row mb-2 cursor-pointer hover-effect-grey rounded-3" key={index} onClick={() => showDoctorInfo(doctor)}>
                      <div className="col-1">
                        <img src={doctor.sex === "Male" ? DoctorMale : DoctorFemale} alt="doctor_pic" style={{width: '50px'}}/>
                      </div>
                      <div className='col-4 ps-4'><span className="d-flex h-100 align-items-center">Dr. {doctor.name}<span class="badge bg-primary ms-2">{doctor.isFirst ? "1st" : "2nd"}</span> </span></div>
                      <div className='col-3'><span className="d-flex h-100 align-items-center">{doctor.specialization}</span></div>
                      <div className='col-4'><span className="d-flex h-100 align-items-center float-end">{doctor.clinic_address}</span></div>
                    </div>
                  )
                })
              }
            </div>
            <div id="doctor-container" className='mt-4'>
              <h3 className='mb-3'>Doctors that matches your location preference and best specialization</h3>
              {
                // SAMPLE DOCTOR
                // clinic_address: "Manila City"
                // clinic_location: "Manila Doctors Hospital"
                // med_school: "UERM"
                // name: "Giovanni Bocanegra"
                // price_range: "100-500"
                // sex: "Male"
                // specialization: "Cardiology"
                doctors2.map((doctor) => {
                  return(
                    <>
                      <div className="row mb-2 cursor-pointer hover-effect-grey rounded-3" onClick={() => showDoctorInfo(doctor)}>
                        <div className="col-1">
                          <img src={doctor.sex === "Male" ? DoctorMale : DoctorFemale} alt="doctor_pic" style={{width: '50px'}}/>
                        </div>
                        <div className='col-4 ps-4'><span className="d-flex h-100 align-items-center">Dr. {doctor.name}<span class="badge bg-primary ms-2">{doctor.isFirst ? "1st" : "2nd"}</span> </span></div>
                        <div className='col-3'><span className="d-flex h-100 align-items-center">{doctor.specialization}</span></div>
                        <div className='col-4'><span className="d-flex h-100 align-items-center float-end">{doctor.clinic_address}</span></div>
                      </div>
                    </>
                  )
                })
              }
            </div>
            <div id="doctor-container" className='mt-4'>
              <h3 className='mb-3'>Doctors based on best specialization only</h3>
              {
                // SAMPLE DOCTOR
                // clinic_address: "Manila City"
                // clinic_location: "Manila Doctors Hospital"
                // med_school: "UERM"
                // name: "Giovanni Bocanegra"
                // price_range: "100-500"
                // sex: "Male"
                // specialization: "Cardiology"
                showMore ?
                specDoctors.map((doctor, index) => {
                  return(
                      <div className="row mb-2 cursor-pointer hover-effect-grey rounded-3" key={index} onClick={() => showDoctorInfo(doctor)}>
                        <div className="col-1">
                          <img src={doctor.sex === "Male" ? DoctorMale : DoctorFemale} alt="doctor_pic" style={{width: '50px'}}/>
                        </div>
                        <div className='col-4 ps-4'><span className="d-flex h-100 align-items-center">Dr. {doctor.name}</span></div>
                        <div className='col-3'><span className="d-flex h-100 align-items-center">{doctor.specialization}</span></div>
                        <div className='col-4'><span className="d-flex h-100 align-items-center float-end">{doctor.clinic_address}</span></div>
                      </div>
                  )
                }) :
                <button className="btn btn-primary" onClick={() => {setShowMore(true)}}>Show doctors</button>
              }
            </div>
          </div>
          :
          <div className="mx-5 my-5">
            <h3>We couldn't find any {specialization} doctors in our database.</h3>
          </div> 
          }
        </div> 
        :
        <div className="col-9 m-0 min-vh-100 d-flex flex-column justify-content-center align-items-center">
            <h2>Finding you doctors...</h2>
            <Rings
              height='200'
              width='200' 
              color="blue"
              ariaLabel="loading"
            />
        </div>
        }
      </div>
    </>
  )
}

export default Doctors
