import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { HOME_URL, UPLOAD_PROFILE_URL } from './URLMap';
import Home from '../Home/Home';
import UploadPage from '../UploadPage/UploadPage';


const Routes = () => {
    return( <Switch>
    <Route exact path={HOME_URL} component={Home}/>
    <Route exact path={UPLOAD_PROFILE_URL} component={UploadPage}/>
    </Switch>)
}

export default Routes;

