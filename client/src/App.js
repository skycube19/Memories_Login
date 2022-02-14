import React from 'react';
import { Container } from '@material-ui/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home/Home';
import NavBar from './components/Navbar/Navbar';
import Auth from './components/Auth/Auth';

const App = () => {
    return(
        <BrowserRouter>
            <Container maxWidth="lg">
                <NavBar />
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/auth" element={<Auth/>}/>
                    </Routes>
            </Container>
        </BrowserRouter>
    )
    
    
};

export default App;