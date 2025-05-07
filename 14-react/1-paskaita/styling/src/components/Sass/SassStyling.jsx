import './SassStyling.scss';

const SassStyling  =() => {
    return (
        <div id="sassComponent">
            <h3>Sass Styling</h3>

            <div id="sassContainer">
                <h5>Mano Sass'o pirmasis bandymas</h5>
                <p className="sassLoremText">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae, inventore.</p>
                <button className='btn-click'>Click me</button>
            </div>

            <div className='sassLinks'>
                <ul>
                    <li><a>Pavizdys</a></li>
                    <li><a>example</a></li>
                </ul>
            </div>
        </div>
    )
}

export default SassStyling;
