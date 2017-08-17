import * as React from 'react';
import MuiAppBar from 'material-ui/AppBar';
import {appBarTitleStyle, appBarIconeStyle} from './commonStyles';
const appIcon = require("../res/images/ui/app_icon_48.png")

export interface Props {
  leftIcon: JSX.Element,
  rightIcon: JSX.Element,
  title: string;
  onTitleClick: (event: any) => void;
}

export interface State {
}

const getTitleIcon = (title) => {
  return <div>
           <div style={{position: 'relative',top: 4}} >
             <img style={{width: 40, display: 'block', float: 'left',position: 'relative', top: 6}} src={appIcon} />
             <div style={{position: 'relative', top: -5, left: 5}}>{title}</div>
           </div>
         </div>;
}

export default class AppBar extends React.Component<Props, State>{


  render(){
    const {title,leftIcon,onTitleClick,rightIcon} = this.props;
    return <MuiAppBar
              titleStyle={appBarTitleStyle}
              iconStyleLeft={appBarIconeStyle}
              title={getTitleIcon(title)}
              onTitleTouchTap={onTitleClick}
              iconElementLeft={leftIcon}
              iconElementRight={rightIcon}
            />;
  }
}
