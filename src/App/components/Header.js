import {
    Header,
    Navbar
} from 'rsuite';

function header({onSelect, activeKey, ...props}) {

    const logoStyle = {
        padding: "20px",
    };

    return (
        <Header>
            <Navbar {...props}>
                <Navbar.Header>
                    <div style={logoStyle}>
                        SIRIO
                    </div>
                </Navbar.Header>
                <Navbar.Body>
                </Navbar.Body>
            </Navbar>
        </Header>
    );
}

export default header;



