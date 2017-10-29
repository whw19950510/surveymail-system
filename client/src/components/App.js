import React,{Component} from "react";
import {Route,BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import * as actions from "../actions";
import Landing from "./Landing";
import Header from "./Header";
import DashBoard from "./Dashboard";
import SurveyNew from "./Surveys/SurveyNew";

class App extends Component{
    componentDidMount(){
        this.props.fetchUser();
    }
    render(){
        return (
            <div className="container">
                <BrowserRouter>
                    <div className="container">
                        <Header />
                        <Route exact={true} path="/" component={Landing}/>
                        <Route exact={true} path="/surveys" component={DashBoard}/>
                        <Route path="/surveys/new" component={SurveyNew}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null,actions)(App);