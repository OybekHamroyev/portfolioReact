import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            marginTop: theme.spacing(2),
        },
    },
}));


export default function BasicPagination({todos , setPage , page}) {

    function handleChange(e , val){
        setPage(val)
    }

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Pagination page={page} onChange={handleChange} count={todos.length} color="primary" />
        </div>
    );
}