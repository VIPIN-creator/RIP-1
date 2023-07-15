import React from 'react';
import {Field, reduxForm} from 'redux-form';
import history from '../../history'
import { connect } from 'react-redux';

import {createUser} from '../../actions/users';
import clearFormErrors from '../../actions/clearFormErrors';
import './css/signup.css';

class SignUp extends React.Component{
    onSubmit=(values)=>{
        const userBody={
            firstname: values.userFirstName ,
            lastname: values.userLastName?values.userLastName:"",
            email : values.userEmail,
            password : values.userPassword,
            type : values.userType?values.userType:"standard"
        }
        this.props.createUser(userBody);
        this.setState({redirect: true});
    }
    inputField = ({input,label,meta,type,errMsg})=>{
        const errorHandler=({error,touched})=>{
            if(touched){
                return <small className="text-danger">{error}</small>
            }
            else return null
        }
        const successCheck=({error,touched})=>{
            if(touched && error){
                return "is-invalid"
            }
            else if(touched && !error){
                return "is-valid"
            }
            else return null
        }
        return(
            <div className="form-group my-3">
                <label htmlFor={input.name} className="my-1">{label}</label>
                <input type={type} 
                    className={`form-control ${successCheck(meta)}`} 
                    id={input.name} 
                    {...input}
                />
                {(errMsg)?errorHandler({error:errMsg, touched:true}):errorHandler(meta)}
            </div>
        )
    }

    componentWillUnmount=()=>{
        if(!this.props.successMessage){
            this.props.clearFormErrors();
        }
    }
    render(){
        return(
            <div className="form">
                <h3>
                    Create a new account
                </h3>
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="userFirstName" component={this.inputField} label="First Name" type="text"/>
                    <Field name="userLastName" component={this.inputField} label="Last Name" type="text"/>
                    <Field name="userEmail" component={this.inputField} label="Email address"  type="email"/>
                    <Field name="userPassword" component={this.inputField} label="Enter a new password" type="password"/>
                    <Field name="userPasswordR" component={this.inputField} label="Confirm password" type="password"/>
                    <label  className="my-1" htmlFor="userType">{"User Type"}</label>
                    <Field name="userType" component="select" default="standard" className="form-group form-control">
                        <option value="standard">Standard</option>
                        <option value="admin">Admin</option>
                    </Field>
                    <button className="btn btn-danger my-3 mx-2" onClick={()=>{history.goBack()}}>Cancel</button>
                    <button type="submit" className="btn btn-primary my-3">Submit</button>
                </form>
            </div>
        )
    }
}

const validate = (values)=>{
    const err={};
    // eslint-disable-next-line
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(values.userPassword && values.userPassword.length < 5){
        err.userPassword = "Password too short"
    }
    else if(values.userPasswordR !== values.userPassword){
        err.userPasswordR = "Password do not match"
    }
    if(!values.userFirstName){
        err.userFirstName = "This is required"
    }
    if(values.userEmail && !(mailformat.test(values.userEmail))){
        err.userEmail = `Enter a vaild 'Email Id'`
    }
    return err;
}

const formWrapper = reduxForm({
    form: 'newAccountFormRegisters',
    validate: validate
})(SignUp);

const mapStateToProps = (state)=>{
    return {
        errMsg: state.formSubmitErrors.signupErrMsg,
        successMessage: state.formSubmitSuccess.signupSucMsg
    }
}

export default connect(mapStateToProps,{createUser,clearFormErrors})(formWrapper);