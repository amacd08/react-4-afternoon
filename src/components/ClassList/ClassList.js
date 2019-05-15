import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class ClassList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      students: []
    }
    
  }

  componentDidMount = () => {
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`).then(res => {
      this.setState({
        students: res.data
      })
    })
  }

  render() {
    let classRole = this.state.students.map((individual, i) => {
      return (
        <Link to={`/student/:${individual.id}`}key={i}><h3 >{`${individual.first_name}${individual.last_name}`}</h3></Link>
      )
   })
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        {classRole}
      </div>
    )
  }
}