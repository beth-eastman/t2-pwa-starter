import * as React from 'react';
import { Card, CardText } from 'material-ui/Card';

const LinksBooks: React.SFC<{}> = (props) => {

  return (
    <Card>
      <CardText>
        <h4>Links and Books resources go here</h4>
        <div className="library-content" dangerouslySetInnerHTML={{ __html: "" }}></div>
      </CardText>
    </Card>
  );

}

export default LinksBooks;
