import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { connect } from 'react-redux';
import {postSession} from '../../actions/sessions'
import history from '../../history'

import './css/create.css';

class Users extends React.Component{
    constructor(props){
        super(props);
        this.state = {users: [], email: ""}
    }
    UserList = (users) => {
        return users.map((i)=>{
            return (
                <div id = {i.id} className="input-group mb-3">
                    <input type="text" className="form-control" value={i.email} readOnly="readonly"/>
                    <button className="btn btn-danger"
                        onClick={
                            (e)=>{
                                e.preventDefault();
                                let newUsers = [];
                                let c = 0;
                                for (let j in this.state.users) {
                                    if(this.state.users[j].id != i.id){
                                        newUsers.push({id: c, email: this.state.users[j].email});
                                        c++;
                                    }
                                }
                                this.setState({
                                    users: newUsers
                                });
                            }
                        }>
                    Delete</button>
                </div>
            );
        })
    }
    componentDidUpdate(){
        this.props.input.onChange(this.state.users.map((i)=> { return i.email}));
    }
    render(){
        return(
                <div className="form-group my-3">
                    <label className="my-1">{this.props.label}</label>
                    { this.UserList(this.state.users) }
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Email" 
                            value = {this.state.email}
                            onChange = {(e)=>{this.setState({email: e.target.value})}}
                            />
                        <button className="btn btn-primary"
                            onClick = {(e)=>{
                                e.preventDefault();
                                this.setState((prevState)=> ({users: [...prevState.users, 
                                    {
                                        id: prevState.users.length,
                                        email: prevState.email
                                    }],
                                    email:""
                                }));
                        }}>Add</button>
                    </div>
                </div>
        )
    }
    

}
class Create extends React.Component{

    onSubmit=(values)=>{
        this.props.postSession(values);
        this.setState({
            redirect: true
        })
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
                    Create Interview
                </h3>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="title" component={this.inputText} label="Title" type="text"/>
                    <Field name="interviewer" component={Users} label="Interviewers" type="text"/>
                    <Field name="interviewee" component={Users} label="Interviewees" type="text"/>
                    <button className="btn btn-danger my-3 mx-2" onClick={()=>{history.goBack()}}>Cancel</button>
                    <button type="submit" className="btn btn-primary my-3 mx-2">Submit</button>
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


export default connect(null,{postSession})(formWrapper);