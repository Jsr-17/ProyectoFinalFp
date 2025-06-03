import { Navigate, Route, Routes } from "react-router";
import { HomePage } from "../components/HomePage/HomePage";
import { IndexPage } from "../components/IndexPage/IndexPage";
import { Noticias } from "../components/IndexPage/pages/Noticias";
import { IndexComponent } from "../components/IndexPage/pages/IndexComponent";
import { Favoritos } from "../components/IndexPage/pages/Favoritos";

export const RouterApp = () => {
  return (
    <Routes>
      <Route path="/*" element={<Navigate to="/home"></Navigate>}></Route>
      <Route path="/home" element={<HomePage />}></Route>
      <Route path="/index" element={<IndexPage />}>
        <Route index element={<IndexComponent />} />
        <Route path="noticias" element={<Noticias />} />
        <Route path="favoritos" element={<Favoritos />} />
      </Route>
    </Routes>
  );
};
