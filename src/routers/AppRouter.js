import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
import {DcScreen, MarvelScreen} from '../component/dc/DcScreen';


export const AppRouter = () => {
    return (<Router>
        <div>
            <Switch>
                <Route exact path="/" component={DcScreen}/>
            </Switch>
        </div>
    </Router>)
}