import React from 'react';
import {getQuestionDetails} from '../../actions/questions'; 
import { connect } from 'react-redux';
import QuesDropdown from './QuesDropdown';

class View extends React.Component{
    componentDidUpdate() {
        this.props.getQuestionDetails(this.props.question.id)
    }
    render(){
        return(
            <div className="view-question">
                <QuesDropdown /> 
                {
                    this.props.fetched ?
                    <div>
                        <h2>{this.props.question.title}</h2>
                        <hr />
                        <div className="view-question-body">
                            <h3>Problem Statement</h3>
                            <p className="text-justify">{this.props.question.statement}</p>
                            <h4>Input Format</h4>
                            <p>{this.props.question.inputFormat}</p>
                            <h4>Output Format</h4>
                            <p className="text-justify">{this.props.question.outputFormat}</p>
                        </div>
                    </div> :
                    <div><strong>Please Select a Question from Dropdown</strong></div>
                }
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    console.log(state);
    return {
        question: state.questions.currentQuestion.body,
        fetched: state.questions.currentQuestion.fetched
    }
}

export default connect(mapStateToProps,{getQuestionDetails})(View);