import axios from "axios";
import {FETCH_USER,FETCH_SURVEYS} from "./types";
export const fetchUser = ()=>{
    return function(dispatch){
        axios
        .get("/api/current_user")
        .then(res=>dispatch({type:FETCH_USER,payload:res.data}));
    };
    
};

export const handleToken=(token)=>{
    return function(dispatch){
        axios
        .post("/api/stripe",token)
        .then(res=>dispatch({type:FETCH_USER,payload:res.data}));
    };
}

export const submitSurvey=(values,history)=>{
    return function(dispatch){
        axios
        .post("/api/surveys",values)
        .then(res=>dispatch({type:FETCH_USER,payload:res.data}));
        history.push("/surveys");
    };
}

export const fetchSurveys=()=>{
    return function(dispatch){
        axios
        .get("/api/surveys")
        .then(res=>dispatch({type:FETCH_SURVEYS,payload:res.data}));
    };
}
