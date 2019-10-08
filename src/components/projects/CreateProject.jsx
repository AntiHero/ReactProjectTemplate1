import React, { Component } from 'react';
import { createProject } from '../../store/actions/projectActions';
import { connect } from 'react-redux';

class CreateProject extends Component {
  state = {
    title: '',
    content: '',
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    // this.setState({
    //     title: '',
    //     content: '',
    // })
    console.log(this.state);
    this.props.createProject(this.state)
  }

  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create project</h5>
          <div className="input-field">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" value={this.state.title} onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="content">Content</label>
            <textarea 
              id="content" 
              value={this.state.content} 
              className="materialize-textarea" 
              onChange={this.handleChange}>  
            </textarea>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">CREATE</button>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps2 = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProject(project))
  }
}

export default connect(null, mapDispatchToProps2)(CreateProject);