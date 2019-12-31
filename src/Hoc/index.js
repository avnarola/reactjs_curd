
import React, { Component } from 'react';
import Header from '../layouts/header';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../layouts';

let withHeader = (ChildComponent) => {
  return class containerLayout extends Component {
    constructor(props) {
      super(props)
      this.state = {
        name:"hello"
      }
    }
    render() {
      	return (
          <BrowserRouter>
            <Layout>
              <ChildComponent {...this.props} {...this.state} />
            </Layout>
			    </BrowserRouter>
        )
    }
  }
}

export default (withHeader);
