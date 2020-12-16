import React, { useState, useEffect } from "react";
import { Container, Row, Col } from 'reactstrap';

const Header = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Tic Tac Toe</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default Header