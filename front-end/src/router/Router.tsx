import { Route, Routes } from "react-router";
import { RouterApp } from "./RouterApp";
import { RouterAuth } from "./RouterAuth";

export const Router = () => {
  return (
    <Routes>
      <Route path={"auth/*"} element={<RouterAuth></RouterAuth>}></Route>
      <Route path="*" element={<RouterApp></RouterApp>}></Route>
    </Routes>
  );
};
