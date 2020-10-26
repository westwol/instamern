import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Grid, Image } from "semantic-ui-react";
import { Searchbar } from "./Searchbar";
import { RightHeader } from './RightHeader';
import { usersFind } from '../../api/users';

export default function Header() {

    return (
        <div className="header">
            <Container>
                <Grid>
                    <Grid.Column width={3} className="header__logo">
                        <Link to="/">
                            <Image src="../assets/logo.png" alt="Instamern" />
                        </Link>
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Searchbar />
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <RightHeader />
                    </Grid.Column>
                </Grid>
            </Container>
        </div>
    )
}

