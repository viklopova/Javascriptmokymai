const InlineStylingObjects = () => {

    let divContainer = {display: 'block', color: 'orange', margin: '20px'}
    let textColor = {color: 'pink', fontSize: '20px'}
    let isPrimary = false

    return (
        <div style={divContainer} >
            <h3 style={textColor} >Inline Styling JS objects Example</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, voluptatibus!</p>
            <buuton style = {{color: isPrimary ? 'red' : 'green'}}>Click me</buuton>
        </div>
    );
}
export default InlineStylingObjects;