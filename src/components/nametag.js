import React, { Component } from 'react';

class NameTag extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (  
     <div>
     <div className="nametag">
      Adrianacmy 
     </div>
      <div className="description">A tiny human who makes stuff with code</div>
     
     </div> 

    
    )
  }
}
 
export default NameTag;