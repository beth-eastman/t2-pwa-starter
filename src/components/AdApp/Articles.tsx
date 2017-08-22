import * as React from 'react';
import { Card, CardText } from 'material-ui/Card';
import article from '../../res/data/article';

const Articles: React.SFC<{}> = () => {

  return (
    <Card>
      <CardText>
        <div className="library-content" dangerouslySetInnerHTML={{ __html: article }}></div>
      </CardText>
    </Card>
  );

}

export default Articles;
