import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './main.scss';
import Works from './Works/Works';

const Main = () => {
    return(
        <div className='main'>
            <Header/>
            <Works/>
            <Footer/>
        </div>
    )
};

export default Main;