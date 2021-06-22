import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';
import { useGetAllPosts } from '../../requests/ShowContent';
import Card from '../../components/Card/Card';

function HomePage() {
    useProtectedPage();
    const getPosts = useGetAllPosts("/posts", []);
    return (
        <div>
            {getPosts ? getPosts.map((post) => {
                const { id } = post
                return (<Card key={id} post={post} />)
            }) : <p>Carregando</p>
            }
        </div >
    )
};
export default HomePage;
