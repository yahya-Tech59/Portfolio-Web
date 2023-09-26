import React from "react";
//import 'materialize-css/dist/css/materialize.min.css';
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BiSolidNotepad } from "react-icons/bi";
import { BiSolidUserBadge } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";
import { ImBook } from "react-icons/im";
import { FaBars } from "react-icons/fa";

export const Navbar = () => {
  return (
    <>
      <nav className="light-blue darken-4">
        <div className="container">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              My Resume
            </Link>
            <Link to="/" data-target="side-nav" className="sidenav-trigger">
              <FaBars />
            </Link>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/">
                  <FaHome /> Home
                </Link>
              </li>
              <li>
                <Link to="/skills">
                  <BiSolidNotepad /> Skills
                </Link>
              </li>
              <li>
                <Link to="/experiences">
                  <BiSolidUserBadge /> Experiences
                </Link>
              </li>
              <li>
                <Link to="/educations">
                  <FaGraduationCap /> Educations
                </Link>
              </li>
              <li>
                <Link to="/portfolios">
                  <ImBook /> Portfolios
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <ul className="sidenav" id="side-nav">
        <li>
          <Link to="/">
            <FaHome /> Home
          </Link>
        </li>
        <li>
          <Link to="/skills">
            <BiSolidNotepad /> Skills
          </Link>
        </li>
        <li>
          <Link to="/experiences">
            <BiSolidUserBadge /> Experiences
          </Link>
        </li>
        <li>
          <Link to="/educations">
            <FaGraduationCap /> Educations
          </Link>
        </li>
        <li>
          <Link to="/portfolios">
            <ImBook /> Portfolios
          </Link>
        </li>
      </ul>
    </>
  );
};
