import { makeStyles } from '@material-ui/core';
import { red } from '@material-ui/core/colors';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: 500,
        minWidth: 250,
        boxShadow: "0 1px 1px 1px #c1b9b9"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));