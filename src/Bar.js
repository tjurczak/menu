import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import Notifications from 'material-ui-icons/Notifications';
import Link from 'react-router-dom/Link';

const styles = {
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {

    },
    link: {
        color: 'inherit'
    },
};

function Bar(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar position="fixed" color="primary">
                <Toolbar disableGutters={true}>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        {props.back ? (
                            <Link className={classes.link} to="/details"><ArrowBackIcon /></Link>
                        ) : (
                            <Link className={classes.link} to="/"><MenuIcon /></Link>
                        )}

                    </IconButton>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        Mleczarnia
                    </Typography>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <Notifications />
                    </IconButton>

                </Toolbar>
            </AppBar>
        </div>
    );
}

Bar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Bar);