import React from 'react';
import HomePage from './homepage/HomePage';
import ListTripsPage from './client/listTripsPage/ListTripsPage';
import ApplicationFormPage from './client/applicationForm/ApplicationForm';
import ErrorPage from '../pages/error/ErrorPage'
import { Switch, Route, BrowserRouter } from 'react-router-dom';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                {/* Rota Client */}
                <Route exact path="/">
                    <HomePage />
                </Route>

                <Route exact path="/lista-de-viagens">
                    <ListTripsPage />
                </Route>

                {/* <Route>
                    <FormPage />
                </Route> */}
                <Route exact path="/lista-de-viagens/cadastro">
                    <ApplicationFormPage />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;
