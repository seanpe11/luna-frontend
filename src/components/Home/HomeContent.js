import HomeCard from "./HomeCard";
import FindMeCard from "./FindMeCard";
import HistoryCard from "./HistoryCard";

function HomeContent() {
  return (
    <div class="container">
      <HomeCard />
      <div className="row m-0 p-0">
        <HistoryCard />
        <FindMeCard />
      </div>
    </div>
  );
}

export default HomeContent;
