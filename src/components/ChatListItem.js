import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import titleInitials from '../utils/title-initials';

const ChatListItem = ({ title }) => (
  <ListItem button>
    <Avatar>{titleInitials(title)}</Avatar>
    <ListItemText primary={title}/>
  </ListItem>
);

export default ChatListItem;
