import React from 'react';
import { useHistory, useParams } from 'react-router';
import { goToListTrips, goToAdminPage } from '../coordinator';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

function HomePage() {
    const history = useHistory();
    const params = useParams();
    return (
        <div>
            <div>
                <Header />
                <h1>Oi, eu sou a HomePage</h1>
                <button onClick={() => goToListTrips(history)}>Viagens</button>
                <button onCLick={() => goToAdminPage(history)}>Área de Admin</button>
                <Footer />
            </div>

        </div >
    );
};
export default HomePage;