import * as React from 'react';
import {AppPageInterface} from '../Main';
import Checkbox from 'material-ui/Checkbox';
export interface Props {
  appPage: AppPageInterface;
}


export default class AppChecklist extends React.Component<Props, {}>{

  render(){
    const {appPage} = this.props;
    const versionChanged = appPage.version !== '0.0.0';
    return <div>
              <div>
                <Checkbox checked={versionChanged} label={'Version: ' + appPage.version} />
                {!versionChanged &&<div>Please change from the default version number in your webpack config<br />
                  You will need to restart webpack
                  </div>}
              </div>
    </div>;
  }
}