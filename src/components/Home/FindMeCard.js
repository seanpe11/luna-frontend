import "../../css/Home.css";
import { RiUserSearchLine } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';
import { useCallback } from "react";

function FactCard() {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('/findMe', {replace: true}), [navigate]);

  return (
    <>
      <div class="col-sm-6 p-0 m-0">
        <div class="col-card card ms-2" onClick={handleOnClick}>
          <div class="icon">
            <RiUserSearchLine size="5em" />
          </div>
          <div class="info card-body">
            <h5 class="card-title">Find Me a Doctor</h5>
            <p class="card-text">
              <small class="text-muted">
                Find the perfect doctor for you.
              </small>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FactCard;
