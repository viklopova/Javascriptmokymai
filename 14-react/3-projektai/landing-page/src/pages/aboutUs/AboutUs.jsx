import { Container, Row, Col } from 'react-bootstrap';
import './AboutUs.scss';
import aboutUsBG from '../../assets/aboutUs/aboutUsBG.jpg';
import { FaCheck } from "react-icons/fa6";

const AboutUs = ({ title, description, whyChooseUs, whyChooseList }) => {
  return (
    <section className="about-us">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="about-us-image">
            <img src={aboutUsBG} />
          </Col>
          <Col md={6} className="about-us-content">
            <h2>{title}</h2>
            <span className="about-us-underline"></span>
            <p>{description}</p>
            
            <div className="why-choose-us">
              <h3>{whyChooseUs}</h3>
              <Row className="why-choose-list" style={{display:'flex', flexWrap: 'wrap'}}> 
                        {
                            whyChooseList.map((item, index) => (
                                <Col sm={6} key={index}>
                                    <FaCheck /> {item}
                                </Col>
                            ))
                        }
                    </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
