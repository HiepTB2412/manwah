import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { publicRoutes } from "./routes/route";
import DefaultLayout from "./components/Layout/DefaultLayout";
import Footer from "./components/Footer";
import { Fragment } from "react";

function App() {
  return (
    <BrowserRouter>
      <div style={{ maxWidth: "1300px", marginLeft: "auto", marginRight: "auto", marginTop: "103px" }}>
        <Routes>
          {
            publicRoutes.map((route, index) => {
              const Page = route.component; // chuyen component sang element

              let Layout = DefaultLayout;
              if (route.layout) {
                Layout = route.layout
              } else if (route.layout === null) {
                Layout = Fragment
              }

              return <Route key={index} path={route.path} element={<Layout><Page /></Layout>} />
            })
          }
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
