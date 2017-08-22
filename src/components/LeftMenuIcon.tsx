import * as React from 'react';
// import {AppPageInterface} from './Main';

import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
// Icons
import MoreVertIcon from 'material-ui/svg-icons/navigation/menu';
import HomeIcon from 'material-ui/svg-icons/action/home';
import AssessmentIcon from 'material-ui/svg-icons/action/assessment';
import VideosIcon from 'material-ui/svg-icons/av/videocam';
import ResourcesIcon from 'material-ui/svg-icons/action/account-box';

// interface Props {
//   appPage: AppPageInterface;
// }

const LeftMenu = (props) => {
  return (
    <IconMenu
      iconButtonElement={<IconButton><MoreVertIcon color={'white'} /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <MenuItem onTouchTap={() => {alert('go to home')}} primaryText="Home" leftIcon={<HomeIcon />}/>
      <MenuItem onTouchTap={() => {alert('go to assessment')}} primaryText="Assessment" leftIcon={<AssessmentIcon />}/>
      <MenuItem onTouchTap={() => {alert('go to videos')}} primaryText="Videos" leftIcon={<VideosIcon />}/>
      <MenuItem onTouchTap={() => {alert('go to resources')}} primaryText="Resources" leftIcon={<ResourcesIcon />}/>
    </IconMenu>
    );
}

// const LeftMenu: React.SFC<Props> = (props) => {
//   return (
//     <IconMenu
//       iconButtonElement={<IconButton><MoreVertIcon color={'white'} /></IconButton>}
//       anchorOrigin={{horizontal: 'left', vertical: 'top'}}
//       targetOrigin={{horizontal: 'left', vertical: 'top'}}
//     >
//       <MenuItem onTouchTap={() => {props.appPage.history.push("/")}} primaryText="Home" leftIcon={<HomeIcon />}/>
//       <MenuItem onTouchTap={() => {props.appPage.history.push("/assessments")}} primaryText="Assessment" leftIcon={<AssessmentIcon />}/>
//       <MenuItem onTouchTap={() => {props.appPage.history.push("/videos")}} primaryText="Videos" leftIcon={<VideosIcon />}/>
//       <MenuItem onTouchTap={() => {props.appPage.history.push("/resources")}} primaryText="Resources" leftIcon={<ResourcesIcon />}/>
//     </IconMenu>
//   );
// }




export default LeftMenu;
