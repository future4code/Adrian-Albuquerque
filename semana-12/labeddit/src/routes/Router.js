import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from '../pages/HomePage/HomePage';
import LoginPage from '../pages/LoginPage/LoginPage';
import FeedPage from '../pages/FeedPage/FeedPage';
import PostPage from '../pages/PostPage/PostPage';
import RegisterPage from '../pages/RegisterPage/RegisterPage';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage />
                </Route>

                <Route exact path="/login">
                    <LoginPage />
                </Route>

                <Route exact path="/register">
                    <RegisterPage />
                </Route>

                <Route exact path="/post">
                    <PostPage />
                </Route>

                <Route exact path="/feed">
                    <FeedPage />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};
export default Router;
