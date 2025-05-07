import styled from 'styled-components';

const ComponentTitle = styled.h1`
    color: blue;
    text-align: center;
    `
const ComponentContainer = styled.div`
    background-color: lightgray;
    padding: 20px;
    border-radius: 5px;
    margin: 20px;
    `
const ManoMygtukas = styled.button`
    color: ${props => props.$danger ? 'red' : 'black'};
    background-color: ${props => props.$danger ? 'pink' : 'lightblue'};
    `
const Text = styled.p `
    color: ${props => props.$spalva ? 'red' : 'black'};
    `
const ComponentSubtitle = styled(ComponentTitle)`
    text-decoration: underline;
`

const manoDiv = styled.div<{$spalva: boolean}>`
    color: ${props => props.$spalva ? 'red' : 'black'};
`

const StyledComponentsExample = () => {
    return (
        <div>
            <ComponentContainer>
            <h1>Styled Components Example</h1>
            <ComponentTitle>Styled Components</ComponentTitle>
            <ComponentSubtitle>This is an example of using styled-components in React.</ComponentSubtitle>
            </ComponentContainer>
            <ManoMygtukas>Normal Button</ManoMygtukas>
            <ManoMygtukas $danger>Danger Button</ManoMygtukas>
            <Text $spalva>Styled Text</Text>
            <manoDiv $spalva>Styled Div</manoDiv>
        </div>
    );
}

export default StyledComponentsExample;