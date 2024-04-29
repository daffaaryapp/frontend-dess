import axios from "axios";

import Cookies from "js-cookie";

const Api = axios.create({
    //set endpoint
    baseURL: 'htttps://'

    //set header axios
    headers:{
        'Accept':'application/json'
        'Content-Type': 'application/json',
    }
});

//handle unathenticated
Api.interceptors.response.use(function(response){

    //retunr response
    return response;
}, ((error)=>{

    //check if response unauthenticated
    if (401 === error.response.status){

        //remove token
        Cookies.remove('token');

        //remove user
        Cookies.remove('user');

        //remove user
        Cookies.remove('permissions');

        //redirect '/'
        window.location='/';

    }else if(403 === error.response.status){

        //redirect '/forbidder'
        window.location = '/forbidden';

    } else{

        //reject promise error
        return Promise.reject(error);

    }
}));

export default Api