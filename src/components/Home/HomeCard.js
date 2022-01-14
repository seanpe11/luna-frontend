import "../../css/Home.css";
import dp from "../../images/profile_pic.png";

function HomeCard() {
  return (
    <div class="home-card text-white mb-3">
      <div class="home-row g-0 d-flex h-100 align-items-center">
        <div class="ms-3">
          <img
            className="rounded-pill"
            src={dp}
            alt="profile pic"
            style={{ width: "200px" }}
          />
        </div>
        <div class="ms-5">
          <div class="card-body" style={{ top: "20%" }}>
            <h5 class="wc card-title ">Welcome,</h5>
            <p class="name card-text ">Jane Doe</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
