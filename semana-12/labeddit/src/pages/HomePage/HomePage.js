import React, { useEffect } from 'react';
// import useProtectedPage from '../../hooks/useProtectedPage';
import { useGetAllPosts } from '../../requests/ShowContent';
import { createPost } from '../../requests/CreateContent';
import useInputData from '../../hooks/useInputData';
import ItemCard from '../../components/Card/Card';
import { Header } from '../../components/Header/Header';
import { goToLoginPage } from '../../constants/Cordinator';
import './homepage.scss';
import { useHistory } from 'react-router-dom';

function HomePage() {
    const history = useHistory();
    const [allPosts, getPosts] = useGetAllPosts([]);
    const { data, onChange, clear } = useInputData({ title: "", body: "" });

    const sendPost = (event) => {
        event.preventDefault();
        createPost(data, getPosts);
        clear();
    }
    useEffect(() => {
        if(!localStorage.getItem("token")) {
            goToLoginPage(history)
        }

    }, [])
    return (
        <div id="homePageContainer">
            <Header sendPost={sendPost} onChange={onChange} data={data} />
            {allPosts ? allPosts.map((post) => {
                const { id } = post
                return (
                    <div key={id}>
                        <ItemCard post={post} />
                    </div>
                )
            }) : <p>Carregando</p>
            }
        </div>
    )
};
export default HomePage;
