import * as React from 'react';
import { Card, CardText } from 'material-ui/Card';

const Articles: React.SFC<{}> = () => {

  return (
    <Card>
      <CardText>
        Article Content goes here
        <div className="library-content" dangerouslySetInnerHTML={{ __html: "" }}></div>
      </CardText>
    </Card>
  );
  
}

export default Articles;
