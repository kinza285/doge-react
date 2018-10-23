import React from "react";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction/BottomNavigationAction";
import RestoreIcon from '@material-ui/icons/Restore';
import ExploreIcon from '@material-ui/icons/Explore';
import BottomNavigation from "@material-ui/core/BottomNavigation";

class BottomNav extends React.Component {
  handleTabChange = (event ,value) => {
    this.props.onSelectTab(value);
  }
  render() {
    const { activeTab } = this.props;
    return (<BottomNavigation
             value={activeTab}
             onChange={this.handleTabChange}
             showLabels>
      <BottomNavigationAction label="My Chats" icon={<RestoreIcon/>}/>
      <BottomNavigationAction label="Explore" icon={<ExploreIcon/>}/>
    </BottomNavigation>)
  }
};

export default BottomNav;
