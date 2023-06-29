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

const Navigate = ({location}) =>{
  const navigate = useNavigate();
  useEffect(() => {
    navigate(location);
  }, [location]);
}

class Root extends React.Component{
  constructor(props){
    super(props);
    this.state = {location: "/"}
  }
  componentDidMount(){
    if(!this.props.auth.isSignedIn){
      this.setState({location: "/login"});
    }
  }
  componentDidUpdate(){
    if(!this.props.auth.isSignedIn && this.state.location != "/login"){
      this.setState({location: "/login"});
    }
    else if(this.props.auth.isSignedIn && this.state.location == "/login"){
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

const WR = connect(mapStateToProps,null)(Root);

class AppRoutes extends React.Component{

  render(){
      return(
        <div>
            <Routes>
                <Route path='/login' exact element={<user.Login/>}/>
                <Route path='/user/create' exact element={<user.SignUp/>}/>
                <Route path='/question/create' exact element={<question.Create/>}/>
                <Route path='/session/create' exact element={<session.Create/>}/>
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