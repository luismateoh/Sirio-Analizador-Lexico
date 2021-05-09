import {
    Container,
    Content,
    Row,
    Col
} from 'rsuite';
import Header from "../components/Header"
import Form from "../components/Form"


function Home({ onSelect, activeKey, ...props }) {

    const containerStyle = {
        height: "100%",
        maxWidth: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "25px"
    };

    return (

        <Container>
            <Header />
            <Content style={containerStyle}>
                <Col>
                    <Row>
                        <Form/>
                    </Row>
                </Col>
            </Content>
        </Container>
    );
}

export default Home;
