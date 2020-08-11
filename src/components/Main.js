import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import { render } from '@testing-library/react';
import { DOCIMAGES } from '../shared/comments';

const styles = theme => ({
    root: {
      minWidth: 275,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    titleList: {
    margin: theme.spacing(4, 0, 2),
    },
    button: {
        margin: theme.spacing(1),
    },
    textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    },
    resize:{
        height:250,
        width:400,
        wordwrap:'break-word',
    },
  });

  function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

  class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedItem : null,
            editedText : null,
            comments : DOCIMAGES
        }
        this.displayListItem = this.displayListItem.bind(this);
    }

    displayListItem(){
        this.state.comments.map((item) => (
                <div key={item.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                            <FolderIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary={item.name}
                            secondary={item.description}
                        />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete">
                            <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </div>
        ));
    }

    render(){
        const { classes} = this.props;
        const {dense} = "true";
        return(
            <div>
                <Container fixed>
                    <div>
                        <Typography variant="h6" className={classes.titleList}>
                            Avatar with text and icon
                        </Typography>
                        <div className={classes.demo}>
                            <List dense={dense}>
                            {generate(
                                <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                    <FolderIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary="Single-line item"
                                    secondary="Single-line item"
                                />
                                <ListItemSecondaryAction>
                                    <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon />
                                    </IconButton>
                                </ListItemSecondaryAction>
                                </ListItem>,
                            )}
                            </List>
                        </div>
                    </div>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <TextField id="outlined-basic" label="Docker Base Image" variant="outlined" />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <TextField id="outlined-basic" label="Docker Edited Image" variant="outlined" />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <Card className={classes.root} variant="outlined">
                                <CardContent>
                                    <Typography variant="body2" component="p">
                                    Word of the Day<br/>
                                    well meaning and kindly.
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={12} md={6}>
                                <TextField
                                        id="outlined-uncontrolled"
                                        label="Description"
                                        name="message"
                                        value="Word of the Day 
                                        well meaning and kindly."//{this.props.stateVar.message}
                                        className={classes.textField}
                                        //onChange={(this.props.stateVar.flip)?this.props.handleStateChange:null}
                                        margin="normal"
                                        wordwrap="hard"
                                        variant="outlined"
                                        InputProps={{
                                            classes: {
                                            input: classes.resize,
                                            },
                                        }}
                                />
                        </Grid>
                    </Grid>
                    <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        className={classes.button}
                        startIcon={<SaveIcon />}
                    >
                        Save
                    </Button>
                </Container>
            </div>
        );
    }
}
Main.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  
export default withStyles(styles)(Main);