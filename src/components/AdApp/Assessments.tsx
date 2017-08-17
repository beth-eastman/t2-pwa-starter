import * as React from 'react';
import { AppPageInterface } from '../Main';
import { GridList, GridTile } from 'material-ui/GridList';

import assessments from '../../res/data/assessments';

export interface Props {
  cols: number;
  basePath: number;
  appPage: AppPageInterface;
  onClick: (videos: {id: number}) => void;
}

const Assessments: React.SFC<Props> = (props) => {
  const { cols, onClick } = props;

  return <GridList
        cols={cols}
      >

        {assessments.map((item) => (

            <GridTile
              key={item.id}
              onTouchTap={() => onClick(item)}

              title={item.title}
            >
              <img src={item.img} />
            </GridTile>


        ))}
      </GridList>

}

export default Assessments;
