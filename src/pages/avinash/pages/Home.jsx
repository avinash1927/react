import { Button } from 'bootstrap';
import React, { Component } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';

class Home extends Component {

    render() {
        return (
                
                <Row>
                    <Col md="4">  
                    <div class="card">
                        <div className="card-body">
                        <h5 class="card-title">About</h5>
                        “Every life is precious...” has always been the guiding principle of Hon’ble Chief Minister Naveen Patnaik. The vision of Hon’ble Chief Minister has been to provide assurance of quality health care to all the citizens of the State, especially the vulnerable sections. With this objective, Biju Swasthya Kal
                        </div>
                    </div>
                    </Col>
                    <Col md="4">  
                    <div class="card">
                        <div className="card-body">
                        <h5 class="card-title">Services</h5>
                        State Government will bear full cost of all health services delivered to all patients (irrespective of income, status or residence) in all State Government health care facilities starting from Sub centre level to District Head Quarter and Government Medical College Hospital and Blood Bank level.
                        </div>
                    </div>
                    </Col>
                    <Col md="4">  
                    <div class="card">
                        <div className="card-body">
                        <h5 class="card-title">Benefits</h5>
                        State Government will bear the cost of healthcare provided in empanelled private hospitalsfor over 96.5 lakh economically vulnerable families in the State, amounting to Annual Health coverage of Rs. 5 lakh per family and additional Rs. 5lakh for the women members of the family after exhaust of initial limit.
                        </div>
                    </div>
                    </Col>
                    <Col className='content'>
                        <h3>Details of BSKY</h3>
                    Additional facility of free healthcare beyond Government Medical College hospitals for over 70 lakh families, through annual health coverage of Rs. 5 lakh per annum (Rs. 10 lakh for women members) per family per annum in private empanelled hospitals within and outside the State & all Government Hospitals and premier health institutes outside the State. All Biju Krushak Kalyan Yojana card holders, BPL card holder, AAY card holders and low income families are covered under this benefit.
                    <br></br>
                    ree health services for all (irrespective of income, status or residence) in all State Government health care facilities starting from Sub center level to Government Medical College and Hospitals and all Government Blood Bank level. All treatment is cashless and no document is required to be produced.
                    </Col>
                    {/* <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                        </Form> */}
                </Row>
        );
    }
}

export default Home;