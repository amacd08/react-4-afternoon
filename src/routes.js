import React from 'react'
import Home from './components/Home/Home'
import About from './components/About/About'
import ClassList from './components/ClassList/ClassList'
import Student from './components/Student/Student'
import {Switch, Route} from 'react-router-dom'

export default(
    <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/about' component={About}></Route>
        <Route path ='/classlist/:class' component={ClassList}></Route>
        <Route path ='/student/:id' component={Student} />
    </Switch>

)