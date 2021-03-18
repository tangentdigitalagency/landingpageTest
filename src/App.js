import './App.css';
import {Button, Col, Layout, Row} from "antd";
import logo from './assets/img/logo.png';
import farmers from './assets/img/farmers.png';
import progressive from './assets/img/progressive.png';
import travelers from './assets/img/travelers.png';
import stateAuto from './assets/img/state-auto.png';
import heroImg from './assets/img/hero-img.jpg';
import connectImg from './assets/img/connection.png';
import {ArrowRightOutlined, CheckOutlined} from '@ant-design/icons';

function App() {
    const {Header, Footer, Content} = Layout;

    return (
        <div>
        <Layout>
          <Header>
             <Row>
                  <Col xs={{span: 24}} lg={{span: 12}}>
                      <a href="#"><img src={logo} width="181" alt="logo"/></a>
                  </Col>
                  <Col xs={{span: 24}} lg={{span: 12}} className="text-right"><strong>Call For Free Quote</strong></Col>
             </Row>
          </Header>
          <Content>
              <section className="section-one">
                <Row>
                  <Col span={24}>
                      <div className="container-1">
                         <div className="block-left-hero">
                            <Row>
                             <Col xs={{span: 24}} lg={{span: 12 }}>
                                 <h1 className="hero_heading">Better Coverage with Quantum. Get a free Commercial Insurance Quote</h1>
                                 <p className="text-white para-white">A business owners policy includes protection for all major property and liability risk in one package. Offers protection to business owners against property damage, peril, business interruption, and liability. Get a free quote with Quantum today and see if your business qualifies for Business Owners Policy. </p>
                                <Button type="block " size="large" className="btn-large text-blue">
                                          Free Commercial Quote <ArrowRightOutlined/>
                                        </Button>
                             </Col>
                             <Col xs={{span: 24}} lg={{span: 12 }}>
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
               <section className="section-two">
                   <div className="section-two-container">
                        <Row>
                            <Col span={24}>
                                  <p className="cl01_title">We are partnered with top rated companies<br/></p>
                            </Col>
                        </Row>
                       <div className="section-two-img-container">
                             <Row>
                                <Col xs={{span: 24}} lg={{span: 12}} className="section-two-imgs">
                                  <img src={travelers} alt="logo1"/>
                                </Col>
                                <Col xs={{span: 24}} lg={{span: 9, offset: 3}} className="section-two-imgs">
                                   <img src={progressive} alt="logo1" className="ml-1"/>
                                </Col>
                             </Row>
                             <Row>
                                <Col xs={{span: 24}} lg={{span: 12}} className="section-two-imgs">
                                  <img src={stateAuto} alt="logo1"/>
                                </Col>
                                <Col xs={{span: 24}} lg={{span: 10, offset: 2}} className="section-two-imgs">
                                   <img src={farmers} alt="logo1"/>
                                </Col>
                             </Row>
                       </div>
                   </div>
               </section>
              <section className="container">
                  <Row>
                      <Col span={24}>
                      <h1 className="font-weight-bold ml-md-5">Business insurance</h1>
                      </Col>
                  </Row>
                  <Row>
                      <Col xs={{span: 24}} lg={{span: 12}}>
                      <p>A business owners policy includes protection for all major property and liability risk in one package. Offers protection to business owners against property damage, peril, business interruption, and liability. Get a free quote with Quantum Assurance today and see if your business qualifies for Business Owners Policy. </p>
                          <p>These policies are better suited for smaller businesses as they have more personal financial exposure in the event of a loss. As a business owner, you must ensure that all aspects of your business are covered. From property damage to legal liabilities to employee-related risk.</p>
                          <p>At Quantum, we offer the best coverage available for your business. Get your free quote today and check out what would be the best fit for your business.</p>
                      <Button type="block " size="large" className="btn-large text-white bg-blue">
                                          Start Your Free Qoute <ArrowRightOutlined/>
                                        </Button>
                      </Col>
                      <Col xs={{span: 24}} lg={{span: 12}}>
                      <div className="service-main-image business">
                      </div>
                      </Col>
                  </Row>

              </section>
              <section className="container  my-3">
                  <Row>
                      <Col span={24}>
                      <h3 className="mx-auto text-center">You should consider a Business Owners Policy if you:</h3>
                      </Col>
                  </Row>
                  <Row className="mt-3">
                      <Col xs={{span: 24}} lg={{span: 12}}>
                    <ul>
                        <li className="list-item-2"><h6 className="h6-heading list">Need general liability insurance coverage</h6></li>
                        <li className="list-item-2"><h6 className="h6-heading list">If you have business equipment that you want to make sure is protected</h6></li>
                    </ul>
                      </Col>
                      <Col xs={{span: 24}} lg={{span: 12}}>
                    <ul>
                        <li className="list-item-2"><h6 className="h6-heading list">If you happen to own the building that you work at </h6></li>
                        <li className="list-item-2"><h6 className="h6-heading list">If you have employees that you don’t consider to be trustworthy</h6></li>
                    </ul>
                      </Col>
                  </Row>
                  <Row className="text-center">
                      <Col span={24}>
                          <Button type="block " size="large" className="btn-large text-white bg-blue">
                                          Start Your Free Qoute <ArrowRightOutlined/>
                                        </Button>
                      </Col>
                  </Row>
              </section>
              <section className="section-connect mt-5">
                       <Row >
                          <Col xs={{span: 24}} lg={{span: 9, offset:3 }} >
                         <img src={connectImg} sizes="(max-width: 479px) 100vw, (max-width: 767px) 94vw, (max-width: 991px) 43vw, (max-width: 1279px) 40vw, 515px" srcSet="https://assets.website-files.com/5e2b3fe9d3ee94499c5186d1/60256fd12e4fb0d8c14f1c09_developer-4027337_960_720-p-500.png 500w, https://assets.website-files.com/5e2b3fe9d3ee94499c5186d1/60256fd12e4fb0d8c14f1c09_developer-4027337_960_720.png 788w" alt=""/>
                          </Col>
                          <Col xs={{span: 24}} lg={{span: 12 }} >
                             <div className="container d-flex h-75">
                                 <div className="justify-content-center align-self-center">
                                     <h2 className="mx-auto text-center ">We connect you with live rates in less than 2 minutes</h2>
                                     <Row className="mt-md-5">
                                         <Col xs={{span: 24}}>
                                             <CheckOutlined style={{ color: '#008000' }} /> <p className="d-inline ml-3 text-co2">Quick and reliable</p>
                                         </Col>
                                         <Col xs={{span: 24}}>
                                             <CheckOutlined  style={{ color: '#008000' }}/> <p className="d-inline ml-3 text-co2">Quantum gives you tips!</p>
                                         </Col>
                                         <Col xs={{span: 24}}>
                                             <CheckOutlined  style={{ color: '#008000' }}/> <p className="d-inline ml-3 text-co2">Secure and safe</p>
                                         </Col>
                                         <Col xs={{span: 24}}>
                                             <CheckOutlined style={{ color: '#008000' }}/> <p className="d-inline ml-3 text-co2">We work with top rated companies!</p>
                                         </Col>
                                     </Row>
                                 </div>
                             </div>
                          </Col>
                      </Row>
              </section>
              <section className="trusted-companies pt-4">
                  <div className="container">
                       <Row className="py-5">
                          <Col span={24}>
                          <h3 className="mx-auto text-center text-white">Trusted by some of leading <br/>companies in the world</h3>
                          </Col>
                      </Row>
                        <Row>
                                <Col xs={{span: 24}} lg={{span: 6 }} className="section-two-imgs ">
                                  <img src={travelers} alt="logo1"  className="bg-white custom-rounded py-1"/>
                                </Col>
                                <Col xs={{span: 24}} lg={{span: 6}} className="section-two-imgs " >
                                   <img src={progressive} alt="logo1" className="ml-1 bg-white custom-rounded py-2 px-2"/>
                                </Col>
                                <Col xs={{span: 24}} lg={{span: 6}} className="section-two-imgs mt-md-3">
                                  <img src={stateAuto} alt="logo1" className="bg-white custom-rounded py-2 px-1"/>
                                </Col>
                                <Col xs={{span: 24}} lg={{span: 6}} className="section-two-imgs  mt-md-3">
                                   <img src={farmers} alt="logo1"  className="bg-white custom-rounded py-2 px-1"/>
                                </Col>
                         </Row>
                  </div>
              </section>
          </Content>
          <Footer className="footer">
                <div className="footer-container">
                    <div className="footer-top-wrap-2">
                       <h1 className="heading-16">Quantum Assurance International</h1>
                    </div>
                    <div className="div-block-58"></div>
                </div>
          </Footer>
        </Layout>
    </div>
    );
}

export default App;
