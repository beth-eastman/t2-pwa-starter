
import * as React from 'react';
import {withRouter} from 'react-router-dom';
import {AppPageInterface} from './Main';
import Home from './AdApp/Home';

import Assessments from '../containers/AdApp/Assessments';
import VideosList from '../containers/AdApp/VideosList';
import Video from '../containers/AdApp/Video';

import Resources from './AdApp/Resources';
import LinksBooks from './AdApp/LinksBooks';
import LibraryList from './AdApp/LibraryList';
import LibraryPage from './AdApp/LibraryPage';
import Assessment from './AdApp/Assessment';
import Articles from './AdApp/Articles';

import RouteGroup from './RouteGroup';
import RouteItem from './NavItem';

export interface Props {
  appPage: AppPageInterface
}

export interface State {

}

class AppRoutes extends React.Component<Props, State> {

  render() {
    const props = {...this.props, basePath: '/'};
    return (
      <RouteGroup id='appTabs' appPage={this.props.appPage}>
          <RouteItem {...props} tab={0} title={'Home'} exact path="/" componentPage={Home} />
          <RouteItem {...props} basePath="/assessments" tab={1} title={'Assessment'} exact path="/assessments" componentPage={Assessments} />
            <RouteItem {...props} basePath="/assessments" tabIndex={1} title={'Assessment'} exact path="/assessments/:id" componentPage={Assessment} />
          <RouteItem {...props} basePath="/videos" tab={2} title={'Videos'} exact path="/videos" componentPage={VideosList} />
            <RouteItem {...props} basePath="/videos" tabIndex={2} title={'Video'} exact path="/videos/:id" componentPage={Video} />
          <RouteItem {...props} tab={3}  basePath="/resources" title={'Resources'} exact path="/resources" componentPage={Resources} />
            <RouteItem {...props} basePath="/resources" tabIndex={3} title={'Links & Books'} exact path="/resources/links-books" componentPage={LinksBooks} />
              <RouteItem {...props} basePath="/resources/articles" tabIndex={3} title={'Article'} exact path="/resources/articles" componentPage={Articles} />
              <RouteItem {...props} basePath="/resources/library" tabIndex={3} title={'Library'} exact path="/resources/library" componentPage={LibraryList} />
                <RouteItem {...props} basePath="/resources/library" tabIndex={3} title={'Library'} exact path="/resources/library/:id" componentPage={LibraryPage} />
      </RouteGroup>
    );
  }
}

export default withRouter(AppRoutes);
