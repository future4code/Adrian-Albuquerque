import React from 'react';
import { CardContainer } from './styled';
import { useGetPostComments } from '../../requests/ShowContent';
function Card({ post }) {
    const { id, body, title, commentCount, userId, createdAt, userVote, voteSum } = post;
    const [commentary] = useGetPostComments(id, [])
console.log(commentary)

    return (
        <CardContainer key={id}>
            <p>{body}</p>
            <p>{title}</p>
            <p>{userVote}</p>
            <p>{commentCount}</p>
            <p>{voteSum}</p>
            <p>Comentarios</p>
            {commentary && commentary.body ?
                <div>
                    <p>{commentary.body}</p>
                </div>
                : <h2>Não há comentários</h2>}


        </CardContainer>

    );
};
export default Card;
