import React, { useRef } from "react";
import './ContactPage.css';
import emailjs from '@emailjs/browser';
import { Content } from "../content";
import { useNavigate } from "react-router-dom";

const ContactPage = () => {
  const form = useRef();
  let navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_ju4lvmp', 'template_j3ze4i9', form.current, 'FnQyo4rC9bJ_dfXeC')
      .then((result) => {
        console.log(result.text);
        console.log("message sent");
      }, (error) => {
        console.log(error.text);
      });

    emailjs.sendForm('service_ju4lvmp', 'template_bgqriyc', form.current, 'FnQyo4rC9bJ_dfXeC')
      .then((result) => {
        console.log(result.text);
        console.log("message sent");
      }, (error) => {
        console.log(error.text);
      });

    navigate('/');

  };
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/*=============== BOXICONS ===============*/}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
      />

      <main className="main">
        <div style={{ minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '50px' }}>
          <div className="gd" />
          <div className="form-container">
            <form className="form" ref={form} onSubmit={sendEmail}>
              <div className="form-group">
                <label htmlFor="email">Company Name</label>
                <input required="" name="cname" id="email" type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Personal Name</label>
                <input required="" name="name" id="email" type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input required="" name="email" id="email" type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Contact No.</label>
                <input required="" name="number" id="email" type="number" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Subject</label>
                <div id="subject">
                  <select className="input" required="" name="subject">
                    <option value="" disabled="" defaultValue='Default Subject'>
                      Select a subject
                    </option>
                    {Object.values(Content).map((opt) =>
                    (
                      opt.services.map((o) => (<option value={o.title}>{o.title}</option>))
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="textarea">How Can We Help You?</label>
                <textarea
                  required=""
                  cols={50}
                  rows={10}
                  id="textarea"
                  name="message"
                  defaultValue={""}
                />
              </div>
              <div>
                <label class="material-checkbox">
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                  Click to agree to GDCS Pvt. Ltd. <a href="/terms & codition">Terms & Conditions</a>
                </label>
                <label class="material-checkbox">
                  <input type="checkbox" />
                  <span class="checkmark"></span>
                  Click to agree to GDCS Pvt. Ltd. <a href="/privacy-policy">Privacy Policy </a>
                </label>
              </div>
              <button type="submit" className="form-submit-btn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default ContactPage;
