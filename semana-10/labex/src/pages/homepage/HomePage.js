import React from 'react';
import { useHistory, useParams } from 'react-router';
import { goToListTrips } from '../coordinator';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

function HomePage() {
    const history = useHistory();
    const params = useParams();
    return (
        <div>
            <Header />
            <h1>Oi, eu sou a HomePage</h1>
            <button onClick={() => goToListTrips(history)}>ir para lista</button>
            <Footer />
        </div>
    );
};
export default HomePage;