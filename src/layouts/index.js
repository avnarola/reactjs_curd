import React from 'react';
import Header from './header';
import { Container } from '@material-ui/core';

export default function Layout(props) {
	return (
		<div>
			<Header />
      <Container>
          {props.children}
      </Container>
		</div>
	);
}
