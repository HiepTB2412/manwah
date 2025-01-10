import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Header from './components/Header'
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Sale from "./pages/Sale";
import SetTable from "./pages/SetTable";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div style={{ maxWidth: "1300px", marginLeft: "auto", marginRight: "auto", marginTop: "103px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/set-table" element={<SetTable />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
