import './App.css';
import { Row, Col,Layout,Button} from "antd";
import logo from './assets/img/logo.png';
import heroImg from './assets/img/hero-img.jpg';
import { ArrowRightOutlined} from '@ant-design/icons';
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
          <Content>
              <section className="section-one" >
                <Row>
                  <Col span={24}>
                      <div className="container-1">
                         <div className="block-left-hero">
                            <Row>
                             <Col span={12}>
                                 <h1 className="hero_heading">Better Coverage with Quantum. Get a free Commercial Insurance Quote</h1>
                                 <p className="text-white para-white">A business owners policy includes protection for all major property and liability risk in one package. Offers protection to business owners against property damage, peril, business interruption, and liability. Get a free quote with Quantum today and see if your business qualifies for Business Owners Policy. </p>
                                <Button type="block " size="large" className="btn-large text-blue">
                                          Free Commercial Quote <ArrowRightOutlined />
                                        </Button>
                             </Col>
                             <Col span={12}>
                                 <div className="block-right-hero">
                                 <img src={heroImg} alt="heroImage" className="image-109" sizes="(max-width: 479px) 100vw, (max-width: 767px) 94vw, (max-width: 1279px) 45vw, 570px"/>
                                </div>
                             </Col>
                            </Row>
                        </div>
                      </div>
                  </Col>
                </Row>
              </section>
          </Content>
          <Footer>Footer</Footer>
        </Layout>
    </div>
    );
}

export default App;
