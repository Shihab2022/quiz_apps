import React from 'react';
import Card from './Card';
import Footer from './Footer';
import Slider1 from './Slider1';
import Slider2 from './Slider2';

const Home = () => {
    return (
        <div>
            <Slider1/>
            <Slider2/>
            <Card/>
            <Footer/>
        </div>
    );
};

export default Home;