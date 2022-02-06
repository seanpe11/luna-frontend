import HomeCard from "./HomeCard";
import FindMeCard from "./FindMeCard";
import HistoryCard from "./HistoryCard";

function HomeContent() {
  return (
    <div class="container">
      <HomeCard />
      <div className="row my-5">
        <h1 className="mb-3">About LUNA</h1>
        <p>LUNA is a healthcare website application designed to minimize the cost of patients looking for a doctor that is best suited for them. Some patients do not know which specialization of doctors to consult or which doctors they are more comfortable with. Well, LUNA gives a solution to that problem. It connects patients with doctors in a single platform to provide them with better healthcare services. Join us in making healthcare more accessible to people. </p>
      </div>
      <div className="row pb-5 p-0">
        <h1 className="mb-3">Our Services</h1>
        <HistoryCard />
        <FindMeCard />
      </div>
    </div>
  );
}

export default HomeContent;
