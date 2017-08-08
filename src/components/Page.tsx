import * as React from 'react';
import {AppPageInterface} from './Main';
export interface Props {
  appPage: AppPageInterface;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  titlePath?: string; //the path navigated to when appbar title is clicked
  title?: string;
  tab?: string;
}

export interface State {
  
}

export default class Page extends React.Component<Props, State>{
  static defaultProps: Partial<Props> = {
    title: '',
    titlePath: '',
    leftIcon: null,
    rightIcon: null
  }


  componentWillMount(){
    const {appPage,leftIcon,titlePath,title,rightIcon,tab} = this.props;
    appPage.setRightIcon(rightIcon);

    appPage.setMainIcon(leftIcon);

    if(appPage.appType === 'tabs' && tab){
      appPage.setTab('home',tab);
    }

    if(titlePath){
       appPage.setTitlePath(titlePath);
    }

    if(title){
        appPage.setPageTitle(title);
    }
  }

  render(){

    return <div>
             {React.cloneElement((this.props as any).children, this.props)}
           </div>;
  }
}