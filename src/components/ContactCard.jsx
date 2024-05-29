import React from "react";
import menuIcon from "../assets/menu.svg";
import { useNavigate } from "react-router-dom";

const ContactCard = (props) => {
  //   console.log(props.data);
  const { name, phone_number, image_url } = props.data;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/info", { state: props.data });
  };
  return (
    <div className="d-flex justify-content-between align-items-center border-bottom py-3">
      <div
        className="d-flex align-items-center cursor-pointer"
        onClick={handleClick}
      >
        <img src={image_url} alt="" />
        <div className="ms-2">
          <p className="mb-0 fw-bold">{name}</p>
          <p className="mb-0 text-gray">{phone_number}</p>
        </div>
      </div>

      <div>
        <img src={menuIcon} alt="" />
      </div>
    </div>
  );
};

export default ContactCard;
