import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import Link from 'react-router-dom/Link';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        marginTop: '60px',
    },
});

class TabsMenu extends React.Component {
    state = {
        values: this.props.value,
        redirect: false
    };

    handleChange = (event, value) => {

        this.setState({ values: value, redirect: true });
    };

    render() {
        const { classes } = this.props;


        if (this.state.redirect && this.state.values === 0) {
            return <Redirect to='/details'/>;
        }
        if (this.state.redirect && this.state.values === 1) {
            return <Redirect to='/details2'/>;
        }

        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={this.state.values}
                        onChange={this.handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        scrollable
                        scrollButtons="auto"
                    >
                        <Tab label="Piwo" />
                        <Tab label="Przekąski" />
                        <Tab label="Drinki" />
                        <Tab label="Obiady" />
                        <Tab label="Pizza" />
                    </Tabs>
                </AppBar>
            </div>
        );
    }
}

TabsMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TabsMenu);
