import React from "react";
import FadeIn from 'react-fade-in';

import Nav2 from '../components/Nav2';

const vh100 = {
    minHeight: "100vh"
};
const wLg40 = {
    width: "40rem"
};



const Contact = () => {
  return (
    <div 
    className="container">  
      
    <div
    className="d-flex justify-content-center align-items-center flex-column min-vh-100">
      <div class="form-group d-flex flex-column">

      <Nav2/>

      <FadeIn>
      <h1 class="display-4 text-secondary">
          If you have any suggestion <br/>feel free to share with us</h1>

        <textarea
          class="form-control mb-2"
          id="exampleFormControlTextarea1"
          rows="10"
          placeholder="Feel free to write ..."
        ></textarea>

        <div className="d-flex">
        <button type="button ml-auto" class="ml-auto btn btn-primary">Send</button>
        </div>
        </FadeIn>

      </div>
    </div>
    </div>
  );
};

export default Contact;
