import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Cenzor from "./Cenzor/Cenzor";
import IDontKnow from "./IDon'tKnow/IDontKnow";
import TaskList from "./TaskList/TaskList";
import UserList from "./UserList/UserList";
import WorksMenu from "./WorksMenu/WorksMenu";

const Works = () => {
    return(
        <div>
            <Routes>
                <Route path="/" element={<IDontKnow/>}></Route>
                <Route path="/home" element={<Home/>}></Route>
                <Route path="/works/cenzor" element={<Cenzor/>}></Route>
                <Route path="/works/userlist" element={<UserList/>}></Route>
                <Route path="/works/tasklist" element={<TaskList/>}></Route>
                <Route path="*" element={<NotFoundPage/>}></Route>
                <Route path="/works" element={<WorksMenu/>}></Route>
            </Routes>
        </div>
    )
};

export default Works;