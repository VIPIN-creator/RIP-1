import React from 'react';
import {BrowserRouter, Routes ,Route} from 'react-router-dom';

//import Root from './Root';
import Header from './Header';

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