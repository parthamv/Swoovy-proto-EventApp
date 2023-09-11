// Importing necessary React and router libraries
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Importing layout and components
import { ProLayout } from '@ant-design/pro-layout';
import EventsPage from './pages/EventsPage';
import HomePage from './pages/HomePage';
import EventFooter from './components/Footer';

function App() {
    // Data for the menu items in the ProLayout
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
        // Additional routes can be added in the future
    ];

    return (
        <Router>
            {/* ProLayout is a layout component from the ant design library */}
            <ProLayout
                title="Events App"  // Set the title of the layout
                navTheme="dark" // Set the theme of the navigation to dark
                menuDataRender={() => menuData} // Render the menu data
                // Custom render function for menu items, wraps each menu item in a Link component for navigation
                menuItemRender={(item, dom) => <Link to={item.path}>{dom}</Link>}
            >
                {/* Define the routes for the application */}
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path="/events" element={<EventsPage />} />
                </Routes>
                {/* Display the custom footer component */}
                <EventFooter/>
            </ProLayout>
        </Router>
    );
}

export default App;
