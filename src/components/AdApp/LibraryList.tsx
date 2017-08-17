import * as React from 'react';
import { List, ListItem } from 'material-ui/List';
import {AppPageInterface} from '../Main';
import library from '../../res/data/library';

interface Props{
  appPage: AppPageInterface
  onClick: (path: string) => void;
  basePath: string;
}

const LibraryList: React.SFC<Props> = (props) => {

  const onClick = (path: string) => {
    return (event) => {
      props.appPage.history.push(props.basePath + path);
    }
  }

  return (
    <List>
      {library.map((item) => (
          <ListItem key={item.id} primaryText={item.title} onTouchTap={onClick('/' + item.id)} />
      ))}
    </List>
  );

}

export default LibraryList;
