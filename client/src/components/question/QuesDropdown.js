import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { connect } from 'react-redux';
import {getAllQuestions, setQuestionId} from '../../actions/questions'; 


class QuesDropDown extends React.Component {
    componentDidMount() {
        this.props.getAllQuestions();
        console.log(this.props.getAllQuestions());
    }
    updateCurrentQuestion(id) {
        this.props.setQuestionId(id);
    }
    render() {
        return (
            <div className='mb-3'>
                <Dropdown>
                    <Dropdown.Toggle variant="secondary" id="dropdown-basic" className='d-inline w-100 py-3'>
                        Select Question For Interviewee
                    </Dropdown.Toggle>

                    <Dropdown.Menu className='w-100'>
                        {
                            this.props.allQues.map(
                                (ques) => { return <Dropdown.Item onClick={()=>{this.updateCurrentQuestion(ques._id);}}>{ques.title}</Dropdown.Item> }
                            )
                        }
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        allQues: state.questions.allQues
    }
}

export default connect(mapStateToProps,{getAllQuestions, setQuestionId})(QuesDropDown);