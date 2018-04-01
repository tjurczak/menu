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
import FoodList2 from './FoodList2';
import Bar from './Bar';

const styles = theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
    },
});

function DetailsList2(props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <Bar />
            <TabsMenu value="1" />
            <FoodList2 />
        </div>
    );
}

DetailsList2.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DetailsList2);