

import { Container, Header, Content, Navbar, Icon, Footer, Dropdown, Nav } from 'rsuite';
import { Grid, Row, Col } from 'rsuite';

function Home({ onSelect, activeKey, ...props }) {
  const mystyle = {
    padding: "18px 20px", display: "inline-block"
  };
    return (


<div> <Divider>justify="center"</Divider>
    <FlexboxGrid justify="center">
      <FlexboxGrid.Item colspan={4}>colspan={4}</FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={4}>colspan={4}</FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={4}>colspan={4}</FlexboxGrid.Item>
      <FlexboxGrid.Item colspan={4}>colspan={4}</FlexboxGrid.Item>
    </FlexboxGrid></div>
    );
}

export default Home;