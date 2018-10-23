import React from "react";
import { withStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField/TextField";

const styles = theme => ({
  drawerHeader: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  }
});

class Search extends React.Component {


  handleSearchChange = (event) => {
    const searchValue = event.target.value;
    this.props.onSelectSearch(searchValue);
  }

  render() {
    const { classes, searchValue } = this.props;
    return (<div className={classes.drawerHeader}>
      <TextField
        fullWidth
        margin="normal"
        placeholder="Search chats..."
        value={searchValue}
        onChange={this.handleSearchChange}
        data = {this.state}
      />
    </div>);
  };

}
export default withStyles(styles)(Search);
