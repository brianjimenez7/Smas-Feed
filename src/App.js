
import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';
import Facebook from './components/facebook';
import Facebook_share from './components/facebook_share';
import Twitter_share from './components/twitter_share';
import Google from './components/Google_Login';
import { Container, Row, Col,PageHeader } from 'reactstrap';
import {Navbar,Nav,NavItem,MenuItem,NavDropdown} from 'react-bootstrap';
import Navs from './components/Navs';
import logo from './logo.svg';
import logo1 from './smashfeedlogo.png'

const API_KEY='AIzaSyC87x_sVocG6ggyOLewEj5ERXQRkXfYobo'
class App extends Component {
 render() {
 return (
  
 <div>
      <div className="App">
        <header className="Navs">
          <h1 className="App-title"><img src={logo1} className="App-logo" alt="logo" /> Smash Feed<img src={logo1} className="App-logo" alt="logo" /></h1>
        </header>
        <p className="App-intro">
          To get started, log in with Twitter, Facebook, and Youtube
        </p>
        <div className="buttonContainer">
        <ul>
        <li><Facebook/></li>
        <li><Google/></li>
        </ul>
        <ul>
        <li><Facebook_share/></li>
        <li><Twitter_share/></li>
        </ul>
        </div>
        <div className="body">
        <h1>The rest here is left for the newsfeed</h1>
        </div>
        <div className="footer">
            {/* <p>Footer</p> */}
        </div>
     </div>
 </div>
 );
 }
}
export default App;