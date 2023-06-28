import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import {Container,Navbar} from 'react-bootstrap';


class Header extends React.Component{

    render(){
        return(
            <>
            Header
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth : state.auth
    }
}

export default connect(mapStateToProps,{/*logout*/})(Header);