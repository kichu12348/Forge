// client/src/App.js
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Lazy load pages for better performance
const HomePage = React.lazy(() => import('./pages/index/page'));
const AboutPage = React.lazy(() => import('./pages/about/page'));
const ContactPage = React.lazy(() => import('./pages/contact/page'));

const App = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default App;

