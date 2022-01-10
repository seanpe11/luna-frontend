import Header from "../components/Header.js";
import HomeContent from "../components/Home/HomeContent.js";

function Home() {
  return (
    <div>
      <Header />
      <div className="container">
        <HomeContent />
      </div>
    </div>
  );
}

export default Home;
