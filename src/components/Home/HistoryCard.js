import "../../css/Home.css";
import { TiArrowRepeatOutline } from "react-icons/ti";
import { Modal } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import { pdf, Page, Text, View, Document, StyleSheet, Image, Link } from '@react-pdf/renderer';
import { saveAs } from 'file-saver'
import logo from '../../images/moon-full-moon-icon.png'

function HistoryModal(props) {
  var [history, setHistory] = useState([])

  const handleOpenDoctorsVersion = async (index) => {

    const historyItem = history[index]

    const userData = JSON.parse(sessionStorage.getItem("userData"))
    console.log(userData)

    const styles = StyleSheet.create({
      page: {
        backgroundColor: '#E4E4E4'
      },
      section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
      },
      logo: {
        height: "50pt",
        weight: "50pt",
      },
      header: {
        alignItems: "flex-start"
      },
      text: {
        fontSize: 14,
        textAlign: 'justify',
      },
      heading: {
        marginTop: "1cm"
      }
    });
    
    // Create Document Component
    const MyDocument = () => (
      <Document>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <View style={styles.header}>
              <Image src={logo} style={styles.logo}></Image>
              <Text>LUNA</Text>
              <Text style={styles.text}>Find the best doctors for you.</Text>
            </View>

            <View>
              <Text style={styles.heading}>Patient Details</Text>
              <Text style={styles.text}>Name: {userData.firstName} {userData.lastName}</Text>
              <Text style={styles.text}>Birthdate (mm/dd/yyyy): {userData.birthDate} </Text>
              <Text style={styles.text}>Blood Type: {userData.medInfo.bloodType} </Text>
              <Text style={styles.text}>Height (in cm): {userData.medInfo.heightCm} </Text>
              <Text style={styles.text}>Weight (in kg): {userData.medInfo.weightKg} </Text>
              <Text style={styles.text}>Dietary Restrictions: {userData.medInfo.diet} </Text>
              <Text style={styles.text}>Known Illnesses: {userData.medInfo.illnesses} </Text>
            </View>

            <View>
              <Text style={styles.heading}>Symptoms</Text>
              <Text style={styles.text}>Date Taken: {historyItem.date}</Text>
              <Text style={styles.text}>Symptoms:</Text>
              {
                historyItem.symptoms.map((item) => {
                  return (
                    <>
                      <Text style={styles.text}>- {item.symptom.Name} ({item.location})</Text>
                      <Text style={styles.text}>{item.frequency}</Text>
                      <Text style={styles.text}>{item.details === "" ? "No extra details" : item.details}</Text>
                    </>
                  )
                })
              }
            </View>

            <View>
              <Text style={styles.heading}>Initial Diagnosis Report</Text>
              <Link src="https://apimedic.com/" style={styles.text}>From ApiMedic</Link>
              <Text style={styles.text}>Date Taken: {historyItem.date}</Text>
              {
                historyItem.diagnosis.map((item) => {
                  return (
                    <>
                      <Text style={styles.text}>1. {item.Issue.ProfName}</Text>
                      <Text style={styles.text}>International Classification of Diseases (ICD): {item.Issue.Icd}</Text>
                      <Text style={styles.text}>Accuracy: {item.Issue.Accuracy}%</Text>
                    </>
                  )
                })
              }
            </View>
          </View>
        </Page>
      </Document>
    );

    const doc = <MyDocument />;
    const asPdf = pdf(); // {} is important, throws without an argument
    asPdf.updateContainer(doc);
    const blob = await asPdf.toBlob();
    saveAs(blob, 'document.pdf');
  };

  useEffect(() => {
    getHistory()
  }, [])

  function getHistory() {
    var {email} = JSON.parse(sessionStorage.getItem("userData"))
    return axios.post(
      'https://luna-backend-thesis.herokuapp.com/history',
      {
        email
      }
    ).then((res) => {
      console.log(res.data)
      setHistory(res.data.historyData)
    }).catch(e => {
      console.log('Error lol')
    })
  }

  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div
          className="d-block text-end fs-3"
          style={{ cursor: "pointer" }}
          onClick={props.onHide}
        >
          &times;
        </div>
        <div className="d-block text-center mb-5">
          <TiArrowRepeatOutline size="5em" />
          <h3 class='mt-3'>History</h3>
        </div>
        <div className="container-fluid">
          <table
            className="table table-responsive table-bordered"
            style={{ backgroundColor: "#CDD1F9" }}
          >
            <thead>
              <tr>
                <th>Date (mm/dd/yyyy)</th>
                <th>Symptoms Inputted</th>
                <th>Doctors Preference</th>
              </tr>
            </thead>
            <tbody>
              {/* <tr>
                <td>
                  <div className="d-block">
                    <ol>
                      <li>11/10/2021</li>
                    </ol>
                  </div>
                  <button
                    className="btn btn-info"
                    style={{ backgroundColor: "#fff" }}
                    onClick={() => handleOpenDoctorsVersion()}
                  >
                    OPEN DOCTORS VERSION
                  </button>
                </td>
                <td>
                  <div className="d-block">
                    <ol>
                      <li>Headache</li>
                      <li>Vomitting</li>
                      <li>Nausea</li>
                    </ol>
                    Recommended Specialization: <br />
                    <strong>Internal Medicine</strong>
                  </div>
                </td>
                <td>
                  <div className="d-block">
                    <ul style={{ listStyleType: "none" }}>
                      <li>Sex: Female</li>
                      <li>Age Range: 40-45 years old</li>
                      <li>Location: Metro Manila</li>
                      <li>Price: PHP 500-1000</li>
                      <li>Years in Practice: More than 10</li>
                    </ul>
                  </div>
                </td>
              </tr> */}
              {
                history.map((item, index) => {
                  return(
                    <tr>
                      <td>
                        <div className="d-block">
                          <ol>
                            <li>{item.date}</li>
                          </ol>
                        </div>
                        <button
                          className="btn btn-light"
                          onClick={() => handleOpenDoctorsVersion(index)}
                        >
                          DOWNLOAD DOCTORS VERSION
                        </button>
                      </td>
                      <td>
                        <div className="d-block">
                          <ol>
                            {item.symptoms.map((symptom) => {
                              return(<li>{symptom.symptom.Name}</li>)
                            })}
                          </ol>
                          Recommended Specialization: <br />
                          <strong>{item.diagnosis[0].Specialisation[0].Name}</strong>
                        </div>
                      </td>
                      <td>
                        <div className="d-block">
                          <ul style={{ listStyleType: "none" }}>
                            <li>Sex: {item.preferences.gender.act}</li>
                            <li>Age Range: {item.preferences.age.act}</li>
                            <li>Location: {item.preferences.location.act}</li>
                            <li>Price: {item.preferences.price.act}</li>
                            <li>Years in Practice: {item.preferences.experience.act}</li>
                          </ul>
                        </div>
                      </td>
                    </tr>
                  )}
                )}
            </tbody>
          </table>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function HistoryCard() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div class="col-sm-6 p-0 m-0">
        <div class="col-card card me-2" onClick={() => setModalShow(true)}>
          <div class="icon">
            <TiArrowRepeatOutline size="5em" />
          </div>
          <div class="info card-body">
            <h5 class="card-title">History</h5>
            <p class="card-text">
              <small class="text-muted">
                Previous Find Me a Doctor history within the application will be
                displayed here.
              </small>
            </p>
          </div>
        </div>
      </div>
      <HistoryModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default HistoryCard;
