import * as React from 'react';
import { Card, CardText } from 'material-ui/Card';
import {AppPageInterface} from '../Main';
import library from '../../res/data/library';

interface Props{
  appPage: AppPageInterface;
  match: any;
  basePath: string;
}

const LibraryPage: React.SFC<Props> = (props) => {

  return (
    <Card>
      <CardText>
        <div className="library-content" dangerouslySetInnerHTML={{ __html: library[props.match.params.id - 1].text }}></div>
      </CardText>
    </Card>
  );

}

export default LibraryPage;
