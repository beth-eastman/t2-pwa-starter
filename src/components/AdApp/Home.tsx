import * as React from 'react';
import { Card, CardMedia, CardText, CardTitle } from 'material-ui';



const Home: React.SFC<{}> = (props) => {

  return (
    <Card>
      <CardMedia
        overlay={<CardTitle title="Stigma" subtitle="Overview" />}
      >
        <img style={{maxHeight: 500, margin: '0 auto', display: 'block'}} src={require('../../res/images/AdApp/ad_stigma_topics_lg.png')} alt="" />
      </CardMedia>
      <CardText>
        Institutional and personal stigma can interfere with getting needed help by creating an atmosphere of fear and intimidation. Learn how to stop focusing on worse case scenarios when it comes to help-seeking. Watch videos of those who have overcome their fear of negative consequences for using health resources they needed to cope with PTSD, depression and other challenges.
      </CardText>
    </Card>
  );

}

export default Home;
