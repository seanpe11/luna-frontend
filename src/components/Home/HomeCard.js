import "../../css/Home.css";
import dp from "../../images/profile_pic.png";

function HomeCard() {
  return (
    <div class="card text-white mb-3">
      <div class="row g-0">
        <div class="col-md-2 d-inline-flex justify-content-center">
          <img
            className="dp m-5 rounded-pill"
            src={dp}
            alt="profile pic"
            style={{ width: "200px" }}
          />
        </div>
        <div class="col-md-10 position-relative">
          <div class="card-body position-absolute " style={{ top: "20%" }}>
            <h5 class="wc card-title ">Welcome,</h5>
            <p class="name card-text ">Jill Doe</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
