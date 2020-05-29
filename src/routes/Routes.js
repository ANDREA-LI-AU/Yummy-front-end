import React from 'react';
import {  Route, Switch } from 'react-router-dom';
import { HOME_URL, UPLOAD_PROFILE_URL, CATE_URL, DASHBOARD_URL, TRENDING_URL } from './URLMap';
import Home from '../Home/Home';
import UploadPage from '../UploadPage/UploadPage';
import Category from '../Categories/Categories';
import Dashboard from '../Dashboard/Dashboard';


const Routes = () => {
    return( 
    <Switch>
    <Route exact path={HOME_URL} component={Home}/>
    <Route exact path={UPLOAD_PROFILE_URL} component={UploadPage}/>
    <Route exact path={CATE_URL} component={Category}/>
    <Route exact path={DASHBOARD_URL} component={Dashboard}/>
    </Switch>)
}

export default Routes;

