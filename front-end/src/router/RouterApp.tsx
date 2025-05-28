import { Navigate, Route, Routes } from "react-router";
import { HomePage } from "../components/HomePage/HomePage";
import { IndexPage } from "../components/IndexPage/IndexPage";

export const RouterApp = () => {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/home"></Navigate>}></Route>
      <Route path="/home" element={<HomePage />}></Route>
      <Route path="/index" element={<IndexPage />}></Route>
    </Routes>
  );
};
