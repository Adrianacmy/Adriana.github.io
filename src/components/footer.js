import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <footer>
        <div className="socialicon">
      <a href="#!"><i class="fa fa-github fa-4x"></i></a>
      <a href="#!"><i class="fa fa-github fa-4x"></i></a>
      <a href="#!"><i class="fa fa-github fa-4x"></i></a>
      <a href="#!"><i class="fa fa-github fa-4x"></i></a>
      </div>
        <div className="copyright">
        &copyright; Adrianacmy 2018 &nbsp;
        
        </div>

      </footer>


    )
  }
}

export default Footer;