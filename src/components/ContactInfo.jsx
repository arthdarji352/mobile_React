import React from "react";
import leftArr from "../assets/leftArr.svg";
import menuIcon from "../assets/menu.svg";
import profilePic from "../assets/Ellipse 1.png";
import msg from "../assets/msg.svg";
import call from "../assets/call.svg";
import text from "../assets/text.svg";
import telegram from "../assets/telegram.svg";
import whatsapp from "../assets/whatsapp.svg";
import { useLocation, useNavigate } from "react-router-dom";

const ContactInfo = () => {
  const { state } = useLocation();
  // console.log(state);
  const { name, phone_number, image_url } = state;
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };
  return (
    <div className="contact-conaier px-0 ">
      <div className="px-4">
        <div className="d-flex justify-content-between align-items-center ">
          <img
            src={leftArr}
            alt=""
            onClick={handleBack}
            className="cursor-pointer"
          />
          <h1 className="fw-normal">Contacts</h1>
          <img src={menuIcon} alt="" />
        </div>
        <div className="text-center mt-2">
          <img src={image_url} alt="" height={"100px"} />
          <p className="mb-0 mt-2 fs-5 fw-medium">{name}</p>
          <p className="mb-0">Accra, Ghana</p>
        </div>
      </div>
      <div className="contactDetails mt-4 contactBorder">
        <div className="d-flex justify-content-between align-items-center  py-3">
          <div className="d-flex align-items-center">
            <div className="ms-4">
              <p className="mb-0 fw-bold">{name}</p>
              <p className="mb-0 text-gray">{phone_number}</p>
            </div>
          </div>
          <div className="me-4">
            <img src={msg} alt="" />
            <img src={call} alt="" />
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center  py-3">
          <div className="d-flex align-items-center">
            <div className="ms-4">
              <p className="mb-0 fw-bold">Email</p>
              <p className="mb-0 text-gray">slance@gmail.com</p>
            </div>
          </div>
          <div className="me-4">
            <img src={text} alt="" />
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center  py-3">
          <div className="d-flex align-items-center">
            <div className="ms-4">
              <p className="mb-0 fw-bold">Groups</p>
              <p className="mb-0 text-gray">UI Friends</p>
            </div>
          </div>
        </div>
        <div className="py-3 bg-white d-flex justify-content-start ">
          <p className="ms-4 mb-0 fw-medium fs-5 ">Account Linked</p>
        </div>
        <div className="d-flex justify-content-between align-items-center  py-3 contactBorder ">
          <div className="d-flex align-items-center">
            <div className="ms-4">
              <p className="mb-0 fw-bold">Telegram</p>
            </div>
          </div>
          <div className="me-4">
            <img src={telegram} alt="" />
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center  py-3  ">
          <div className="d-flex align-items-center">
            <div className="ms-4">
              <p className="mb-0 fw-bold">WhatsApp</p>
            </div>
          </div>
          <div className="me-4">
            <img src={whatsapp} alt="" />
          </div>
        </div>
        <div className="py-3 bg-white d-flex justify-content-start ">
          <p className="ms-4 mb-0 fw-medium fs-5 ">More Options</p>
        </div>
        <div className="d-flex justify-content-between align-items-center  py-3 contactBorder ">
          <div className="d-flex align-items-center">
            <div className="ms-4">
              <p className="mb-0 fw-bold">Share Contact</p>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between align-items-center  py-3  ">
          <div className="d-flex align-items-center">
            <div className="ms-4">
              <p className="mb-0 fw-bold">QR Code</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
