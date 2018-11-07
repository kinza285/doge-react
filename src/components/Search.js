import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField/TextField';

const styles = theme => ({
  drawerHeader: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  },
});

class Search extends React.Component {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
    searchValue: PropTypes.string.isRequired,
  };


  handleSearchChange = (event) => {
    const searchValue = event.target.value;
    // eslint-disable-next-line
    this.props.onSelectSearch(searchValue);
  };

  render() {
    const { classes, searchValue } = this.props;
    return (
      <div className={classes.drawerHeader}>
        <TextField
          fullWidth
          margin="normal"
          placeholder="Search chats..."
          value={searchValue}
          onChange={this.handleSearchChange}
          data={this.state}
        />
      </div>
    );
  }
}
export default withStyles(styles)(Search);
