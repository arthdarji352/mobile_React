import React from "react";
import { Form } from "react-bootstrap";
import SearchIcon from "../assets/search.svg";
import ContactCard from "./ContactCard";
import data from "../../data";

const ContactList = () => {
  return (
    <div className="contact-conaier">
      <h1 className="heading ">My Contacts</h1>
      <div className="pt-3">
        <Form className="d-flex position-relative align-items-center">
          <Form.Control
            type="search"
            placeholder="Search by name or number"
            className="me-2 rounded-3 shadow  ps-5"
            aria-label="Search"
          />

          <img src={SearchIcon} className="position-absolute ms-3 " alt="" />
        </Form>
      </div>
      <h3 className="contactSubHeading mt-4">Recents</h3>
      {data?.recent_contacts?.map((item, i) => {
        return <ContactCard data={item} key={i} />;
      })}
      <h3 className="contactSubHeading mt-4">Contacts</h3>
      <p className="text-end fw-medium">A</p>
      {data?.contacts?.map((item, i) => {
        return <ContactCard data={item} key={i} />;
      })}
    </div>
  );
};

export default ContactList;
