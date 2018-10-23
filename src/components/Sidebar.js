import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import BottomNav from './BottomNav';
import ChatList from './ChatList';
import Search from './Search';
import NewChatButton from './NewChatButton';
import TextField from '@material-ui/core/TextField';
import RestoreIcon from '@material-ui/icons/Restore';
import ExploreIcon from '@material-ui/icons/Explore';
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction/BottomNavigationAction";
import BottomNavigation from "@material-ui/core/BottomNavigation";


const styles = theme => ({
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: 320,
  },
  drawerHeader: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3,
  }
});

class Sidebar extends React.Component {
  state = {
    searchValue: '',
    activeTab: 0,
  }

  handleSearch = (value) =>  {
    this.setState({
      searchValue: value,
    })
  }

  handleTab = (value) =>  {
    this.setState({
      activeTab: value,
    })
  }

  handleTabChange = (event, value) => {
    this.setState({
      activeTab: value,
    })
  }

  filterChats = (chats) => {
    const { searchValue } = this.state;

    return chats
      .filter(chat => chat.title
        .toLowerCase()
        .includes(searchValue.toLowerCase())
      )
      .sort((one, two) =>
        one.title.toLowerCase() <= two.title.toLowerCase() ? -1 : 1
      );
  }

  render() {
    const { classes, chats, createChat } = this.props;
    const { activeTab } = this.state;

    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Search onSelectSearch={this.handleSearch}/>
        <Divider />
        <ChatList
          chats={this.filterChats(activeTab === 0 ? chats.my : chats.all)}
          activeChat={chats.active}
        />
        <NewChatButton onClick={createChat} />
        <BottomNav activeTab = {activeTab} onSelectTab={this.handleTab}/>
      </Drawer>
    );
  }
}


export default withStyles(styles)(Sidebar);
