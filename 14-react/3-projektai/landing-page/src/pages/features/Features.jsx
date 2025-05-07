
import { Row, Container } from 'react-bootstrap';
import './Features.scss'
import ItemDetails from '../../components/ItemDetails/ItemDetails';
const Features = ({title,featuresItems}) => {
    return (
        <div className="features">
            <Container>
                <h1 className="features-title">{title}</h1>
                <span className="features-underline"></span>
                <Row className="features-grid">
                    { featuresItems.map((item, key) => (
                        <div className="feature-card">
                            <ItemDetails 
                            key={key}
                                title={item.title}
                                text={item.text}
                                iconName={item.icon}
                                titleClass="feature-card-title"
                                textClass="feature-card-desc"
                            />
                        </div>
                    ))}
                </Row>
            </Container>
        </div>
    )
}

export default Features;