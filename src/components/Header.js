import {Container, Row, Col} from "react-bootstrap";
import '../css/Header.css'

function Header() {
    return <div>
        <header className="Luna-header">
            <Container>
                <Row>
                    <Col sm={3} style={{textAlign:"left"}}>
                        <strong>LUNA</strong>
                    </Col>
                    <Col sm={6} style={{textAlign:"center"}}>
                        <a className="mx-2" href="/">HOME</a>
                        <a className="mx-2" href="/">FIND ME A DOCTOR</a>
                        <a className="mx-2" href="/">DOCTORS</a>
                    </Col>
                    <Col sm={3} style={{textAlign:"right"}}>
                        Your Name
                    </Col>
                </Row>
            </Container>
            
        </header>
    </div>
}

export default Header;