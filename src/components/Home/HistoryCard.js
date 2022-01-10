import "../../css/Home.css";
import { TiArrowRepeatOutline } from "react-icons/ti";
import { Modal } from "react-bootstrap";
import { useState } from "react";

function HistoryModal(props) {
  const handleOpenDoctorsVersion = () => {
    alert("Opened doctor version");
  };

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
                <th>Doctors</th>
              </tr>
            </thead>
            <tbody>
              <tr>
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
                <td>
                  <strong>Internal Medicine</strong>
                  <ol>
                    <li>Dr. Philip Azcarraga</li>
                    <li>Dr. Junel Cansana</li>
                    <li>Dr. Pe Pe</li>
                  </ol>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="d-block">
                    <ol>
                      <li>10/30/2021</li>
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
                      <li>Heart Attack</li>
                      <li>Dizziness</li>
                      <li>Muscle Ache</li>
                    </ol>
                  </div>
                </td>
                <td>
                  <div className="d-block">
                    <ul style={{ listStyleType: "none" }}>
                      <li>Sex: Female</li>
                      <li>Age Range: 30-35 years old</li>
                      <li>Location: Taguig, Manila</li>
                      <li>Price: PHP 1,500-2000</li>
                      <li>Years in Practice: More than 5</li>
                    </ul>
                  </div>
                </td>
                <td>
                  <strong>Cardiology</strong>
                  <ol>
                    <li>Dr. Rasheed Jamalul</li>
                    <li>Dr. Jolo Cansana</li>
                    <li>Dr. Sean Pe</li>
                  </ol>
                </td>
              </tr>
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
