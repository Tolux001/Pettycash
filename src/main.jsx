import React from "react";
import ReactDOM from "react-dom/client";
import HeroSection from "./component/hero-section";
import About from "./component/about";
import LoanSection from "./component/loan-section";
import Employeeloan from "./component/employee-loan";
import Footer from "./component/footer";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const App = () => {
  return (
    <>
      <HeroSection />
      <main className="main-container">
        <About />
        <LoanSection />
        <Employeeloan />
      </main>
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
