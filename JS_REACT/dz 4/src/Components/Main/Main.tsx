import Header from "../Header/Header";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./NotFaundPage/NotFoyndPage";
import { Home } from "./Home/Home";
import Footer from "../Footer/Footer";
import TicketsForm from "./TicketsForm/TicketsForm";
import BetForm from "./BetForm/BetForm";

const Main = () => {

    return(
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/sports" element={<BetForm/>}></Route>
                <Route path="/tickets" element={<TicketsForm/>}></Route>
                <Route path="*" element={<NotFoundPage/>}></Route>
            </Routes>
            <Footer/>
        </div>
    )
};

export default Main;