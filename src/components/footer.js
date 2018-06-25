import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <footer>
      
        <div className="who">
          <div className="container">
            <p>I am a software developer, specilized in Python and Javascript.</p>
            <p>To discuss a particular project, please contact me at iamadrianachen@gmail.com</p>
            <p>I am always willing to learn new things, currently I am exploring Blockchain development.</p>
          </div>
        </div>

        <div className="socialicon container">
          <a href="#!"><i class="fa fa-github fa-3x"></i></a>
          <a href="#!"><i class="fa fa-github fa-3x"></i></a>
          <a href="#!"><i class="fa fa-github fa-3x"></i></a>
          <a href="#!"><i class="fa fa-github fa-3x"></i></a>
        </div>

        <div className="copyright container">
            &copy; Adrianacmy &nbsp;2018
        </div>
      </footer>


    )
  }
}

export default Footer;