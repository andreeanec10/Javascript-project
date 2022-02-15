import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import Menu from './app/menu/menu';
import Employees from './app/employees/employees';

export default(
    <Route path="/" component={Menu}>
        <Route path="/employees" component={Employees}/>
    </Route>
)
