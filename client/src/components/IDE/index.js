import React from 'react';
import { connect } from 'react-redux';


class Header extends React.Component{

    render(){
        return(
            <>
                IDE
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