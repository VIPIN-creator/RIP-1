import React from 'react';
import history from '../../history'
import { connect } from 'react-redux';
import { getAllQuestions } from '../../actions/questions';


class Accordion extends React.Component {

    componentDidMount() {
        this.props.getAllQuestions();
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
        console.log(this.props.questions)
        if (this.props.questions.length > 0) {
            return (
                <>
                    <div className="accordion container" id="accordionExample">
                        <div className="d-grid gap-2 col-6 mx-auto my-4">
                            <button className="btn btn-outline-primary" 
                                type="button" onClick={()=>{history.push("/question/create")}}>
                                    Add Question
                            </button>
                        </div>
                        {
                            this.props.questions.map((question) =>  {
                                return (
                                    <div className="accordion-item" key={question._id}>
                                        <h2 className="accordion-header" onClick={() => this.handleClick(question._id)}>
                                            <button id={"btn"+question._id} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={"#"+question._id} aria-expanded="true" aria-controls={question._id}>
                                                {question.title}
                                            </button>
                                        </h2>
                                        <div id={question._id} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <h4>{question.title}</h4>
                                                <div className="view-question-body">
                                                    <h5>Problem Statement</h5>
                                                    <p className="text-justify">{question.statement}</p>
                                                    <h6>Input Format</h6>
                                                    <p>{question.inputFormat}</p>
                                                    <h6>Output Format</h6>
                                                    <p className="text-justify">{question.outputFormat}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </>
                
            );
        }
        else {
            return <div className='container mt-5 text-center'>
                    <h3>No Questions added yet!{console.log(this.props)}</h3>
                    <div className="d-grid gap-2 col-6 mx-auto my-4">
                            <button className="btn btn-outline-primary" 
                                type="button" onClick={()=>{history.push("/question/create")}}>
                                    Add Question
                            </button>
                    </div>
                   </div>
        }
    }
}

const mapStateToProps = (state)=>{
    return {
        questions: state.questions.allQues
    }
}

export default connect(mapStateToProps,{getAllQuestions})(Accordion);