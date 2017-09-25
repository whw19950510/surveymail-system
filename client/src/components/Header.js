import React from "react";
import {Component} from "react";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:return;
            case false:return <li><a href="/auth/google">Log in With Google</a></li>;
            default:return <li><a href="api/logout">Log out</a></li>;
        }
    }
    render(){
        console.log(this.props);
        return (
            <nav>
                <div className="nav-wrapper">
                    <Link 
                    to={this.props.auth?"/surveys":"/"} 
                    className="left brand-logo"
                    >
                    Emaily-survey 
                    </Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        
                        <li><a href="/auth/google">Log In</a></li>
                        <li><a href="/surveys">DashBoard</a></li>
                        <li><a href="/surveys/new">SurveyNew</a></li>
                        
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
        );
    }
}
function mapStateToProps({auth}) {
    return {auth};
}
export default connect(mapStateToProps)(Header);