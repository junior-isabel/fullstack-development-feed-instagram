import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Feed from './pages/feed/feed'
import New from './pages/new/new'
export default () => (
    <Switch>
        <Route path="/new" component={New} />
        <Route path="/" component={Feed} />
    </Switch>
)