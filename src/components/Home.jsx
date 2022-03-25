import React, { useState } from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Experience from "./Experience";
import Skills from "./Skills";
import Awards from "./Awards";
import Contact from "./Contact";
import profile from "./alphone.jpeg";

function Home() {
  const [open, setOpen] = useState(false);
  const ColNav = () => {
    return (
      <div
        className="position-absolute bg-white text-dark vw-100 vh-100 "
        style={{ top: "0", left: "0" }}
      >
        <div className="d-flex justify-content-end p-3">
          <CloseIcon onClick={() => setOpen(false)} />
        </div>
        <div className="h-100 col-12 pb-5 d-flex flex-column align-items-center justify-content-evenly">
          <a
            href="#home"
            className="ms-sm-3 ms-0 me-sm-3 me-2 navi d-block mt-2 mb-2 h2"
            onClick={() => setOpen(false)}
          >
            Home
          </a>
          <a
            href="#expo"
            className="ms-sm-3 ms-1 me-sm-3 me-2 navi d-block mb-2 h2"
            onClick={() => setOpen(false)}
          >
            Experience
          </a>
          <a
            href="#skills"
            className="ms-sm-3 ms-1 me-sm-3 me-2 navi d-block mb-2 h2"
            onClick={() => setOpen(false)}
          >
            Skills
          </a>
          <a
            href="#awards"
            className="ms-sm-3 ms-1 me-sm-3 me-2 navi d-block mb-2 h2"
            onClick={() => setOpen(false)}
          >
            Awards
          </a>
          <a
            href="#contact"
            className="ms-sm-3 ms-1 me-sm-3 mb-2 me-2 navi d-block h2"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="bg-danger text-white h5 p-3 position-fixed w-100 navib">
        <div className="d-none d-sm-block">
          <a href="#home" className="ms-sm-3 ms-0 me-sm-3 me-2 navi">
            Home
          </a>
          <a href="#expo" className="ms-sm-3 ms-1 me-sm-3 me-2 navi">
            Experience
          </a>
          <a href="#skills" className="ms-sm-3 ms-1 me-sm-3 me-2 navi">
            Skills
          </a>
          <a href="#awards" className="ms-sm-3 ms-1 me-sm-3 me-2 navi">
            Awards
          </a>
          <a href="#contact" className="ms-sm-3 ms-1 me-sm-3 me-2 navi">
            Contact
          </a>
        </div>
        <div className="d-sm-none d-flex justify-content-between align-items-center">
          <div style={{ fontsize: 30 }}>Alphone Chretien</div>
          {open && <ColNav />}
          <MenuIcon
            onClick={() => {
              setOpen(true);
              console.log(open);
            }}
          />
        </div>
      </div>
      <section
        id="home"
        className="py-3 px-5 w-100 d-md-flex justify-content-center align-items-center m-0"
      >
        <div className="col-sm-5 p-3 d-flex align-justify-center mt-sm-0 mt-4">
          <img
            className="text-white h2 rounded-circle mt-5 img1 mx-auto my-auto"
            height="400px"
            width="400px"
            src={profile}
          />
        </div>
        <div className="col-sm-6 py-3 px-sm-3 mt-sm-5 pt-sm-5 ">
          <div
            className="text-dark name p-0 fw-600  text-center"
            style={{ marginBottom: "-20px", marginTop: "-30px" }}
          >
            Alphone
          </div>
          <div
            className="text-dark name text-center text-sm-left fw-600"
            style={{ marginTop: "-35px" }}
          >
            Chretien
          </div>
          <div className="text-dark h5 my-4 ms-3">Continental Chef.</div>
          <div className=" my-4 ms-sm-3 ms-1 col-12">
            I believe in producing results and want to raise high in my
            profession. I am Interested in Joining a company that can provide
            me, with challenging career opportunities and can honor the best of
            my creativity and intelligence.
          </div>

          <a href="https://www.facebook.com/alphonse.cristien" target="_blank">
            <FacebookIcon
              className="mt-3 mx-sm-3 mx-2 icon"
              style={{ color: "blue" }}
            />
          </a>
          <a href="https://www.instagram.com/alphonsegillu/" target="_blank">
            <InstagramIcon className="mt-3 mx-sm-3 mx-2 icon insta" />
          </a>
          <a
            href="https://api.whatsapp.com/send/?phone=96555540323&text&app_absent=0"
            target="_blank"
          >
            <WhatsAppIcon
              className="mt-3 mx-sm-3 mx-2 icon"
              style={{ color: "green" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/alphonse-chretien-192243206"
            target="_blank"
          >
            <LinkedInIcon
              className="mt-3 mx-sm-3 mx-2 icon"
              style={{ color: "#0e76a8" }}
            />
          </a>
        </div>
      </section>
      <section id="expo" className="pt-4 pt-sm-0">
        <Experience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="awards">
        <Awards />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default Home;
