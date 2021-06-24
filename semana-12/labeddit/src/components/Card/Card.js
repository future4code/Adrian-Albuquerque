import React from 'react';
import { CardContainer } from './styled';
import { useGetPostComments } from '../../requests/ShowContent';
import {CreateCommentary} from '../CreateCommentary/CreateCommentary';
function Card({ post }) {
    const { id, title, commentCount, userId, createdAt, userVote, voteSum, username } = post;
    const [allComments, getPost] = useGetPostComments(id, [])

    return (
        <CardContainer key={id}>
            <p>{username}</p>
            <p>{post.body}</p>
            <p>{title}</p>
            <p>{userVote}</p>
            <p>{commentCount}</p>
            <p>{voteSum}</p>
            <p>Comentarios</p>
            {allComments && allComments.body ?
                <div>
                    teste
                    <p>{allComments.body}</p>
                    <CreateCommentary id={id} getPost={getPost} />
                </div>
                : <h2>Não há comentários</h2>}
        </CardContainer>
    );
};
export default Card;
