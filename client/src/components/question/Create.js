import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import {postQuestionDetails} from '../../actions/questions'

import './css/create.css';

class TestCases extends React.Component{
    constructor(props){
        super(props);
        this.state = {testcases: [], input: "", output:""}
    }
    TestCaseList = (testcases) => {
        return testcases.map((i)=>{
            return (
                <div id = {i.id} className="input-group mb-3">
                    <textarea type="text" className="form-control" value={i.input} readOnly="readonly"/>
                    <textarea type="text" className="form-control" value={i.output} readOnly="readonly"/>
                    <button className="btn btn-danger"
                        onClick={
                            (e)=>{
                                e.preventDefault();
                                let newTestcases = [];
                                let c = 0;
                                for (let j in this.state.testcases) {
                                    if(this.state.testcases[j].id != i.id){
                                        newTestcases.push({id: c, input: this.state.testcases[j].input,
                                            output: this.state.testcases[j].output});
                                        c++;
                                    }
                                }
                                this.setState({
                                    testcases: newTestcases
                                });
                            }
                        }>
                    Delete</button>
                </div>
            );
        })
    }
    componentDidUpdate(){
        this.props.input.onChange(this.state.testcases.map((i)=> { return {input: i.input, output: i.output}}));
    }
    render(){
        return(
                <div className="form-group my-3">
                    <label className="my-1">{"Test Cases"}</label>
                    { this.TestCaseList(this.state.testcases) }
                    <div className="input-group mb-3">
                        <textarea type="text" className="form-control" placeholder="Input" 
                            value = {this.state.input}
                            onChange = {(e)=>{this.setState({input: e.target.value})}}
                            />
                        <textarea type="text" className="form-control" placeholder="Output" 
                            value = {this.state.output}
                            onChange = {(e)=>{this.setState({output: e.target.value})}}
                            />
                        <button className="btn btn-primary"
                            onClick = {(e)=>{
                                e.preventDefault();
                                this.setState((prevState)=> ({testcases: [...prevState.testcases, 
                                    {
                                        id: prevState.testcases.length,
                                        input: prevState.input,
                                        output: prevState.output
                                    }],
                                    input:"",
                                    output:""
                                }));
                        }}>Add</button>
                    </div>
                </div>
        )
    }
    

}
class Create extends React.Component{
    constructor(props){
        super(props);
        this.state = {testcases: [], input: "", output:""}
    }
    onSubmit=(values)=>{
        this.props.postQuestionDetails(values);
    }
    
    inputTextArea = ({input,label}) =>{
        return(
        <div className="form-group">
            <label htmlFor={input.name}>{label}</label>
            <textarea className="form-control" id={input.name} rows="3" {...input}></textarea>
        </div>        
        )
    }
    inputText = ({input,label}) =>{
        return(
        <div className="form-group">
            <label htmlFor={input.name}>{label}</label>
            <input className="form-control" id={input.name} rows="3" {...input}></input>
        </div>        
        )
    }

    render(){
        return(
            <div className="form">
                <h3>
                    Create a question
                </h3>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="title" component={this.inputText} label="Problem Title" type="text"/>
                    <Field name="statement" component={this.inputTextArea} label="Statement" type="text"/>
                    <Field name="inputFormat" component={this.inputTextArea} label="Input Format" type="text"/>
                    <Field name="outputFormat" component={this.inputTextArea} label="Output Format" type="text"/>
                    <Field name="testcases" component={TestCases} label="Output Format" type="text"/>
                    <button type="submit" className="btn btn-primary my-3">Submit</button>
                </form>
            </div>
        )
    }
}

const validate = (values)=>{}

const formWrapper = reduxForm({
    form: 'newAccountFormRegisters',
    validate: validate
})(Create);


export default connect(null,{postQuestionDetails})(formWrapper);