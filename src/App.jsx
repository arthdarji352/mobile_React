import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactList from "./components/ContactList";
import ContactInfo from "./components/ContactInfo";

import { BrowserRouter, Routes, Route } from "react-router-dom";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ContactList />} />
        <Route path="/info" element={<ContactInfo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
