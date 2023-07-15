import React from 'react';
import {Router, Route} from 'react-router-dom';
import history from '../history';
import { connect } from 'react-redux';

import Header from './Header';
import IDE from './IDE';
import user from './user'
import question from './question'
import session from './session'
import { checkToken } from '../actions/users';

class Root extends React.Component{

  componentDidMount(){
    if(!this.props.auth.isSignedIn){
       this.props.checkToken();
    }
  }
  componentDidUpdate(){
    if(!this.props.auth.isSignedIn){
      if(history.location.pathname !== '/login'){
        history.push('/login');
      }
    }
    else if(this.props.auth.isSignedIn && history.location.pathname == "/login" ){
      history.push('/sessions');
    }
  }
  
  render(){
      return(
        <>
        </>
      )
  }
}

const mapStateToProps = (state)=>{
  return{
      auth: state.auth,
      location: state.location
  }
}

const WR = connect(mapStateToProps,{checkToken})(Root);

class App extends React.Component{

    render(){
        return(
            <div>
                <div>
                <Router history={history}>
                    <Header/>
                    <Route path='/' component={WR}/>
                    <Route path='/login' exact component={user.Login}/>
                    <Route path='/user/create' exact component={user.SignUp}/>
                    <Route path='/question/create' exact component={question.Create}/>
                    <Route path='/questions' exact component={question.List}/>
                    <Route path='/sessions/create' exact component={session.Create}/>
                    <Route path='/sessions' exact component={session.List}/>
                    <Route path='/ide' exact component={IDE}/>
                </Router>
            </div>
            </div>
            
        )
    }
}


export default App;