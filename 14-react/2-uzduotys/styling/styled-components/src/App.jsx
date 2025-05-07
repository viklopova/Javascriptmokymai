import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  font-family: "Segoe UI", sans-serif;
  background-color: #fff;
  color: #222;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #ffe0b3;
`;

const ProjectName = styled.h1`
  margin: 0;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: #0000ee;
    font-size: 0.9rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Hero = styled.div`
  background-color: rebeccapurple;
  color: white;
  padding: 30px;
  text-align: center;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  padding: 40px;
`;

const Card = styled.div`
  background-color: white;
  padding: 20px;
  border: 1px solid #ccc;

  h3 {
    margin-top: 0;
  }

  p {
    font-size: 15px;
  }
`;

const FooterTop = styled.div`
  background-color: rebeccapurple;
  color: white;
  display: flex;
  justify-content: space-around;
  padding: 20px;
`;

const FooterBottom = styled.div`
  background-color: #ffe0b3;
  color: black;
  display: flex;
  justify-content: space-around;
  padding: 20px;
  font-size: 15px;
`;

const App = () => {
  return (
    <Wrapper>
      <Header>
        <ProjectName>PROJEKTAS</ProjectName>
        <Nav>
          <a href="#">nuoroda 1</a>
          <a href="#">nuoroda 2</a>
          <a href="#">nuoroda 3</a>
          <a href="#">nuoroda 4</a>
          <a href="#">nuoroda 5</a>
        </Nav>
      </Header>

      <Hero>
        Laudantium ducimus quis necessitatibus, tenetur recusandae molestias
        facilis nam architecto corrupti nemo quaerat impedit, rerum quam ut
        dolorem porro error aliquid velit?
      </Hero>

      <Cards>
        <Card>
          <h3>straipsnis 1</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            laboriosam deleniti...
          </p>
        </Card>

        <Card>
          <h3>straipsnis 1</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            laboriosam deleniti...
          </p>
        </Card>

        <Card>
          <h3>straipsnis 1</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            laboriosam deleniti...
          </p>
        </Card>

        <Card>
          <h3>straipsnis 1</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            laboriosam deleniti...
          </p>
        </Card>

        <Card>
          <h3>straipsnis 1</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            laboriosam deleniti...
          </p>
        </Card>

        <Card>
          <h3>straipsnis 1</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
            laboriosam deleniti...
          </p>
        </Card>

      </Cards>

      <FooterTop>
        <span>Lorem ipsum dolor sit amet.</span>
        <span>Lorem ipsum dolor sit amet.</span>
      </FooterTop>

      <FooterBottom>
        <span>Lorem ipsum dolor sit amet.</span>
        <span>Quaerat saepe animi hic labore.</span>
        <span>Voluptatibus sint consequatur ad odio.</span>
      </FooterBottom>
    </Wrapper>
  );
};

export default App;
