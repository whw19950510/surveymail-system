import React from "react";
import {Component} from "react";
import {reduxForm} from "redux-form";
import SurveyForm from "./SurveyForm";
import SurveyFormReview from "./SurveyFormReview";
//shows surveyForms && surveyForm reviews
class SurveyNew extends Component {
    constructor(props) {
        super(props);
        this.state={showFormReview :false};
    }
    renderContent(){
        if(this.state.showFormReview) {
            return <SurveyFormReview onCacel={()=>this.setState({showFormReview:false})}/>
        }
        return (
        <SurveyForm onSurveySubmit={()=>this.setState({showFormReview:true})}
        />
        );
    }
    render(){
        return (
            <div>
                {this.renderContent()}
            </div>
        )
    }
    
}

export default reduxForm({form:"surveyForm"})(SurveyNew);