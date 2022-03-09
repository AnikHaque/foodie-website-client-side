import React from 'react';

import Banner from '../banner/Banner';
import Gallary from '../gallary/Gallary';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import Menu from '../menu/Menu';
import Details from '../details/Details';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Details></Details>
            <Menu></Menu>
            <Gallary></Gallary>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;