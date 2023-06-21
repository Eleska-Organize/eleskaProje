import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Home from "../pages/Home";
import Footer from "../components/footer/Footer";
import Menu from "../pages/Menu";
import About from "../pages/About";
import MultiStepForm from "../components/stepper/MultiStepForm";
import MainAcc from "../components/hesap/MainAcc";
import Orbit from "../components/pizza/Orbit";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <MultiStepForm /> */}
      <MainAcc />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />

        {/* <Header /> */}
        {/* <Menu /> */}
        {/* <Home /> */}
        {/* <Steps /> */}
        {/* <Slider /> */}
        {/* <About /> */}
        {/* <Connect /> */}
      </Routes>
      <Orbit radius={400} />
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;
