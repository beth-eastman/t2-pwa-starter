import * as React from 'react';
import { Card, CardText } from 'material-ui/Card';
import linksBooks from '../../res/data/links-books';

const LinksBooks: React.SFC<{}> = (props) => {

  return (
    <Card>
      <CardText>
        <div className="library-content" dangerouslySetInnerHTML={{ __html: linksBooks }}></div>
      </CardText>
    </Card>
  );

}

export default LinksBooks;
