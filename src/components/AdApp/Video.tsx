
import * as React from 'react';
import {AppPageInterface} from '../Main';
// import Helmet from 'react-helmet';
// import {connect} from 'react-redux';


interface MyProps {
  appPage: AppPageInterface
  video: any;
  width: string;
}

interface MyState {

}

class Video extends React.Component<MyProps, MyState> {


  componentWillMount () {
    var {video} = this.props;
    this.props.appPage.setPageTitle(video.title);
    // this.props.appPage.setMainIcon();
  }

  render () {
    var {width, video} = this.props;
    return (
      <div>
        <video id="stigma-video" width={width} src={video.src} poster={video.img} controls>
          Sorry, your browser doesn't support embedded videos.
        </video>
      </div>
    );
  }
}


export default Video;
