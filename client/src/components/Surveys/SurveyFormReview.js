import _ from "lodash";
import React from "react";
import {connect} from "react-redux";
import formFields from "./formFields";
import * as actions from "../../actions";
import {withRouter} from "react-router-dom";
const SurverFormReview=({onCancel,formValues,submitSurvey,history})=>{
    const reviewFields=_.map(formFields,field=>{
        return (
            <div key="field.name">
                <label>{field.label}</label>
                <div>
                    {formValues[field.name]}
                </div>
            </div>
        )
    });
    return (
        <div>
            <h5>Please review your form</h5>
            {reviewFields}
            <button className="yellow btn-flat darken-3" 
            onClick={onCancel}>
            Back
            </button>
            <button onClick={()=>submitSurvey(formValues,history)}className="btn-flat green right white-text">
                Send surveyform
                <i className="material-icons right">email</i>
            </button>
        </div>

    )
}
function mapStateToProps(state){
    return {formValues:state.form.surveyForm.values}
}
export default connect(mapStateToProps,actions)(withRouter(SurverFormReview));