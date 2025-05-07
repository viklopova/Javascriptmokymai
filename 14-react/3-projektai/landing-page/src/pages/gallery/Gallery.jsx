
import { Container } from 'react-bootstrap';
import './Gallery.scss';
import data from '../../data/data.json';

const Gallery = () => {
    const { title, description, galleryItems } = data.gallery;

    return (
        <section className="gallery-section">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="section-title">{title}</h2>
                    <span className="section-underline"></span>
                    <p className="section-description">{description}</p>
                </div>
                <div className="gallery-grid">
                    {galleryItems.map((item) => (
                        <div key={item.id} className="gallery-item">
                            <a href={item.image} target="_blank">
                                <img src={item.image} alt={item.title} />
                                <div className="gallery-overlay">
                                    <h3 className="gallery-title">{item.title}</h3>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Gallery;