import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';
import { useGetAllPosts } from '../../requests/ShowContent';
import { createPost } from '../../requests/CreateContent';
import useInputData from '../../hooks/useInputData';
import ItemCard from '../../components/Card/Card';
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
            <form onSubmit={sendPost}>
                <input placeholder="Titulo" value={data.title} onChange={onChange} name="title" />
                <textarea placeholder="Mensagem" value={data.body} onChange={onChange} name="body" />
                <button>Enviar</button>
            </form>

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
