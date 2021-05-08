import {
    Container,
    Header,
    Content,
    Navbar,
    Icon,
    Panel,
    Dropdown,
    Nav
} from 'rsuite';

import {Form, FormGroup, FormControl, ControlLabel, HelpBlock, Button, ButtonToolbar, Uploader} from 'rsuite';
import {useState} from "react";

function Home({onSelect, activeKey, ...props}) {

   const [file, setFile] = useState([]);

    const logoStyle = {
        padding: "18px 20px", display: "inline-block"
    };
    const containerStyle = {
        height: "100%",
        maxWidth: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "25px"
    };
    function handleChange(file) {setFile({ file });}

    return (

        <Container>
            <Header>
                <Navbar {...props}>
                    <Navbar.Header>
                        <div style={logoStyle}>
                            SIRIO
                        </div>
                    </Navbar.Header>
                    <Navbar.Body>
                        <Nav>
                            <Nav.Item eventKey="1" icon={<Icon icon="home"/>}>
                                Home
                            </Nav.Item>
                            <Nav.Item eventKey="2">News</Nav.Item>
                            <Nav.Item eventKey="3">Products</Nav.Item>
                            <Dropdown title="About">
                                <Dropdown.Item eventKey="4">Company</Dropdown.Item>
                                <Dropdown.Item eventKey="5">Team</Dropdown.Item>
                                <Dropdown.Item eventKey="6">Contact</Dropdown.Item>
                            </Dropdown>
                        </Nav>
                        <Nav pullRight>
                            <Nav.Item icon={<Icon icon="cog"/>}>Settings</Nav.Item>
                        </Nav>
                    </Navbar.Body>
                </Navbar>
            </Header>
            <Content style={containerStyle}>
                <Panel header="Panel title" bordered style={{width: "600px"}}>
                    <p/>
                    <Form fluid>
                        <Uploader
                            fileList={setFile.file}
                            onChange={handleChange}
                        />
                        <FormGroup>
                            <ControlLabel>Username</ControlLabel>
                            <FormControl name="name"/>
                            <HelpBlock>Required</HelpBlock>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Email</ControlLabel>
                            <FormControl name="email" type="email"/>
                            <HelpBlock>Required</HelpBlock>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Password</ControlLabel>
                            <FormControl name="password" type="password"/>
                        </FormGroup>
                        <FormGroup>
                            <ControlLabel>Textarea</ControlLabel>
                            <FormControl rows={5} name="textarea" componentClass="textarea"/>
                        </FormGroup>
                        <FormGroup>
                            <ButtonToolbar>
                                <Button appearance="default" color="green">Submit</Button>
                                <Button appearance="default">Cancel</Button>
                            </ButtonToolbar>
                        </FormGroup>
                    </Form>
                </Panel>
            </Content>
        </Container>
    );
}

export default Home;
