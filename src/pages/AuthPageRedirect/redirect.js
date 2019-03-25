import React, { Component } from 'react'

export default class Redirect extends Component {
    componentDidMount(){ 
        this.props.history.push('/')
    }
    render() {
    return (
      <div/>
    )
  }
}
