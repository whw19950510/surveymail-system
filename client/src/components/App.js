import React from "react";
import {Route,BrowserRouter} from "react-router-dom";
const Header = ()=><h2>Header</h2>;
const DashBoard = ()=><h2>DashBoard</h2>;
const SurveyNew = ()=><h2>SurveyNew</h2>;
const Landing = ()=><h2>Landing</h2>;
const App = ()=>{
    return (
        <div>
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

export default App;