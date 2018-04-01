import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText, ListItemIcon, ListItemSecondaryAction } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ImageIcon from 'material-ui-icons/Image';
import BeachAccessIcon from 'material-ui-icons/BeachAccess';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
        marginTop: '5px',
    },
    img: {
        maxWidth: '80px',
        maxHeight: '50px',
    },
    imgw: {
        height: '50px',
        width: '80px',
        textAlign: 'center'
    },
    zl: {
        fontSize: '1.1em',
        paddingRight: '8px',
    },
    zlt: {
        fontSize: '0.8em',
        verticalAlign: 'top',
        color: 'gray',
    }
});



class FoodList2 extends React.Component {

    handleChange = (event, value) => {
        //window.location.href='/product';
        //this.setState({ open: true });
        this.setState({ redirect: true });
    };

    state = {
        open: false,
        redirect: false,
    };

    render() {
        const { classes } = this.props;
        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/product'/>;
        }

        return (
            <div className={classes.root}>
                <List>
                    <ListItem button onClick={this.handleChange}>
                        <div className={classes.imgw}>
                            <img src="/static/1980286-paluszki-przekaska-900-666.jpg" className={classes.img} />
                        </div>
                        <ListItemText primary="Paluszki" secondary="Słone" />
                        <ListItemSecondaryAction className={classes.zl}>
                            7.00
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem button onClick={this.handleChange}>
                        <div className={classes.imgw}>
                            <img src="/static/fb4ab32f900da8f1c093957bf0290606.jpeg" className={classes.img} />
                        </div>
                        <ListItemText primary="Chipsy" secondary="Paprykowe" />
                        <ListItemSecondaryAction className={classes.zl}>
                            7.00
                        </ListItemSecondaryAction>
                    </ListItem>
                    <ListItem button onClick={this.handleChange}>
                        <div className={classes.imgw}>
                            <img src="/static/images.jpg" className={classes.img} />
                        </div>
                        <ListItemText primary="Orzeszki" secondary="Ziemne" />
                        <ListItemSecondaryAction className={classes.zl}>
                            7.50
                        </ListItemSecondaryAction>
                    </ListItem>
                </List>

            </div>
        );
    }
}


FoodList2.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FoodList2);