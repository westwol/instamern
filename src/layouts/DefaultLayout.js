import React from 'react';
import PropTypes from 'prop-types';
import { Container } from "semantic-ui-react";
import { Header } from '../components';

export const DefaultLayout = ({ children }) => {
    return (
        <>
            <Header />
            <Container>
                { children }
            </Container>
        </>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.element.isRequired
};
  