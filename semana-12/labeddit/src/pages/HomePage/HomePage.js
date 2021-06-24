import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';
import { useGetAllPosts } from '../../requests/ShowContent';
import { createPost } from '../../requests/CreateContent';
import useInputData from '../../hooks/useInputData';
import ItemCard from '../../components/Card/Card';
import { Header } from '../../components/Header/Header';
import './homepage.scss'

function HomePage() {
    useProtectedPage();
    const [allPosts, getPosts] = useGetAllPosts([]);
    const { data, onChange, clear } = useInputData({ title: "", body: "" });

    const sendPost = (event) => {
        event.preventDefault();
        createPost(data, getPosts);
        clear();
    }
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
