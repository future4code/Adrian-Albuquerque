import React from 'react';
import { useGetPostComments } from '../../requests/ShowContent';
import { CreateCommentary } from '../CreateCommentary/CreateCommentary';
import { Card, CardContent, Avatar, Typography, IconButton, CardActions, Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import CardHeader from '@material-ui/core/CardHeader';
import { useStyles } from '../../hooks/useStyles';
import ThumbUpAltRoundedIcon from '@material-ui/icons/ThumbUpAltRounded';
import ThumbDownAltRoundedIcon from '@material-ui/icons/ThumbDownAltRounded';
import clsx from 'clsx';
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
                    <Typography variant="body1" component="p" className="overFlow">
                        {post.body}
                    </Typography>

                    <div>

                    </div>
                </CardContent>

                <CardActions disableSpacing>
                    <div className="interactionContainer">
                        <div className="reactionIcons">
                            <p>{voteSum || 0}</p>
                            <ThumbUpAltRoundedIcon style={{ margin: "0 5px" }} />
                            <p>{userVote || 0}</p>
                            <ThumbDownAltRoundedIcon style={{ margin: "0 5px" }}/>
                        </div>

                        <div className="commentIcon">
                            <p>Comentário({commentCount ? commentCount : 0})</p>
                            <IconButton
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded,
                                })}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                                style={{ marginLeft: "0", cursor: "pointer" }}
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                        </div>
                    </div>
                </CardActions>

                <Collapse in={expanded} timeout="auto" unmountOnExit >
                    <div className="commentarysContainer" style={{ display: "flex", flexDirection: "column-Reverse" }}>
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
                    </div>
                </Collapse>
                <CreateCommentary id={id} getComments={getComments} />
            </Card>
        </div>
    );
};
export default ItemCard;