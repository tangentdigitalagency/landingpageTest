import './App.css';
import { Row, Col,Layout} from "antd";
import logo from './assets/img/logo.png';

function App() {
    const {Header, Footer, Content} = Layout;
    return (
        <div>
        <Layout>
          <Header>
             <Row>
                  <Col span={8}>
                      <a href="#"><img src={logo} width="181" alt='logo'/></a>
                  </Col>
                  <Col span={4} offset={12}><strong>Call For Free Quote</strong></Col>
             </Row>
          </Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
    </div>
    );
}

export default App;
