import React from 'react';
import {BrowserRouter, Routes ,Route} from 'react-router-dom';

//import Root from './Root';
import Header from './Header';
import IDE from './IDE';
import user from './user'
import question from './question'
import session from './session'

class Root extends React.Component{
  render(){
      return(
        <div>
            <b>{"Hello World"}</b>
        </div>
      )
  }
}

class AppRoutes extends React.Component{

  render(){
      return(
        <div>
            <Routes>
                <Route path='/' exact element={<Root/>}/>
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
                  <AppRoutes/>
                </BrowserRouter>
            </div>
            
        )
    }
}


export default App;