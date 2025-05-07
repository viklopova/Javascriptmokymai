
import { Container } from "react-bootstrap"
import './Feedback.scss'
import data from '../../data/data.json'

const Feedback = () => {
    return (
        <section className="feedback">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="section-title">{data.feedback.title}</h2>
                    <span className="section-underline"></span>
                </div>
                <div className="feedback-grid">
                    {data.feedback.feedbackItems.map((item, index) => (
                        <div key={index} className="feedback-item">
                            <div className="feedback-content">
                                <div className="feedback-image">
                                    <img src={item.img}/>
                                </div>
                                <div className="feedback-text-block">
                                    <p className="feedback-text">"{item.feedbackText}"</p>
                                    <p className="feedback-author">-{item.feedbackAuthor}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Feedback

