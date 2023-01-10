import './home.scss';
import HomeCenzor from './HomeCenzor/HomeCenzor';
import HomeTaskList from './HomeTaskList/HomeTaskList';
import HomeUserList from './HomeUserList/HomeUserList';

const Home = () => {
    return(
        <div className='home'>
            <HomeCenzor/>
            <HomeUserList/>
            <HomeTaskList/>
        </div>
    )
};

export default Home;