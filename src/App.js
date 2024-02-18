import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Qualifications from "./components/Qualifications";
import Service from "./components/Service";
import Testimonial from "./components/Testimonial";
import Slider from "./components/Slider";
import Form from "./components/Form";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Qualifications />
      <Service />
      <Testimonial />
      <Slider />
      <Form/>
      <Footer/>
    </div>
  );
}

export default App;
