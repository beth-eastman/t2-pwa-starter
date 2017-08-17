import * as React from 'react';
import { List, ListItem } from 'material-ui/List';
import {AppPageInterface} from '../Main';

interface Props{
  appPage: AppPageInterface
  onClick: (path: string) => void;
  basePath: string;
}

const Resources: React.SFC<Props> = (props) => {

  const onClick = (path: string) => {
    return (event) => {
      props.appPage.history.push(props.basePath + path);
    }
  }

  return (
    <List>
      <ListItem primaryText="Library" onTouchTap={onClick('/library')} />
      <ListItem primaryText="Links & Books" onTouchTap={onClick('/links-books')} />
      <ListItem primaryText="Articles" onTouchTap={onClick('/articles')} />
    </List>
  );

}

export default Resources;
