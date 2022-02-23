import ServiceLayout from "../../layout/ServiceLayout"
import { Routes, Route } from "react-router-dom"
import ServiceMenu from "../../components/Menus/ServiceMenu"
import Cleaning from "../../components/Services/Cleaning"

import {Container} from "react-bootstrap"
import "./ServiceRequest.css"

const Home = () => {

  return (
    <div>
      <ServiceLayout>
        <div>
            <Container className="mainbox-shadow">
                <ServiceMenu />
                <Routes>
                    <Route path="cleaning" element={<Cleaning />} />
                </Routes>
            </Container>
        </div>
      </ServiceLayout>
    </div>
  )
}

export default Home