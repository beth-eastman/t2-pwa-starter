import * as React from 'react';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import { Link } from 'react-router-dom';
// Icons
import MoreVertIcon from 'material-ui/svg-icons/navigation/menu';
import HomeIcon from 'material-ui/svg-icons/action/home';
import AssessmentIcon from 'material-ui/svg-icons/action/assessment';
import VideosIcon from 'material-ui/svg-icons/av/videocam';
import ResourcesIcon from 'material-ui/svg-icons/action/account-box';

const LeftMenu = (props) => {
  return (
    <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon color={'white'} /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <MenuItem containerElement={<Link to={'/'} />} primaryText="Home" leftIcon={<HomeIcon />}/>
      <MenuItem containerElement={<Link to={'/assessments'} />} primaryText="Assessment" leftIcon={<AssessmentIcon />}/>
      <MenuItem containerElement={<Link to={'/videos'} />} primaryText="Videos" leftIcon={<VideosIcon />}/>
      <MenuItem containerElement={<Link to={'/resources'} />} primaryText="Resources" leftIcon={<ResourcesIcon />}/>
    </IconMenu>
    );
}

export default LeftMenu;
