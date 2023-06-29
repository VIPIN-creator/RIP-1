import React from 'react';
import { useState, useEffect } from "react";
import {BrowserRouter, Routes ,Route} from 'react-router-dom';
import { connect } from 'react-redux';
import { useNavigate } from "react-router-dom";

import Header from './Header';
import IDE from './IDE';
import user from './user'
import question from './question'
import session from './session'
import { checkToken } from '../actions/users';

const Navigate = ({location}) =>{
  const navigate = useNavigate();
  useEffect(() => {
    navigate(location);
  }, [location]);
}

class Root extends React.Component{
  constructor(props){
    super(props);
    this.state = {location: "/ide"}
  }
  componentDidMount(){
    if(!this.props.auth.isSignedIn){
       this.props.checkToken();
    }
  }
  componentDidUpdate(){
    if(!this.props.auth.isSignedIn && this.state.location != "/login"){
      this.setState({location: "/login"});
    }
    else if(this.props.auth.isSignedIn && this.state.location == "/login" ){
      this.setState({location: "/ide"});
    }
  }
  render(){
    console.log(this.props.auth);
      return(
        <>
        <Navigate location={this.state.location}/>
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

class AppRoutes extends React.Component{

  render(){
      return(
        <div>
            <Routes>
                <Route path='/login' exact element={<user.Login/>}/>
                <Route path='/user/create' exact element={<user.SignUp/>}/>
                <Route path='/question/create' exact element={<question.Create/>}/>
                <Route path='/sessions/create' exact element={<session.Create/>}/>
                <Route path='/sessions' exact element={<session.List/>}/>
                <Route path='/ide' exact element={<IDE/>}/>
            </Routes>
        </div>
      )
  }
}

class App extends React.Component{

    render(){
        return(
            <div>
                <BrowserRouter>
                  <Header/>
                  <WR/>
                  <AppRoutes/>
                </BrowserRouter>
            </div>
            
        )
    }
}


export default App;