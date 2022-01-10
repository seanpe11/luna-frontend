import "../../css/Home.css";
import { TiClipboard } from "react-icons/ti";
import { Modal } from "react-bootstrap";
import { useState } from "react";

function FactModal(props) {
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
          <TiClipboard size="5em" />
        </div>
        <div className="container-fluid">
          <div className="card">
            <div className="fact-cardbody card-body">
              <ol className="fact-list m-5">
                <li>
                  Our eyes can distinguish up to 10 million color surfaces and
                  take in more information than the largest telescope known to
                  man.
                </li>
                <li>We exercise at least 36 muscles when we smile.</li>
                <li>
                  It is believed that the main purpose of eyebrows is to keep
                  sweat away from eyes.
                </li>
              </ol>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

function FactCard() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <div class="col-sm-6 p-0 m-0">
        <div class="col-card card ms-2" onClick={() => setModalShow(true)}>
          <div class="icon">
            <TiClipboard size="5em" />
          </div>
          <div class="info card-body">
            <h5 class="card-title">Medical Facts</h5>
            <p class="card-text">
              <small class="text-muted">
                Learn more about our body with these interesting facts.
              </small>
            </p>
          </div>
        </div>
      </div>
      <FactModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default FactCard;
