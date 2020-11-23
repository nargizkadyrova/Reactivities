import React from 'react'
import { Button, Container, Header, Segment, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <Segment inverted textAlign='center' vertical className='masthead' >
            <Container text>
                <Header as='h1' inverted>
                    <Image size='massive' src='/assets/logo.png' alt='logo' style={{ marginBottom: 12 }} />
                        Reactivities
                    </Header>
                <Header as='h2' inverted content='Welcome to Reactivities - Simple Project by Nargiz Kadyrova' />
                <Button as={Link} to='/activities' size='huge' inverted>
                    Let's start!
                </Button>
            </Container>
        </Segment>
    )
}

export default HomePage;