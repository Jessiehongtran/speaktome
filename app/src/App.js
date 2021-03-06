import React from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Navigation from './components/navigation';
import Videos from './components/videos';
import Calendar from './components/calendar';
import Read from './components/read';
import Write from './views/write';
import Write2 from './components/write2';

class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Switch>
          <Route 
            exact path="/" 
            render = {
              props => {
                return (
                  <> 
                    <Navigation {...props}/>
                    <Videos {...props}/>
                  </>
                )}}
          />
          <Route 
            exact path="/speak" 
            render = {
              props => {
                return (
                  <> 
                  <Navigation {...props}/>
                  <Calendar {...props}/>
                  </>
                )}}
          />
          <Route 
            exact path="/read" 
            render = {
              props => {
                return (
                  <> 
                  <Read/>
                  </>
                )}}
          />
          {/* <Route 
            exact path="/write" 
            render = {
              props => {
                return (
                  <> 
                  <Write {...props}/>
                  </>
                )}}
          /> */}
          <Route 
            exact path="/write2" 
            render = {
              props => {
                return (
                  <> 
                  <Write2 {...props}/>
                  </>
                )}}
          />
        </Switch>
        
      </div>
    )
  }
}

export default App;
