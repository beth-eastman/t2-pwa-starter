import * as React from 'react';
import { assessments } from 'local-t2-assessment-suite';

const { Stigma, Depression, Anxiety, Worry, PostTraumaticStress } = assessments;

interface Props {
  match: any;
  history: any;
  basePath: any;
}

const Assessment: React.SFC<Props> = (props) => {

  const handleCancel = () => {
    return (err, assessment) => {
      props.history.push(props.basePath);
    }

  }

  // props.match.params.id gets the specific assessment id
  const getAssessment = () => {
    let assessment = null;
    switch(props.match.params.id) {
      case '1':
        assessment = <Stigma onCancel={handleCancel()} />;
        break;
      case '2':
        assessment = <Depression onCancel={handleCancel()} />;
        break;
      case '3':
        assessment = <Anxiety onCancel={handleCancel()} />;
        break;
      case '4':
        assessment = <Worry onCancel={handleCancel()} />;
        break;
      case '5':
        assessment = <PostTraumaticStress onCancel={handleCancel()} />;
        break;
      default:
        assessment = <h4>assessment not found</h4>;
    }
    return assessment;
  };

  return (
    <div>{ getAssessment() }</div>
  );

}

export default Assessment;
