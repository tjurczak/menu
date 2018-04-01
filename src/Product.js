import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import ImageIcon from 'material-ui-icons/Image';
import WorkIcon from 'material-ui-icons/Work';
import BeachAccessIcon from 'material-ui-icons/BeachAccess';
import MenuItem from './MenuItem';
import TabsMenu from './TabsMenu';
import FoodList from './FoodList';
import Bar from './Bar';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
    img: {
        width: '100%',
    }
});

function Product(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Bar trans="1" back="1" />
            <img className={classes.img} src="/static/piwo-339101-article.jpg" />
            <Typography variant="headline" component="h2">
                Lizard
            </Typography>
        </div>
    );
}

Product.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Product);