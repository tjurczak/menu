import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText, ListItemIcon, ListItemSecondaryAction } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ImageIcon from 'material-ui-icons/Image';
import BeachAccessIcon from 'material-ui-icons/BeachAccess';
import Typography from 'material-ui/Typography';
import Modal from 'material-ui/Modal';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        marginTop: '5px',
    },
    img: {
        height: '60px',
        maxWidth: '60px',
    },
    zl: {
        fontSize: '1.1em',
        paddingRight: '8px',
    },
    zlt: {
        fontSize: '0.8em',
        verticalAlign: 'top',
        color: 'gray',
    },
    paper: {
        position: 'absolute',
        height: '100%',
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing.unit * 4,
    },
});


class FoodList extends React.Component {

    handleChange = (event, value) => {
        //window.location.href='/product';
        //this.setState({ open: true });
        this.setState({ redirect: true });
    };

    state = {
        open: false,
        redirect: false,
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    render() {
        const { classes } = this.props;
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/product'/>;
        }

        return (
            <div className={classes.root}>
                <List disablePadding>
                    <ListItem button onClick={this.handleChange}>

                        <img src="/static/piwo-339101-article.jpg" className={classes.img} />
                        <ListItemText primary="Warka" secondary="Delikatnie słodkie / ciemne "  />
                        <ListItemSecondaryAction className={classes.zl}>
                            13.00
                        </ListItemSecondaryAction>
                        <Modal hideBackdrop={false}
                            aria-labelledby="simple-modal-title"
                            aria-describedby="simple-modal-description"
                            open={this.state.open}
                            onClose={this.handleClose}
                        >
                            <div className={classes.paper}>
                                <Typography variant="title" id="modal-title">
                                    Text in a modal
                                </Typography>
                                <Typography variant="subheading" id="simple-modal-description">
                                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                                </Typography>
                            </div>
                        </Modal>
                    </ListItem>
                    <ListItem button onClick={this.handleChange}>
                        <img src="/static/piwo-339101-article.jpg" className={classes.img} />
                        <ListItemText primary="Piast 0.5" secondary="Morelowo śmietankowe " />
                        <ListItemSecondaryAction className={classes.zl}>
                            7.00
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem button onClick={this.handleChange}>
                        <img src="/static/piwo-339101-article.jpg" className={classes.img} />
                        <ListItemText primary="Lubelskie jasne" secondary="Delikatnie słodkie / ciemne " />
                        <ListItemSecondaryAction className={classes.zl}>
                            7.50
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem button onClick={this.handleChange}>
                        <img src="/static/piwo-339101-article.jpg" className={classes.img} />
                        <ListItemText primary="Warka" secondary="Jasne ważone " />
                        <ListItemSecondaryAction className={classes.zl}>
                            2,89
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                        <img src="/static/piwo-339101-article.jpg" className={classes.img} />
                        <ListItemText primary="Heineken" secondary="Delikatnie słodkie  " />
                        <ListItemSecondaryAction className={classes.zl}>
                            2,70
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                        <img src="/static/piwo-339101-article.jpg" className={classes.img} />
                        <ListItemText primary="Warka" secondary="Delikatnie słodkie / ciemne df sdfsd " />
                        <ListItemSecondaryAction className={classes.zl}>
                            2,89
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                        <img src="/static/piwo-339101-article.jpg" className={classes.img} />
                        <ListItemText primary="Warka" secondary="Delikatnie słodkie / ciemne df sdfsd " />
                        <ListItemSecondaryAction className={classes.zl}>
                            2,89
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem>
                        <img src="/static/piwo-339101-article.jpg" className={classes.img} />
                        <ListItemText primary="Warka" secondary="Delikatnie słodkie / ciemne df sdfsd " />
                        <ListItemSecondaryAction className={classes.zl}>
                            2,89
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>

            </div>
        );
    }
}


FoodList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FoodList);