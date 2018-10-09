import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import BottomNav from './BottomNav';
import ChatList from './ChatList';
import Search from './Search';
import NewChatButton from './NewChatButton';

const styles = ({
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: 320,
  }
});

const Sidebar = ({ classes, chats }) => (
  <Drawer
    variant="permanent"
    classes={{
      paper: classes.drawerPaper,
    }}
  >
    <Search />
    <Divider />
    <ChatList chats={chats} />
    <NewChatButton />
    <BottomNav />
  </Drawer>
);

export default withStyles(styles)(Sidebar);
