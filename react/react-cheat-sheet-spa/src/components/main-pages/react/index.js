import React from 'react';
import { Route } from 'react-router-dom';

import ControlledForm from './form/ControlledForm';
import ReactContext from './context/ReactContext';
import UtilHooks from './util-hooks';

const ReactPage = () => {
    return (
        <>
            <Route path="/react/form-control" component={ControlledForm} />
            <Route path="/react/context" component={ReactContext} />
            <Route path="/react/util-hooks" component={UtilHooks} />
        </>
    );
}

export default ReactPage;