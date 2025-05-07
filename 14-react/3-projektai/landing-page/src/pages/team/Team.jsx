import { Container } from "react-bootstrap"
import './Team.scss' 
import data from '../../data/data.json'

    const Team = () => {
        const { title, subtitle, teamItems } = data.team;
    return (
        <section className="team">
            <Container>
                <div className="text-center mb-5">
                    <h2 className="section-title">{title}</h2>
                    <span className="section-underline"></span>
                    <p className="section-subtitle">{subtitle}</p>
                </div>
                <div className="team-grid">
                    {teamItems.map((item, index) => (
                        <div key={index} className="team-item">
                            <div className="team-image">
                                <img src={item.img}/>
                            </div>
                            <div className="team-info">
                                <h3 className="team-name">{item.name}</h3>
                                <p className="team-position">{item.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}

export default Team
