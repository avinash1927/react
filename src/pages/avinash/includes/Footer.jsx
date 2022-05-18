import React, {Component} from 'react';
import { Col, Row } from 'react-bootstrap';

export default class Footer extends Component {
    render(){
        return (
            <footer class="footer">
                 <Row>
                    <Col><span class="text-muted">&copy; 2022 || Design and Developed By Avinash</span></Col>
                </Row>
            </footer>

        )
    }
}