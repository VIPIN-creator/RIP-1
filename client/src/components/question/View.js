import React from 'react';
import {getQuestionDetails} from '../../actions/questions'; 
import { connect } from 'react-redux';

class View extends React.Component{
    componentDidMount() {
        this.props.getQuestionDetails("649d3cb51c7bfc969e3b57c9");
    }
    render(){
        return(
            <div className="view-question">
                <h1>{this.props.question.title}</h1>
                <hr />
                <div className="view-question-body">
                    <h2>Problem Statement</h2>
                    <p className="text-justify">{this.props.question.statement}</p>
                    <h3>Input Format</h3>
                    <p>{this.props.question.inputFormat}</p>
                    <h3>Output Format</h3>
                    <p className="text-justify">{this.props.question.outputFormat}</p>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        question: state.questions.body
    }
}

export default connect(mapStateToProps,{getQuestionDetails})(View);