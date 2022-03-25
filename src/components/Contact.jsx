import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
// import { init } from "@emailjs/browser";
// init("i81BV_D3S6NR4TBo0");
import emailjs from "emailjs-com";

export default function Contact() {
  const [name, setName] = React.useState(null);
  const [email, setEmail] = React.useState(null);
  const [comment, setComment] = React.useState(null);

  function sendEmail(e) {
    // console.log(name);
    // console.log(email);
    // console.log(comment);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ohf8kal",
        "template_w2hlgyk",
        e.target,
        "t1DFNgFMC_Q-RGjWg"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="view mb-5 pb-5 mb-sm-0 pb-sm-0 mt-sm-5 pt-sm-5">
      <div className="text-dark exp text-center mx-auto mb-3 mt-4">CONTACT</div>
      <form onSubmit={sendEmail}>
        <div className="d-flex flex-column justify-content-center">
          <div className="col-10 mx-auto d-flex row justify-content-center">
            <TextField
              // required
              className="col-10 col-sm-3 mb-4 mb-sm-0 mx-sm-1"
              id="outlined-required"
              label="Name"
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              // defaultValue="Hello World"
            />
            <TextField
              className="col-10 col-sm-3 mb-4 mb-sm-0 mx-sm-1"
              id="outlined-input"
              label="Email"
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              // autoComplete="current-password"
            />
          </div>
          <div className="com col-10 mx-auto d-flex justify-content-center mt-sm-4">
            <TextField
              // required
              multiline
              rows="5"
              id="outlined-required"
              label="Comments"
              type="text"
              size="large"
              className=" col-sm-6 col-10 mx-auto "
              name="comment"
              // defaultValue="Hello World"
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
        </div>
        <div className="col-12 d-flex justify-content-center">
          <Button
            variant="contained"
            color="success"
            className="p-2 col-2 mt-2"
            size="large"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}
