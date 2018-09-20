import React from 'react';
import { Link } from 'react-router-dom';

class Splash extends React.Component {
  constructor(){
    super();
    this.projectsIndex = this.projectsIndex.bind(this);
  }

  projectsIndex(){

  }
  
  render(){
    // let temp = "https://images.pexels.com/photos/395074/pexels-photo-395074.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    let temp = "https://images.pexels.com/photos/301703/pexels-photo-301703.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    return (
      <div className='splash-page'>
        <div className="splash-text">Start crafting today!</div>
        <Link onClick={() => window.scrollTo(0, 0)} to='/projects/' className='clickable'><img className="splash" src={temp} alt="Start Constructing Today!"/></Link>
      </div>

    )
  }
}
export default Splash;