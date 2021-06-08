import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { BrowserContainer, BrowserAlign } from '../styles/components/browserstyles/BrowserContainer';
import HomePage from './homepage/HomePage';
import ListTripsPage from './client/listTripsPage/ListTripsPage';
import ApplicationFormPage from './client/applicationForm/ApplicationForm';
import ErrorPage from '../pages/error/ErrorPage'
import AdminHomePage from './admin/adminhome/AdminHomePage';

import StarfieldAnimation from 'react-starfield-animation';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

function Routes() {
    const BACKGROUND_URL = "https://transitive-bullshit.github.io/react-starfield-animation/static/media/stars.492b41ed.jpg";
    return (
        <BrowserContainer>

            <StarfieldAnimation style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundImage: `url(${BACKGROUND_URL})`
            }} />

            <BrowserAlign>
                <BrowserRouter>
                    <Switch>
                        {/* Rota Client */}
                        <Route exact path="/">
                            <HomePage />
                        </Route>

                        <Route exact path="/lista-de-viagens">
                            <ListTripsPage />
                        </Route>

                        <Route exact path="/lista-de-viagens/cadastro">
                            <ApplicationFormPage />
                        </Route>

                        <Route exact path="/login">
                            <AdminHomePage />
                        </Route>

                        <Route>
                            <ErrorPage />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </BrowserAlign>

        </BrowserContainer>
    )
}
export default Routes;
