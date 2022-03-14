import React from 'react';

import Banner from '../banner/Banner';
import Gallary from '../gallary/Gallary';
import Contact from '../contact/Contact';
import Menu from '../menu/Menu';
import Details from '../details/Details';
import Reservation from '../reservation/Reservation';
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Details></Details>
            <Menu></Menu>
            <Gallary></Gallary>
            <Reservation></Reservation>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;