import React from 'react';
import { CardContainer } from './styled';
import { useGetPostComments } from '../../requests/ShowContent';
import { CreateCommentary } from '../CreateCommentary/CreateCommentary';
function Card({ post }) {
    const { id, title, commentCount, userId, createdAt, userVote, voteSum, username } = post;
    const [allComments, getComments] = useGetPostComments(id, []);

    return (
        <CardContainer key={id}>
            <p>{username}</p>
            <p>{post.body}</p>
            <p>{title}</p>
            <p>{userVote}</p>
            <p>{commentCount}</p>
            <p>{voteSum}</p>
            <p>Comentarios</p>
            {allComments.map((comment) => {
                const { username, body, id } = comment
                return (
                    <div key={id}>
                        <p>{username}</p>
                        <p>{body}</p>
                    </div>
                )
            })}
            <CreateCommentary id={id} getComments={getComments}/>
        </CardContainer>
    );
};
export default Card;
