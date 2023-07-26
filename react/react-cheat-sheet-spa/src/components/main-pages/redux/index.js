import React from 'react';
import { Route } from 'react-router-dom';

import ReduxBoilerplate from './boilerplate';
import ReduxForm from './form/ReduxForm';

const ReduxPage = () => {
    return (
        <>
            <Route path="/redux/boilerplate" component={ReduxBoilerplate} />
            <Route path="/redux/redux-form" component={ReduxForm} />
        </>
    )
}

export default ReduxPage;