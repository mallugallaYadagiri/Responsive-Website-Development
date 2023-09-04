import "./App.css";

import NavBar from "./Components/NavBar";
import Banner from "./Components/Banner";
import TropicalAdventure from "./Components/TropicalAdventure";
import OurDesistinations from "./Components/OurDesistinations";
import DiscountsSection from "./Components/DiscountsSection";
import Registration from "./Components/Registration";
import Testimonials from "./Components/Testimonials";
import StudentSpecial from "./Components/StudentSpecial";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <TropicalAdventure />
      <OurDesistinations />
      <DiscountsSection />
      <Registration />
      <Testimonials />
      <StudentSpecial />
      <Footer />
    </div>
  );
}

export default App;
