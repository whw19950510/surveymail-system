import _ from "lodash";
import React from "react";
import {Component} from "react";
import {reduxForm,Field} from "redux-form";
import {Link} from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validaEmails";
//shows a form for user to add input
import FIELD from "./formFields";
class SurveyForm extends Component {
    renderFields() {
        return _.map(FIELD,field=>{
            return <Field key={field.name} label={field.label} type="text" name={field.name} component={SurveyField}/>
        });
    }
    render(){
        return (
            <div>
                <form onSubmit = {this.props.handleSubmit(this.props.onSurveySubmit)}>
                {this.renderFields()}
                <Link to="/surveys"className="red btn-flat white-text">Cancel</Link>
                <button type="submit" className="teal btn-flat right white-text">
                    Next
                    <i className="material-icons right">done</i>
                </button>
                </form>
            </div>
        )
    }
    
}
function validate(values) {
    const error={};
    error.emails=validateEmails(values.recipients|| "");
    if(!values.title) {
        error.title="Please provide a title";
    }
    if(!error.subject) {
        error.subject="Please provide a subject";
    }
    if(!error.body) {
        error.body="Please provide a body";
    }

    return error;
}
export default reduxForm({
    validate:validate,
    form:"surveyForm",
    destroyUnmount:false
})(SurveyForm);