import React from 'react'
import './style.css'
import Title from "../../components/title";
import {GoldCompanyProfile, SilverCompanyProfile, BronzeCompanyProfile} from "../../components/company-profile";
import {Container, Row, Col} from "react-bootstrap";

function Sponsors() {

    return (
        <section id={'sponsors'}>
            <Title name={'SPONSORS'} />
            <Container className={'gold-sponsors-container'}>
                <Row md={1} xs = {1}>
                    <GoldCompanyProfile src={process.env.PUBLIC_URL + '/img/sig_square.png'} name={'SIG'}/>
                </Row>
            </Container>
            <Container className={'silver-sponsors-container'}>
                <Row md={2} xs={1}>
                    <Col>
                        <SilverCompanyProfile src={process.env.PUBLIC_URL + '/img/flow-trader.png'} name={'Flow Traders'}/>
                    </Col>
                    <Col>
                        <SilverCompanyProfile src={process.env.PUBLIC_URL + '/img/da-vinci.png'} name={'Da Vinci'}/>
                    </Col>
                </Row>
            </Container>
            <Container className={'bronze-sponsors-container'}>
                <Row md={2} xs={1}>
                    <Col>
                        <BronzeCompanyProfile src={process.env.PUBLIC_URL + '/img/imc.jpg'} name={'IMC Trading'}/>
                    </Col>
                    <Col>
                        <BronzeCompanyProfile src={process.env.PUBLIC_URL + '/img/jane-street.png'} name={'Jane Street'}/>
                    </Col>
                </Row>
            </Container>
        </section>
    )

}

export default Sponsors
