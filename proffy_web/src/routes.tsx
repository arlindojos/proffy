import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/landing';
import TheacherList from './pages/TeacherList';
import TheacherForm from './pages/TeacherForm';


const Routes = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={Landing} />
            <Route path="/study" component={TheacherList} />
            <Route path="/give-classes" component={TheacherForm} />
        </BrowserRouter>
    );
}

export default Routes;