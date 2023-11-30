import {
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";

import About from "./components/About";
import JobOffers from "./components/JobOffers";
import Certificates from "./components/Certificates";
import Contacts from "./components/Contacts";
import Layout from "./layouts/Layout";
import "./styles/App.scss"
function App() {


  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route path="about" element={<About />} />
          <Route path="jobOffers" element={<JobOffers />} />
          <Route path="certificates" element={<Certificates />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App
