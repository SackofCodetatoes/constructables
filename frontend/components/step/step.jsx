import React from 'react';
import { withRoute } from 'react-router-dom';

class Step extends React.Component {
  
  render() {
    return (
      <div>
        <input type="text" placeholder='Step: Type your title...'/>
        <input type="text" placeholder='Type your step description'/>
      </div>
    )  
  }


}
export default Step;
