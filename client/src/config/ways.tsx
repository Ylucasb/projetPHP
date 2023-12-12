import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ErrorPage } from "../pages/Error/error";
import { SignUp } from "../components/Auth/SignUp/signUp";

export const Ways = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignUp/>}></Route>
        <Route path="*" element={<ErrorPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
};
