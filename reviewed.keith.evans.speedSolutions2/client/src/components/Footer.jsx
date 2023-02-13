import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

const Footer = () => (
  <div className="row bg-secondary text-white">
    <div className="sect">
      <h4 className="mb-3">Speed Solutions</h4>
      <div>
        Some of the benefits and proceeds from our shows, goes toward helping our communities homeless shelters and youth programs.
      </div>
    </div>

    <div className="sect">
      <h4 className="mb-3">Email us at:</h4>
      <div>
        <NavLink to="https//www.facebook.com" className="border rounded-circle fab fa-facebook-f facebk p-3 lnk" />
        <NavLink to="https//www.twitter.com" className="border rounded-circle fab fa-twitter p-3 lnk" />
        <NavLink to="https//www.instagram.com" className="border rounded-circle fab fa-instagram p-3 lnk" />
        <NavLink to="https//www.linkedin.com" className="border rounded-circle fab fa-linkedin p-3 lnk" />
      </div>
    </div>

    <div className="sect">
      <div className="mb-3">Stop and See our rides at:</div>
      <div className="">Speed Solutions</div>
      <div>1911 US Hwy 31</div>
      <div className="mb-5">Seymour, IN., 47274</div>
    </div>

    <div className="col-12 text-center bg-dark mt-4 py-4">
      Copyright &copy; &nbsp;
      <i>Speed Solutions</i>
      &nbsp;
      2020
    </div>
  </div>

);

export default Footer;

// col-12 col-lg-4 text-center mt-5
