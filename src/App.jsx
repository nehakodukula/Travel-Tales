import "./App.css";
import DesType from "./components/DesType";
import Discount from "./components/Discount";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Packages from "./components/Packages";
import Part1 from "./components/Part1";
import Part2 from "./components/Part2";
import Places from "./components/Places";
import Seasonal from "./components/Seasonal";
import UploadImg from "./components/UploadImg";

function App() {
  return (
    <div>
      <Navbar />
      <Part1 />
      <Places />
      <DesType />
      <Part2 />
      <Packages />
      <Offers />
      <Discount />
      <Seasonal />
      <UploadImg />
      <Footer />
    </div>
  );
}

export default App;
