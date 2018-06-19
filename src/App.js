import  M from 'materialize-css/dist/js/materialize.js';
import React, { Component } from 'react';
import logo from './logo.svg';
import img1 from './imgs/1.jpg';
import './App.css';

class App extends Component {
    componentDidMount(){
      document.addEventListener('DOMContentLoaded', function() {
        // init carousel
        let elems = document.querySelectorAll('.carousel');
        let instances = M.Carousel.init(elems, {});

        // init Modal
        var elemsM = document.querySelectorAll('.modal');
        var instance2 = M.Modal.init(elemsM, {});
      });
    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="container">

        <div className="container">
          <button className="btn">read more</button>
          <button className="btn waves-effect waves-light">read more</button>
          <button className="btn btn-large blue">blue button</button>
          <button className="btn btn-purple lighten-2 blue">blue button</button>
        </div>
        {/* floating button */}
        <a href="" className="btn-floating red btn-large"><i className="large material-icons">add</i></a>
        <hr/>
        <h2>HELPERS</h2>
        <div>
          <h5 className="left-align">left-align</h5>
          <h5 className="right-align">right-align</h5>
          <h5 className="center-align">center-align</h5>
        </div>

        <h2>float</h2>

        {/* HIDE CONTENT */}
        <div className="hide">hidden for all devices</div>
        <div className="hide-on-small-only"></div>


        <div className="hide">hidden for all devices</div>
        <div className="hide-on-small-only">hide for samll only</div>
        <div className="hide-on-med-only">hide for tablets only</div>
        <div className="hide-on-med-and-down">hide for tablets and smaller</div>
        <div className="hide-on-med-and-up">hide for tablets and higher</div>
        <div className="hide-on-large-only">hide for desktop</div>

        <h4 className="truncate">HkllfdaaHkllfdaaHkllfdaaHkllfdaaHkllfdaaHkllfdaaHkllfdaaHkllfdaaHkllfdaaHkllfdaaHkllfdaaHkllfdaaHkllfdaaHkllfdaaHkllfdaaHkllfdaa</h4>

        {/* effect */}
        {/* hoverable  */}
        <div className="red hoverable">hoveralble</div>
        <div className="green pulse">pulse</div>
        <div className="pink z-depth-1 white-text">z-depth-1 shadow</div>
        <div className="black z-depth-3 white-text">z-depth-3 shadow</div>
        <div className="yellow z-depth-5 black-text">z-depth-5 shadow</div>

        {/* font-size changes */}
        <div className="flow-text"><p>fdkfdafdafdkfdafdafdkfdafdafdkfdafda</p></div>


        <img src="" alt="" className="responsive-img circle"/>

        {/* dropdown   */}
      
      <ul id='dropdown1' className='dropdown-content'>
        <li><a href="#!">one</a></li>
        <li><a href="#!">two</a></li>
        {/* <li className="divider" tabindex="-1"></li> */}
        <li><a href="#!">three</a></li>
        <li><a href="#!"><i className="material-icons">view_module</i>four</a></li>
        <li><a href="#!"><i className="material-icons">cloud</i>five</a></li>
      </ul>
        <nav>
          <div className="nav-wrapper pink">
            <a href="" className="brand-logo center">logo</a>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><a href="">Sass</a></li>
              <li><a href="">html</a></li>
              <li><a href="#" data-target="dropdown1" className="dropdown-trigger ">js</a></li>
            </ul>
          </div>
        </nav>
        <br/>
        </div>

        <div className="container">
          {/* collection list */}
          <ul className="collection">
            <li className="collection-item">item1</li>
            <li className="collection-item">item1</li>
            <li className="collection-item">item1</li>
            <li className="collection-item">item1</li>
          </ul>

          {/* links collection when hover has background */}
          <div className="collection with-header"> 
            <a href="#" className="collection-item"><h4>header</h4></a>
            <a href="#" className="collection-item">lin1</a>
            <a href="#" className="collection-item">lin1</a>
            <a href="#" className="collection-item">lin1</a>
          </div>

          <ul className="collection with-header">
            <li className="collection-header"><h4>first name</h4></li>
            <li className="collection-item">Adriana</li>
            <li className="collection-item">Adriana</li>
            <li className="collection-item">Adriana</li>
            <li className="collection-item">Adriana</li>
          </ul>
        </div>

        <div className="container">
          <h2>Breadcrumbs</h2>
          <nav>
            <div className="nav-wrapper">
              <div className="col s12">
                <a href="" className="breadcrumb">first</a>
                <a href="" className="breadcrumb">second</a>
                <a href="" className="breadcrumb">first</a>
              </div>
            </div>
          </nav>

          {/* cards  */}


          {/* chips  commonly used either for contacts or for tags. */}
          <div className="chip">
            <img src="so" alt=""/> Adriana
          </div>


          {/* form */}
          <form action="">
            <div className="input-field">
              <input type="email" name="email" id="email" className="validate"/>
              {/* <label for="email">name</label> */}
            </div>
            <div className="input-field">
              <textarea name="" id="textarea" cols="30" rows="10" className="materialize-textarea"></textarea>
              {/* <label className="active" for="textarea">Text</label> */}
            </div>
          </form>


          <h2>preloaders</h2>
          <div className="progress">
            <div className="determinate" styles="width:70%"></div>
          </div>
          <div className="progress">
            <div className="indeterminate" styles="width:70%"></div>
          </div>


          {/* grid system */}
          <div className="row">
            <div className="col s1"><div className="card-panel grey">1</div></div>
            <div className="col s1"><div className="card-panel grey">1</div></div>
            <div className="col s1"><div className="card-panel grey">1</div></div>
            <div className="col s1"><div className="card-panel grey">1</div></div>
            <div className="col s1"><div className="card-panel grey">1</div></div>
            <div className="col s1"><div className="card-panel grey">1</div></div>
            <div className="col s1"><div className="card-panel grey">1</div></div>
            <div className="col s1"><div className="card-panel grey">1</div></div>
            <div className="col s1"><div className="card-panel grey">1</div></div>
            <div className="col s1"><div className="card-panel grey">1</div></div>
            <div className="col s1"><div className="card-panel grey">1</div></div>
            <div className="col s1"><div className="card-panel grey">1</div></div>
          </div>

          <div className="row">
            <div className="col s8">
              <div className="card-panel yellow">8</div>
            </div>
            <div className="col s4">
              <div className="card-panel yellow">4</div>
            </div>

            <div className="row">
              <div className="col s12"><div className="card-panel grey">12</div></div>
              <div className="col s6 offset-s6 "><div className="card-panel grey">offset-6</div></div>
            </div>

            <div className="row">
              <div className="col s12 m4"><div className="card-panel grey">m4 s12</div></div>
              <div className="col s12 m8"><div className="card-panel grey">m8 s12</div></div>
            </div>
          
          </div>

        </div> {/*container*/}

        {/* md js */}
        <div className="container">
            <div className="carousel">
              <a href="" className="carousel-item"><img src={img1} alt=""/></a>
              <a href="" className="carousel-item"><img src={img1} alt=""/></a>
              <a href="" className="carousel-item"><img src={img1} alt=""/></a>
              <a href="" className="carousel-item"><img src={img1} alt=""/></a>
              <a href="" className="carousel-item"><img src={img1} alt=""/></a>
              <a href="" className="carousel-item"><img src={img1} alt=""/></a>
              <a href="" className="carousel-item"><img src={img1} alt=""/></a>
            </div>


              <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>

              <div id="modal1" className="modal">
                <div className="modal-content">
                  <h4>Modal Header</h4>
                  <p>A bunch of text</p>
                </div>
                <div className="modal-footer">
                  <a href="#!" className="modal-close waves-effect waves-green btn-flat">Agree</a>
                </div>
              </div>
          

            <div className="switch">
              <label>
                Off
                <input type="checkbox" />
                <span className="lever"></span>
                On
              </label>
            </div>

            <div className="switch">
              <label>
                Off
                <input disabled type="checkbox"/>
                <span className="lever"></span>
                On
              </label>
            </div>
        
            
        </div>


      </div>
    );
  }
}

export default App;