import React from 'react';
import { useHistory } from 'react-router';
import { goToListTrips, goToAdminPage } from '../coordinator';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
function HomePage() {
    document.title = "LabeX | Homepage";
    const history = useHistory();
    return (
        <div>
            <div>
                <Header />
                <h1>Oi, eu sou a HomePage</h1>
                <button onClick={() => goToListTrips(history)}>Viagens</button>
                <button onClick={() => goToAdminPage(history)}>Admin</button>
                <Footer />
            </div>

        </div >
    );
};
export default HomePage;