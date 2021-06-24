import React from 'react';
import useProtectedPage from '../../hooks/useProtectedPage';
import { useGetAllPosts } from '../../requests/ShowContent';
import { createPost } from '../../requests/CreateContent';
import useInputData from '../../hooks/useInputData';
import Card from '../../components/Card/Card';

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
        <div>
            <form onSubmit={sendPost}>
                <input placeholder="Titulo" value={data.title} onChange={onChange} name="title" />
                <textarea placeholder="Mensagem" value={data.body} onChange={onChange} name="body" />
                <button>Enviar</button>
            </form>

            {allPosts ? allPosts.map((post) => {
                const { id } = post
                return (
                    <div key={id}>
                        <Card post={post} />
                    </div>
                )
            }) : <p>Carregando</p>
            }
        </div>
    )
};
export default HomePage;
