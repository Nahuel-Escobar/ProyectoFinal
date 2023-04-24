import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Routers from "../../routers/Routers"
import Home from "../../pages/Home"

function Layout() {
  return <>
    <Header/>
    <div>
        <Routers/>
    </div>
    <Footer/>
  </>
}

export default Layout