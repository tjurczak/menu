import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import classnames from 'classnames';
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import MonetizationOn from 'material-ui-icons/MonetizationOn';
import Grid from 'material-ui/Grid'
import red from 'material-ui/colors/red';
import FavoriteIcon from 'material-ui-icons/Favorite';
import ShareIcon from 'material-ui-icons/Share';
import ExpandMoreIcon from 'material-ui-icons/ExpandMore';
import MoreVertIcon from 'material-ui-icons/MoreVert';

const styles = theme => ({
    card: {
        maxWidth: 400,
        width: '100%',
    },
    media: {
        height: 194,
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    zl: {
        color: 'gray',
        fontSize: 'small',
    }
});

class MenuItem extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState({ expanded: !this.state.expanded });
    };

    render() {
        const { classes } = this.props;

        return (

                <Card className={classes.card}>

                    <CardMedia
                        className={classes.media}
                        image="/static/breakfast.jpg"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Grid container spacing={8}>
                            <Grid item xs={8}>
                                <Typography variant="headline" component="h2">
                                    Lizard
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <Typography variant="headline" align="right" component="h3">
                                    3,99 <span className={classes.zl}>zł</span>
                                </Typography>
                            </Grid>
                        </Grid>
                        <Typography paragraph>
                            Przeniczne lane
                        </Typography>


                    </CardContent>
                    <CardActions className={classes.actions} disableActionSpacing>
                        <IconButton aria-label="Add to favorites">
                            <FavoriteIcon />
                        </IconButton>
                        <IconButton
                            className={classnames(classes.expand, {
                                [classes.expandOpen]: this.state.expanded,
                            })}
                            onClick={this.handleExpandClick}
                            aria-expanded={this.state.expanded}
                            aria-label="Show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                        <CardContent>
                            <Typography paragraph variant="body2">
                                Method:
                            </Typography>
                            <Typography paragraph>
                                Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                minutes.
                            </Typography>
                            <Typography paragraph>
                                Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                                chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                                salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                                minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                            </Typography>
                            <Typography paragraph>
                                Add rice and stir very gently to distribute. Top with artichokes and peppers, and
                                cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes.
                                Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into
                                the rice, and cook again without stirring, until mussels have opened and rice is
                                just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)
                            </Typography>
                            <Typography>
                                Set aside off of the heat to let rest for 10 minutes, and then serve.
                            </Typography>
                        </CardContent>
                    </Collapse>
                </Card>

        );
    }
}

MenuItem.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuItem);