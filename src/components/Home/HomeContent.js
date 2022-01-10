import HomeCard from "./HomeCard";
import FactCard from "./FactCard";
import HistoryCard from "./HistoryCard";

function HomeContent() {
  return (
    <div class="container">
      <HomeCard />
      <div className="row m-0 p-0">
        <HistoryCard />
        <FactCard />
      </div>
    </div>
  );
}

export default HomeContent;
