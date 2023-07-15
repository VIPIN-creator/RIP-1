import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { getSessions } from '../../actions/sessions';
import history from '../../history';


class Accordion extends React.Component {

    componentDidMount() {
        this.props.getSessions();
    }
    handleClick(session_id) {
        var element = document.getElementById(`btn${session_id}`)
        var divElement = document.getElementById(session_id);
        if(element.classList.contains('collapsed')) {
            element.classList.remove('collapsed');
            divElement.classList.add('show');
        } else {
            element.classList.add('collapsed');
            divElement.classList.remove('show');
        }
    }
    render() {
        console.log(this.props.sessions)
        if (this.props.sessions.length > 0) {
            return (
                <div className="accordion container" id="accordionExample">
                {   this.props.auth.type == 'admin' && 
                    <div className="d-grid gap-2 col-6 mx-auto my-4">
                        <button className="btn btn-outline-primary" 
                            type="button" onClick={()=>{history.push("/sessions/create")}}>
                                Add Interview
                        </button>
                    </div>
                }
                    {
                        this.props.sessions.map((session) =>  {
                            return (
                                <div className="accordion-item" key={session._id}>
                                    <h2 className="accordion-header" onClick={() => this.handleClick(session._id)}>
                                        <button id={"btn"+session._id} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#"+session._id} aria-expanded="true" aria-controls={session._id}>
                                            {session.title}
                                        </button>
                                    </h2>
                                    <div id={session._id} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                        <div className="accordion-body">
                                            <div className="container align-items-start">
                                                <div className="row align-items-start">
                                                    <div className="col"><strong>Interviewee</strong></div>
                                                    <div className="col"><strong>Interviewer</strong></div>
                                                    <div className="col"><strong></strong></div>
                                                </div>
                                                <div className="row align-items-start">
                                                    <div className="col">
                                                        {
                                                            session.interviewee.map((interviewee) => {
                                                                return (
                                                                    <div className="row" key={session._id+interviewee}>{interviewee}</div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                    <div className="col">
                                                        {
                                                            session.interviewer.map((interviewee) => {
                                                                return (
                                                                    <div className="row" key={session._id+interviewee}>{interviewee}</div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                    <div className='col'>
                                                        <Link to='/ide'>
                                                            <button className='btn btn-primary'>Join</button>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            );
        }
        else {
            return <div className='container mt-5'><h3>You don't have any interview schedule{console.log(this.props)}</h3></div>
        }
    }
}

const mapStateToProps = (state)=>{
    return {
        sessions: state.sessions.allSessions,
        auth: state.auth 
    }
}
export default connect(mapStateToProps,{getSessions})(Accordion);