import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TaskForm from "./components/TaskForm/TaskForm";
import './app.scss';

function App() {
  return (
    <div className="App">
        <Header/>
        <TaskForm/>
        <Footer/>
    </div>
  );
}

export default App;
