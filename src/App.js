import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ProLayout } from '@ant-design/pro-layout';
import EventsPage from './pages/EventsPage';
import HomePage from './pages/HomePage';
import EventFooter from './components/Footer';

function App() {
    const menuData = [
       {
        path: '/',
        name: 'Home',
        icon: 'home',
        },
        {
            path: '/events',
            name: 'Events',
            icon: 'calendar',
        },
        // Add more routes as needed
    ];

    return (
        <Router>
            <ProLayout
                title="Events App"  
                navTheme="dark"
                menuDataRender={() => menuData}
                menuItemRender={(item, dom) => <Link to={item.path}>{dom}</Link>}
            >
                <Routes>
                  <Route path='/' element={<HomePage />}/>
                    <Route path="/events" element={<EventsPage />} />
                    
                </Routes>
                <EventFooter/>
            </ProLayout>
        </Router>
    );
}

export default App;
