import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch} from 'react-router-dom'
import classes from './App.css';
import User from './components/User/User'

class App extends Component {
    constructor(props){
        super()
        this.state = {
            pages: [1, 2, 3, 4],
            isLoading: false
        }
    }

	componentDidMount() {
        this.setState ({
            isLoading: true
        })
	}
	render() {
        if(!this.state.isLoading){

        }
	  const {pages} = this.state;
    return (
        <Router exact path='/page/1'>
          <div className={classes.App}>
            <header className={classes.AppHeader}>
              <h1 className={classes.AppTtitle}>Users</h1>
            </header>
              <Switch>
	              <Route path="/page/:key" component={User}/>
	              <Route path="/" render={() => (
		              <Redirect to="/page/1"/>
                      )}/>
              </Switch>
              <div className={classes.pages}>
                  {pages.map(key => (
                      <span key={key} className={classes.buttons}>
                        <Link to={`/page/${key}`} >{key}</Link>
                      </span>
                      ))}
              </div>
          </div>
        </Router>
    );

  }

}
export default App;
