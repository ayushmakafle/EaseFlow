import React from 'react';
import "./App.css";
import {BrowserRouter, Routes,Route} from "react-router-dom"; 
import {LoginPage,SignUpPage, GynecologistLoginPage, GynecologistSignUpPage} from "./Routes.js";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/gynecologist-login" element={<GynecologistLoginPage />} />
        <Route path="/gynecologist-sign-up" element={<GynecologistSignUpPage />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
