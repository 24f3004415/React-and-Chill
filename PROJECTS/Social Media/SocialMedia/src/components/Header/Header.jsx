import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import styles from './Header.module.css'

const Header = () => {
    return (
        <div >
            <Navbar expand="lg" className="bg-dark ">
                <Container className={styles.container}>
    <div className={styles.formDiv}>
        <Form>
            <InputGroup>
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                <Form.Control
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
            </InputGroup>
        </Form>
    </div>
    <div className={styles.buttons}>
        <Button variant="primary" className='m-1'>LogIn</Button>
        <Button variant="secondary">SignUp</Button>
    </div>
</Container>
            </Navbar>
        </div>
    )
}

export default Header
