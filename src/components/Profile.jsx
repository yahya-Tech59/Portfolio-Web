import React from "react";
import { Link } from "react-router-dom";
import ImgProfile from "../images/person1.jpg";
import { HiDotsHorizontal } from "react-icons/hi";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsGoogle } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsPinterest } from "react-icons/bs";
import { AiFillCloseSquare } from "react-icons/ai";

export const Profile = () => {
  return (
    <div>
      <div className="card">
        <div className="card-image">
          <img className="activator" src={ImgProfile} alt="John Doe" />
          <Link className="btn-floating halfway-fab waves-effect waves-light red">
            <HiDotsHorizontal
              style={{
                marginLeft: "7px",
                marginTop: "7px",
                fontSize: "24px",
              }}
            />
          </Link>
        </div>
        <div className="card-content">
          <span className="card-title activator grey-text text-darken-4">
            React Developer
          </span>
          <p>Full Stack Web Developer</p>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">
            <AiFillCloseSquare className="material-icons right" />
            Follow Me
          </span>
          <p
            className="flex-container"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <BsFacebook className=" grey-text text-darken-4 social_style" />
            <AiOutlineTwitter className="grey-text text-darken-4 social_style" />
            <BsGoogle className=" grey-text text-darken-4 social_style" />
            <BsInstagram className="grey-text text-darken-4 social_style" />
            <BsPinterest className="grey-text text-darken-4 social_style" />
          </p>
        </div>
      </div>
    </div>
  );
};
