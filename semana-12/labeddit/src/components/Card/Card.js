import React from 'react';
import { useGetPostComments } from '../../requests/ShowContent';
import { CreateCommentary } from '../CreateCommentary/CreateCommentary';
import { Card, CardContent, Avatar, Typography, IconButton, CardActions, Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardHeader from '@material-ui/core/CardHeader';
import clsx from 'clsx';
import { useStyles } from '../../hooks/useStyles';
import './card.scss';

function ItemCard({ post }) {
    const { id, title, commentCount, userId, createdAt, userVote, voteSum, username } = post;
    const [allComments, getComments] = useGetPostComments(id, []);
    const classes = useStyles();
    const atualDate = createdAt.split("T")
    const atualTime = atualDate[1].split(".")
    const revertDate = atualDate[0].split("-").reverse()
    const yearPost = `${revertDate[0]}/${revertDate[1]}/${revertDate[2]}, ${atualTime[0]}`
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div id="cardContainer">
            <Card variant="outlined" className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="avatar" className={classes.avatar} />
                    }
                    title={username}
                    subheader={yearPost} />
                <CardContent>
                    <Typography variant="h4" color="textPrimary" component="h1">
                        {title}
                    </Typography>
                    <br />
                    <Typography variant="body1" component="p">
                        <p className="overFlow">{post.body}</p>
                    </Typography>
                    <div>
                        <p>{userVote}</p>
                        <p>{commentCount}</p>
                        <p>{voteSum}</p>
                    </div>
                </CardContent>

                <CardActions disableSpacing>
                    {commentCount ? <p>Comentários({commentCount})</p> : <p>Comentário(0)</p>}
                    <IconButton
                        className={clsx(classes.expand, {
                            [classes.expandOpen]: expanded,
                        })}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </IconButton>
                </CardActions>

                <Collapse in={expanded} timeout="auto" unmountOnExit >
                    {allComments && allComments.map((comment) => {
                        const { username, body, id } = comment
                        return (
                            <div key={id} className="commentaryOnCollapse">
                                <div className="commentaryOnCollapse_Top">
                                    <Avatar aria-label="avatar" className={classes.avatar}>{username[0]}</Avatar>
                                    <p>{username}</p>
                                </div>
                                <p>{body}</p>
                            </div>
                        )
                    })}
                </Collapse>
                <CreateCommentary id={id} getComments={getComments} />
            </Card>
        </div>
    );
};
export default ItemCard;