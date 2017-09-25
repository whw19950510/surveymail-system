import React,{Component} from "react";
import {Route,BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import * as actions from "../actions";
import Landing from "./Landing";
import Header from "./Header";
const DashBoard = ()=><h2>DashBoard</h2>;
const SurveyNew = ()=><h2>SurveyNew</h2>;

class App extends Component{
    componentDidMount(){
        this.props.fetchUser();
    }
    render(){
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
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