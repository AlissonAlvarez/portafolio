import { Routes, Route } from 'react-router-dom';
import HomeLayout from '../layouts/HomeLayout/HomeLayout.jsx';
import Home from '../pages/Home.jsx'

function RoutesApp() {
    return (
        <Routes>
            <Route path='/' element={<HomeLayout />}>
                <Route path='/' element={<Home />} />
            </Route>
        </Routes>
    );
}

export default RoutesApp;